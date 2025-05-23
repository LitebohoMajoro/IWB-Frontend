import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialProducts = [
  { id: 0, name: "Secure Sockets Layer", price: 160, stock: 5, img: "img/Secure sockets.jpg", rating: "⭐⭐⭐⭐⭐" },
  { id: 1, name: "Natural Language Processing", price: 300, stock: 4, img: "img/NLP.jpg", rating: "⭐⭐⭐☆☆" },
  { id: 2, name: "CODE", price: 250, stock: 4, img: "img/LOGO.jpg", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Recoverit", price: 50, stock: 6, img: "img/recoverit.png", rating: "⭐⭐⭐⭐☆" },
  { id: 4, name: "DBan", price: 95, stock: 5, img: "img/dban.png", rating: "⭐⭐⭐☆☆" },
  { id: 5, name: "Easeus", price: 100, stock: 6, img: "img/easeus.png", rating: "⭐⭐⭐☆☆" },
  { id: 6, name: "PC Optimizer", price: 150, stock: 7, img: "img/PC Optimizer.jpeg", rating: "⭐⭐⭐⭐⭐" },
  { id: 7, name: "Malware Defender", price: 200, stock: 5, img: "img/Malware Defender.jpeg", rating: "⭐⭐⭐⭐⭐" },
];

export default function CartContent() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(() => {
    const saved = sessionStorage.getItem("products");
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const filteredProducts = products
    .filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (filterCategory === "all") return matchesSearch;
      if (filterCategory === "tools") return matchesSearch;
      if (filterCategory === "hardware") return matchesSearch;
      return true;
    })
    .sort((a, b) => {
      return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
    });

  const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    const inCart = cart.find((item) => item.id === id);
    if (inCart) {
      if (inCart.quantity >= product.stock) {
        alert(`Only ${product.stock} ${product.name} available in stock.`);
        return;
      }
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increase = (id) => {
    const product = products.find((p) => p.id === id);
    const item = cart.find((c) => c.id === id);
    if (item.quantity < product.stock) {
      setCart(cart.map(c => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      alert(`No more stock available for ${product.name}.`);
    }
  };

  const decrease = (id) => {
    const item = cart.find((c) => c.id === id);
    if (item.quantity > 1) {
      setCart(cart.map(c => c.id === id ? { ...c, quantity: item.quantity - 1 } : c));
    } else {
      setCart(cart.filter(c => c.id !== id));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const recommendations = [];
    cart.forEach((item) => {
      if (item.quantity >= 3) {
        const suggestable = products.filter(
          (p) => !cart.some(c => c.id === p.id) && p.id !== item.id
        );
        recommendations.push(...suggestable.slice(0, 2));
      }
    });
    const unique = recommendations.filter(
      (value, index, self) => index === self.findIndex((v) => v.id === value.id)
    );
    setNotifications(unique);
  }, [cart, products]);

  const processPayment = () => {
  if (total <= 0) {
    alert("Your cart is empty or total is invalid.");
    return;
  }
  const customerName = prompt("Enter your name:");
  const customerEmail = prompt("Enter your email:");
  if (!customerName || !customerEmail) {
    alert("Name and email are required to continue.");
    return;
  }

  const paymentSession = {
    name: customerName,
    email: customerEmail,
    items: cart,
    total,
  };

  sessionStorage.setItem("pendingPayment", JSON.stringify(paymentSession));
  
  // Store recommended products
  const recommended = products.filter(p => 
    p.stock > 0 && !cart.find(c => c.id === p.id)
  );
  sessionStorage.setItem("recommendations", JSON.stringify(recommended));

  // Trigger email notification
  fetch("http://localhost:5000/api/email/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: customerName,
      email: customerEmail,
      recommendations: recommended,
    }),
  })
  .then(res => res.json())
  .then(data => console.log("📧 Email API:", data))
  .catch(err => console.error("📧 Email API Error:", err));

  navigate("/payment");
};

  return (
    <>
      <nav className="top-nav">
        <h2>IWB Marketplace</h2>
        <Link to="/notifications" className="bell-icon" title="Notifications">
          🔔 {notifications.length > 0 && <span className="notif-count">{notifications.length}</span>}
        </Link>
      </nav>

      <section className="filter-bar">
        <input
          type="text"
          placeholder="Search products......"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="filter-selector"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="tools">Software</option>
          <option value="hardware">Hardware</option>
        </select>
        <select
          className="sort-selector"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </section>

      {showNotifications && notifications.length > 0 && (
        <div className="notif-dropdown">
          <h4>Recommended for you</h4>
          {notifications.map((item) => (
            <div key={item.id} className="notif-item">
              <img src={item.img} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <p>M{item.price}</p>
                <button onClick={() => addToCart(item.id)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <main className="content">
        <h1>Sustainable Recycling Tech Marketplace</h1>
        <h4>High-quality recycled and refurbished components</h4>

        <section className="product-grid">
          {filteredProducts.length === 0 && (
            <div style={{ textAlign: "center", marginTop: 20, fontWeight: "bold" }}>
              ❌ No matching product found.
            </div>
          )}
          {filteredProducts.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>M{p.price}</p>
              <div className="rating">{p.rating}</div>
              <button onClick={() => addToCart(p.id)}>Add to Cart</button>
            </div>
          ))}
        </section>

        {cart.length > 0 && (
          <div className="floating-cart">
            <div className="cart-header">🛒 Items selected ({cart.reduce((acc, c) => acc + c.quantity, 0)})</div>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <span>{item.name}</span>
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                  <span>M{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div>Total: M{total}</div>
              <button className="pay-btn" onClick={processPayment}>Pay Now</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
