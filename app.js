// ─── Config ───────────────────────────────────────────────────────────────────
const API_BASE = "http://localhost:3000";

// ─── Fallback images ──────────────────────────────────────────────────────────
const FALLBACK_IMAGES = {
  electronics: [
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&auto=format",
  ],
  fashion: [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
  ],
  books: [
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop&auto=format",
  ],
  home: [
    "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1648501507816-e1c4dccce8b2?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&auto=format",
  ],
  sports: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1601925228008-52e5d3e80bab?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=400&fit=crop&auto=format",
  ],
  beauty: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1631214524020-3c69cb3b1c81?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&auto=format",
  ]
};

const CATEGORY_LABELS = {
  electronics: "Electronics", fashion: "Fashion", books: "Books",
  home: "Home & Kitchen", sports: "Sports", beauty: "Beauty"
};
const CATEGORY_ICONS = {
  electronics: "⚡", fashion: "👗", books: "📚", home: "🏠", sports: "🏃", beauty: "✨"
};

// ─── Mock fallback data ───────────────────────────────────────────────────────
const MOCK = {
  electronics: [
    { name: "Sony WH-1000XM5", brand: "Sony", price: 24999, rating: 4.8, score: 97 },
    { name: "Apple MacBook Air M3", brand: "Apple", price: 114900, rating: 4.9, score: 95 },
    { name: "Samsung 4K OLED TV", brand: "Samsung", price: 89999, rating: 4.7, score: 91 },
    { name: "OnePlus 12 Pro", brand: "OnePlus", price: 64999, rating: 4.6, score: 88 },
    { name: "Logitech MX Master 3", brand: "Logitech", price: 8999, rating: 4.8, score: 86 },
    { name: "Anker 100W GaN", brand: "Anker", price: 2799, rating: 4.5, score: 82 },
  ],
  fashion: [
    { name: "Levi's 511 Jeans", brand: "Levi's", price: 3499, rating: 4.6, score: 94 },
    { name: "Nike Air Force 1", brand: "Nike", price: 7495, rating: 4.8, score: 92 },
    { name: "Uniqlo Merino Crew", brand: "Uniqlo", price: 1999, rating: 4.5, score: 89 },
    { name: "Ray-Ban Wayfarer", brand: "Ray-Ban", price: 9999, rating: 4.7, score: 85 },
    { name: "Fossil Gen 6 Watch", brand: "Fossil", price: 19999, rating: 4.4, score: 81 },
    { name: "Herschel Backpack", brand: "Herschel", price: 5999, rating: 4.6, score: 78 },
  ],
  books: [
    { name: "Atomic Habits", brand: "James Clear", price: 499, rating: 4.9, score: 98 },
    { name: "Deep Work", brand: "Cal Newport", price: 399, rating: 4.7, score: 93 },
    { name: "Psychology of Money", brand: "Morgan Housel", price: 449, rating: 4.8, score: 91 },
    { name: "Thinking, Fast and Slow", brand: "D. Kahneman", price: 599, rating: 4.6, score: 87 },
    { name: "Zero to One", brand: "Peter Thiel", price: 349, rating: 4.5, score: 83 },
    { name: "The Lean Startup", brand: "Eric Ries", price: 399, rating: 4.4, score: 79 },
  ],
  home: [
    { name: "Instant Pot Duo 7-in-1", brand: "Instant Pot", price: 6999, rating: 4.8, score: 96 },
    { name: "Dyson V12 Slim", brand: "Dyson", price: 44900, rating: 4.7, score: 93 },
    { name: "Philips Air Fryer XXL", brand: "Philips", price: 12999, rating: 4.6, score: 90 },
    { name: "IKEA KALLAX Shelf", brand: "IKEA", price: 5499, rating: 4.5, score: 85 },
    { name: "Bosch Stand Mixer", brand: "Bosch", price: 18999, rating: 4.6, score: 82 },
    { name: "Premium Bedsheet Set", brand: "Spaces", price: 1299, rating: 4.3, score: 77 },
  ],
  sports: [
    { name: "Running Shoes Pro", brand: "Decathlon", price: 2499, rating: 4.5, score: 92 },
    { name: "Match Football", brand: "Cosco", price: 799, rating: 4.4, score: 88 },
    { name: "Yoga Mat Pro", brand: "Nivia", price: 1299, rating: 4.6, score: 86 },
    { name: "Badminton Racket Carbon", brand: "Yonex", price: 8999, rating: 4.8, score: 83 },
    { name: "Resistance Bands Set", brand: "Boldfit", price: 599, rating: 4.3, score: 79 },
    { name: "Speed Jump Rope", brand: "Domyos", price: 349, rating: 4.4, score: 75 },
  ],
  beauty: [
    { name: "Niacinamide 10% Serum", brand: "Minimalist", price: 399, rating: 4.7, score: 95 },
    { name: "Vitamin C Face Serum", brand: "Dot & Key", price: 499, rating: 4.6, score: 91 },
    { name: "Matte Foundation", brand: "Lakme", price: 799, rating: 4.5, score: 87 },
    { name: "Green Tea Face Mask", brand: "Plum", price: 549, rating: 4.6, score: 84 },
    { name: "SPF 50 Sunscreen", brand: "Biotique", price: 299, rating: 4.3, score: 80 },
    { name: "Argan Hair Oil", brand: "Mamaearth", price: 349, rating: 4.4, score: 76 },
  ]
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentCategory = "electronics";
let isLoading       = false;
let wishlist        = JSON.parse(localStorage.getItem("pm_wishlist") || "[]");
let compareList     = []; // max 2 products

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const categoryBtns    = document.querySelectorAll(".cat-btn");
const recommendBtn    = document.getElementById("recommendBtn");
const productGrid     = document.getElementById("productGrid");
const resultsTitle    = document.getElementById("resultsTitle");
const resultsCount    = document.getElementById("resultsCount");
const sortSelect      = document.getElementById("sortBy");
const statusMsg       = document.getElementById("statusMsg");
const wishlistDrawer  = document.getElementById("wishlistDrawer");
const drawerOverlay   = document.getElementById("drawerOverlay");
const wishlistItems   = document.getElementById("wishlistItems");
const wishlistNavCount= document.getElementById("wishlistNavCount");
const comparePanel    = document.getElementById("comparePanel");
const compareSlots    = document.getElementById("compareSlots");
const compareBtn      = document.getElementById("compareBtn");
const compareModal    = document.getElementById("compareModal");
const compareOverlay  = document.getElementById("compareOverlay");
const compareBody     = document.getElementById("compareBody");

// ─── Init ─────────────────────────────────────────────────────────────────────
updateWishlistCount();
fetchAndRender(currentCategory);

// ─── Category & sort listeners ────────────────────────────────────────────────
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
  });
});

recommendBtn.addEventListener("click", () => { if (!isLoading) fetchAndRender(currentCategory); });
sortSelect.addEventListener("change", () => { if (!isLoading) fetchAndRender(currentCategory); });

// ─── Fetch from real API ──────────────────────────────────────────────────────
async function fetchAndRender(category) {
  if (isLoading) return;
  isLoading = true;
  recommendBtn.textContent = "Analyzing...";
  recommendBtn.classList.add("loading");
  showSkeletons();
  setStatus("", false);

  const sort = sortSelect.value;
  const url  = `${API_BASE}/api/recommend?category=${category}&sort=${sort}&top_n=6`;

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!data.products || data.products.length === 0) { showError("No products found."); return; }

    const fallbacks = FALLBACK_IMAGES[category] || [];
    const products  = data.products.map((p, i) => ({ ...p, img: p.img || fallbacks[i] || fallbacks[0] }));
    renderProducts(products, category);
    setStatus(`✓ Live data from API — ${data.count} products`, false);
  } catch {
    renderFallback(category, sort);
    setStatus("⚠ API offline — showing demo data", true);
  } finally {
    isLoading = false;
    recommendBtn.textContent = "Get Recommendations";
    recommendBtn.classList.remove("loading");
  }
}

// ─── Render product cards ─────────────────────────────────────────────────────
function renderProducts(products, category) {
  resultsTitle.textContent = `${CATEGORY_LABELS[category]} — Top Picks`;
  resultsCount.textContent = `${products.length} products`;
  productGrid.innerHTML    = "";
  compareList = [];
  updateComparePanel();

  products.forEach((p, i) => {
    const id        = `${category}-${i}`;
    const score     = p.score || Math.round(p.rating * 20);
    const icon      = CATEGORY_ICONS[category] || "📦";
    const inWish    = wishlist.some(w => w.name === p.name);
    const inCompare = compareList.some(c => c.id === id);

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.06}s`;
    card.dataset.id = id;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'img-fallback\\'>${icon}</div>'" />
        <span class="score-badge">${score}% match</span>
        <button class="wish-btn ${inWish ? "active" : ""}"
          title="${inWish ? "Remove from wishlist" : "Add to wishlist"}"
          onclick="toggleWishlist(event, ${JSON.stringify(p).replace(/"/g, "&quot;")})">
          ${inWish ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-brand">${p.brand || ""}</div>
        <div class="product-score">
          <div class="score-bar"><div class="score-fill" style="width:${score}%"></div></div>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${Number(p.price).toLocaleString("en-IN")}</div>
          <div class="product-rating">⭐ ${p.rating}</div>
        </div>
        <div class="compare-check-wrap">
          <input type="checkbox" id="cmp-${id}" data-id="${id}"
            onchange="toggleCompare(this, ${JSON.stringify(p).replace(/"/g, "&quot;")}, '${id}')" />
          <label for="cmp-${id}">Add to Compare</label>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════
// FEATURE 1 — WISHLIST
// ═══════════════════════════════════════════════════════

function toggleWishlist(e, product) {
  e.stopPropagation();
  const btn    = e.currentTarget;
  const exists = wishlist.findIndex(w => w.name === product.name);

  if (exists > -1) {
    wishlist.splice(exists, 1);
    btn.classList.remove("active");
    btn.innerHTML = "♡";
    btn.title = "Add to wishlist";
  } else {
    wishlist.push(product);
    btn.classList.add("active");
    btn.innerHTML = "♥";
    btn.title = "Remove from wishlist";
    animateHeart(btn);
  }

  localStorage.setItem("pm_wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderWishlistDrawer();
}

function animateHeart(btn) {
  btn.style.transform = "scale(1.4)";
  setTimeout(() => { btn.style.transform = ""; }, 250);
}

function updateWishlistCount() {
  wishlistNavCount.textContent = wishlist.length;
  wishlistNavCount.style.display = wishlist.length > 0 ? "flex" : "none";
}

function openWishlist() {
  renderWishlistDrawer();
  wishlistDrawer.classList.add("open");
  drawerOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeWishlist() {
  wishlistDrawer.classList.remove("open");
  drawerOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

function renderWishlistDrawer() {
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `<div class="drawer-empty">Your wishlist is empty.<br/>Click ♡ on any product to save it.</div>`;
    return;
  }
  wishlistItems.innerHTML = "";
  wishlist.forEach((p, i) => {
    const item = document.createElement("div");
    item.className = "wishlist-item";
    item.innerHTML = `
      <img src="${p.img || ""}" alt="${p.name}"
        onerror="this.style.background='#f0f0f0';this.src='';" />
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${p.name}</div>
        <div class="wishlist-item-brand">${p.brand || ""}</div>
        <div class="wishlist-item-price">₹${Number(p.price).toLocaleString("en-IN")}</div>
      </div>
      <button class="wishlist-item-remove" onclick="removeFromWishlist(${i})" title="Remove">✕</button>
    `;
    wishlistItems.appendChild(item);
  });
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("pm_wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderWishlistDrawer();
  // Update heart buttons on visible cards
  document.querySelectorAll(".wish-btn.active").forEach(btn => {
    const name = btn.closest(".product-card").querySelector(".product-name").textContent;
    if (!wishlist.some(w => w.name === name)) {
      btn.classList.remove("active");
      btn.innerHTML = "♡";
    }
  });
}

// ═══════════════════════════════════════════════════════
// FEATURE 2 — QUICK COMPARE
// ═══════════════════════════════════════════════════════

function toggleCompare(checkbox, product, id) {
  if (checkbox.checked) {
    if (compareList.length >= 2) {
      checkbox.checked = false;
      alert("You can only compare 2 products at a time. Remove one first.");
      return;
    }
    compareList.push({ ...product, id });
  } else {
    compareList = compareList.filter(c => c.id !== id);
  }
  updateComparePanel();
}

function updateComparePanel() {
  compareSlots.innerHTML = "";

  const slot1 = compareList[0] || null;
  const slot2 = compareList[1] || null;

  [slot1, slot2].forEach((p, i) => {
    const slot = document.createElement("div");
    slot.className = "compare-slot";
    if (p) {
      slot.innerHTML = `
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px;">${p.name}</span>
        <button class="compare-slot-remove" onclick="removeFromCompare('${p.id}')">✕</button>
      `;
    } else {
      slot.innerHTML = `<span class="compare-slot-empty">Slot ${i + 1} empty</span>`;
    }
    compareSlots.appendChild(slot);
  });

  compareBtn.disabled = compareList.length < 2;
}

function removeFromCompare(id) {
  compareList = compareList.filter(c => c.id !== id);
  // Uncheck the checkbox
  const cb = document.querySelector(`input[data-id="${id}"]`);
  if (cb) cb.checked = false;
  updateComparePanel();
}

function openCompare() {
  if (compareList.length < 2) return;
  const [a, b] = compareList;

  const aBetter = (field) => {
    if (field === "price") return a.price < b.price; // lower is better
    return (a[field] || 0) > (b[field] || 0);
  };

  const scoreA = a.score || Math.round(a.rating * 20);
  const scoreB = b.score || Math.round(b.rating * 20);

  compareBody.innerHTML = `
    <div class="compare-col">
      <img src="${a.img || ""}" alt="${a.name}" onerror="this.style.background='#f0f0f0';this.src=''" />
      <div class="compare-col-name">${a.name}</div>
      <div class="compare-col-brand">${a.brand || ""}</div>
      <div class="compare-row">
        <span class="compare-row-label">Price</span>
        <span class="compare-row-val ${aBetter("price") ? "better" : ""}">₹${Number(a.price).toLocaleString("en-IN")}</span>
      </div>
      <div class="compare-row">
        <span class="compare-row-label">Rating</span>
        <span class="compare-row-val ${aBetter("rating") ? "better" : ""}">⭐ ${a.rating}</span>
      </div>
      <div class="compare-row">
        <span class="compare-row-label">AI Match</span>
        <span class="compare-row-val ${scoreA >= scoreB ? "better" : ""}">${scoreA}%</span>
      </div>
      <div class="compare-row">
        <span class="compare-row-label">Category</span>
        <span class="compare-row-val">${a.category || currentCategory}</span>
      </div>
    </div>

    <div class="compare-divider"></div>

    <div class="compare-col">
      <img src="${b.img || ""}" alt="${b.name}" onerror="this.style.background='#f0f0f0';this.src=''" />
      <div class="compare-col-name">${b.name}</div>
      <div class="compare-col-brand">${b.brand || ""}</div>
      <div class="compare-row">
        <span class="compare-row-label">Price</span>
        <span class="compare-row-val ${!aBetter("price") ? "better" : ""}">₹${Number(b.price).toLocaleString("en-IN")}</span>
      </div>
      <div class="compare-row">
        <span class="compare-row-label">Rating</span>
        <span class="compare-row-val ${!aBetter("rating") ? "better" : ""}">⭐ ${b.rating}</span>
      </div>
      <div class="compare-row">
        <span class="compare-row-label">AI Match</span>
        <span class="compare-row-val ${scoreB > scoreA ? "better" : ""}">${scoreB}%</span>
      </div>
      <div class="compare-row">
        <span class="compare-row-label">Category</span>
        <span class="compare-row-val">${b.category || currentCategory}</span>
      </div>
    </div>
  `;

  compareModal.classList.add("open");
  compareOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCompare() {
  compareModal.classList.remove("open");
  compareOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ─── Fallback render ──────────────────────────────────────────────────────────
function renderFallback(category, sort) {
  let products = [...(MOCK[category] || [])];
  if (sort === "rating")      products.sort((a, b) => b.rating - a.rating);
  else if (sort === "price_asc")  products.sort((a, b) => a.price - b.price);
  else if (sort === "price_desc") products.sort((a, b) => b.price - a.price);
  else products.sort((a, b) => b.score - a.score);

  const fallbacks  = FALLBACK_IMAGES[category] || [];
  const withImages = products.map((p, i) => ({ ...p, img: fallbacks[i] || fallbacks[0] }));
  renderProducts(withImages, category);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function showSkeletons() {
  productGrid.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="skeleton" style="height:220px;border-radius:10px 10px 0 0;"></div>
      <div class="product-info">
        <div class="skeleton" style="height:15px;width:85%;margin-bottom:8px;border-radius:4px;"></div>
        <div class="skeleton" style="height:12px;width:50%;margin-bottom:14px;border-radius:4px;"></div>
        <div class="skeleton" style="height:5px;margin-bottom:14px;border-radius:4px;"></div>
        <div style="display:flex;justify-content:space-between;">
          <div class="skeleton" style="height:18px;width:38%;border-radius:4px;"></div>
          <div class="skeleton" style="height:18px;width:22%;border-radius:4px;"></div>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  }
}

function showError(msg) {
  productGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#888;">${msg}</div>`;
  resultsCount.textContent = "0 products";
}

function setStatus(msg, isWarning) {
  if (!statusMsg) return;
  statusMsg.textContent   = msg;
  statusMsg.style.color   = isWarning ? "#d97706" : "#16a34a";
  statusMsg.style.display = msg ? "block" : "none";
}
