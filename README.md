# ProductMind — AI Product Recommender System

A full-stack AI-powered product recommendation web application. Users select a product category and receive intelligent, ranked recommendations powered by a hybrid machine learning model (content-based + collaborative filtering).

---

## Architecture

```
┌─────────────────┐      HTTP      ┌──────────────────────┐      ┌──────────────────────┐
│  Frontend       │ ─────────────► │  Node.js (Port 3000) │ ───► │  Python Flask (5000) │
│  HTML/CSS/JS    │                │  Caching · Routing   │      │  ML Recommender API  │
└─────────────────┘                └──────────────────────┘      └──────────────────────┘
```

---

## Project Structure

```
productmind/
├── index.html          # Frontend HTML
├── style.css           # Frontend styles
├── app.js              # Frontend JavaScript
├── server.py           # Python Flask API + ML model
├── middleware.js        # Node.js Express middleware
├── requirements.txt    # Python dependencies
├── package.json        # Node.js dependencies
├── data/
│   └── products.csv    # Product dataset (add your own)
└── README.md
```

---

## Setup & Run

### 1. Python Backend (Flask + ML)

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python server.py
# → Running on http://localhost:5000
```

### 2. Node.js Middleware

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
# → Running on http://localhost:3000
```

### 3. Frontend

Simply open `index.html` in your browser, **or** copy it to the `public/` folder of the Node.js server to be served automatically.

---

## API Reference

### `GET /api/recommend`
Returns top product recommendations for a category.

**Query Params:**
| Param | Type | Default | Options |
|-------|------|---------|---------|
| category | string | electronics | electronics, fashion, books, home, sports, beauty |
| sort | string | score | score, rating, price_asc, price_desc |
| top_n | int | 6 | 1–20 |

**Example:**
```
GET /api/recommend?category=electronics&sort=rating&top_n=6
```

**Response:**
```json
{
  "category": "electronics",
  "sort_by": "rating",
  "count": 6,
  "products": [
    {
      "product_id": 2,
      "name": "Apple MacBook Air M3",
      "category": "electronics",
      "price": 114900,
      "rating": 4.9,
      "score": 100
    }
  ]
}
```

---

### `GET /api/similar/:productId`
Returns similar products using content-based cosine similarity.

```
GET /api/similar/1?top_n=5
```

---

### `GET /api/categories`
Returns all available product categories.

---

### `GET /api/health`
Health check for both Node.js and Python services.

---

## ML Model Details

The recommender uses a **hybrid approach**:

1. **Content-Based Filtering**
   - TF-IDF vectorization of product descriptions
   - Cosine similarity to find related products

2. **Collaborative Filtering (optional)**
   - TruncatedSVD matrix factorization on user–item interaction matrix
   - Surfaces products liked by similar users

3. **Scoring**
   - Scores are blended from similarity, normalized ratings, and price competitiveness
   - MinMaxScaler normalizes all features to [0, 1]

---

## Environment Variables

Create a `.env` file:

```env
PYTHON_API_URL=http://localhost:5000
PORT=3000
MONGODB_URI=mongodb://localhost:27017/productmind
```

---

## Dataset

The app ships with in-memory demo data. To use a real dataset:

1. Create `data/products.csv` with columns:
   `product_id, name, category, price, rating, description`

2. The Flask server will auto-load it on startup.

---

## Deployment

**Python (Flask):** Deploy on Railway, Render, or AWS EC2
```bash
gunicorn server:app --workers 2 --bind 0.0.0.0:5000
```

**Node.js:** Deploy on Vercel, Railway, or Heroku
```bash
npm start
```
