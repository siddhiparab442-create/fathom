"""
ProductMind — Recommender System Backend
Flask API with content-based + collaborative filtering hybrid model
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import MinMaxScaler
import json
import os

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

# ─── Load Dataset ─────────────────────────────────────────────────────────────
# Replace with actual dataset path (CSV or MongoDB connection)
DATA_PATH = "data/products.csv"

def load_products():
    """Load and preprocess product dataset."""
    if os.path.exists(DATA_PATH):
        df = pd.read_csv(DATA_PATH)
    else:
        # Demo in-memory data (replace with real data)
        df = pd.DataFrame({
            "product_id": range(1, 31),
            "name": [
                "Sony WH-1000XM5", "Apple MacBook Air M3", "Samsung OLED TV",
                "OnePlus 12 Pro", "Logitech MX Master 3", "Anker GaN Charger",
                "Levi's 511 Jeans", "Nike Air Force 1", "Uniqlo Merino Crew",
                "Ray-Ban Wayfarer", "Fossil Gen 6 Watch", "Herschel Backpack",
                "Atomic Habits", "Deep Work", "Psychology of Money",
                "Thinking Fast and Slow", "Zero to One", "Lean Startup",
                "Instant Pot Duo", "Dyson V12 Slim", "Philips Air Fryer",
                "IKEA KALLAX Shelf", "Bosch Mixer", "Cello Bedsheet",
                "Decathlon Running Shoes", "Cosco Football", "Nivia Yoga Mat",
                "Yonex Arcsaber 11", "Boldfit Resistance Bands", "Minimalist Serum"
            ],
            "category": (
                ["electronics"] * 6 + ["fashion"] * 6 + ["books"] * 6 +
                ["home"] * 6 + ["sports"] * 5 + ["beauty"] * 1
            ),
            "price": [
                24999, 114900, 89999, 64999, 8999, 2799,
                3499, 7495, 1999, 9999, 19999, 5999,
                499, 399, 449, 599, 349, 399,
                6999, 44900, 12999, 5499, 18999, 1299,
                2499, 799, 1299, 8999, 599, 399
            ],
            "rating": [
                4.8, 4.9, 4.7, 4.6, 4.8, 4.5,
                4.6, 4.8, 4.5, 4.7, 4.4, 4.6,
                4.9, 4.7, 4.8, 4.6, 4.5, 4.4,
                4.8, 4.7, 4.6, 4.5, 4.6, 4.3,
                4.5, 4.4, 4.6, 4.8, 4.3, 4.7
            ],
            "description": [
                "noise cancelling wireless headphones premium audio",
                "lightweight laptop apple silicon fast performance",
                "high resolution display smart television home entertainment",
                "flagship android smartphone fast charging camera",
                "ergonomic wireless mouse productivity work from home",
                "fast charger usb c portable compact travel",
                "slim fit denim comfortable everyday casual wear",
                "classic sneakers white leather iconic streetwear",
                "soft merino wool crew neck minimalist everyday",
                "UV protection polarized lens classic sunglasses",
                "smartwatch fitness tracking heart rate fashion",
                "durable backpack laptop compartment travel outdoor",
                "self improvement productivity habits behavior change",
                "focus deep concentration work productivity no distraction",
                "personal finance wealth investing money psychology",
                "cognitive bias decision making behavioral economics",
                "startup entrepreneurship innovation business zero",
                "startup methodology agile product market fit",
                "pressure cooker slow cook multi function kitchen",
                "cordless stick vacuum lightweight powerful suction",
                "healthy cooking oil free frying crispy food",
                "modular bookshelf storage organization home furniture",
                "stand mixer baking bread cake dough kitchen",
                "cotton bedsheet soft comfortable bedroom sleep",
                "cushioned sole running training breathable shoes",
                "durable practice match football soccer outdoor",
                "non slip thick comfortable exercise yoga fitness",
                "badminton racket professional lightweight carbon fiber",
                "fitness training stretch strength gym home workout",
                "niacinamide skin brightening pore reducing serum"
            ],
            "img": [
                "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1648501507816-e1c4dccce8b2?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1601925228008-52e5d3e80bab?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&h=400&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&auto=format"
            ]
        })
    return df


# ─── Recommender Engine ───────────────────────────────────────────────────────

class RecommenderEngine:
    def __init__(self):
        self.df = load_products()
        self.tfidf = TfidfVectorizer(stop_words="english", max_features=500)
        self.scaler = MinMaxScaler()
        self._build_model()

    def _build_model(self):
        """Build TF-IDF content-based similarity matrix."""
        self.tfidf_matrix = self.tfidf.fit_transform(self.df["description"])
        self.sim_matrix = cosine_similarity(self.tfidf_matrix)
        # Normalize ratings and price for score blending
        self.df["norm_rating"] = self.scaler.fit_transform(
            self.df[["rating"]]
        )
        self.df["score"] = (self.df["norm_rating"] * 100).round(0).astype(int)

    def get_by_category(self, category: str, sort_by: str = "score", top_n: int = 6):
        """Filter products by category and sort."""
        filtered = self.df[self.df["category"] == category].copy()
        if filtered.empty:
            return []

        if sort_by == "rating":
            filtered = filtered.sort_values("rating", ascending=False)
        elif sort_by == "price_asc":
            filtered = filtered.sort_values("price", ascending=True)
        elif sort_by == "price_desc":
            filtered = filtered.sort_values("price", ascending=False)
        else:  # score / relevance
            filtered = filtered.sort_values("norm_rating", ascending=False)

        top = filtered.head(top_n)
        cols = ["product_id", "name", "category", "price", "rating", "score"]
        if "img" in top.columns:
            cols.append("img")
        return top[cols].to_dict(orient="records")

    def get_similar(self, product_id: int, top_n: int = 5):
        """Content-based: return top-N similar products."""
        if product_id not in self.df["product_id"].values:
            return []
        idx = self.df.index[self.df["product_id"] == product_id][0]
        sim_scores = list(enumerate(self.sim_matrix[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = [s for s in sim_scores if s[0] != idx][:top_n]
        result_idx = [s[0] for s in sim_scores]
        return self.df.iloc[result_idx][
            ["product_id", "name", "category", "price", "rating"]
        ].to_dict(orient="records")


# Initialize once at startup
engine = RecommenderEngine()


# ─── API Routes ───────────────────────────────────────────────────────────────

@app.route("/")
def index():
    return jsonify({"message": "ProductMind API is running", "version": "1.0"})


@app.route("/api/recommend", methods=["GET"])
def recommend():
    """
    GET /api/recommend?category=electronics&sort=score&top_n=6
    Returns top recommended products for a given category.
    """
    category = request.args.get("category", "electronics").lower()
    sort_by  = request.args.get("sort", "score")
    top_n    = int(request.args.get("top_n", 6))

    valid_categories = ["electronics", "fashion", "books", "home", "sports", "beauty"]
    if category not in valid_categories:
        return jsonify({"error": f"Invalid category. Choose from: {valid_categories}"}), 400

    products = engine.get_by_category(category, sort_by=sort_by, top_n=top_n)
    return jsonify({
        "category": category,
        "sort_by": sort_by,
        "count": len(products),
        "products": products
    })


@app.route("/api/similar/<int:product_id>", methods=["GET"])
def similar(product_id):
    """
    GET /api/similar/<product_id>
    Returns top-N similar products based on content similarity.
    """
    top_n = int(request.args.get("top_n", 5))
    results = engine.get_similar(product_id, top_n=top_n)
    if not results:
        return jsonify({"error": "Product not found"}), 404
    return jsonify({"product_id": product_id, "similar": results})


@app.route("/api/categories", methods=["GET"])
def categories():
    """GET /api/categories — return all available categories."""
    cats = engine.df["category"].unique().tolist()
    return jsonify({"categories": cats})


@app.route("/api/products", methods=["GET"])
def all_products():
    """GET /api/products — return entire product catalog."""
    products = engine.df[["product_id", "name", "category", "price", "rating"]].to_dict(orient="records")
    return jsonify({"count": len(products), "products": products})


# ─── Run ──────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("🚀 ProductMind API starting on http://localhost:5000")
    app.run(debug=True, host="0.0.0.0", port=5000)
