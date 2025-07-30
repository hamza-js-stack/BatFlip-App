import React, { useState, useEffect } from "react";
import BatCard from "../components/BatCard";
import HelmetGloveShowcase from "../components/HelmetGloveShowcase";
import "../index.css";

const bats = [
  { id: 1, name: "SS Vintage", price: "$120", img: "https://wizsports.com.au/cdn/shop/files/ihsan-black-gold-english-willow-cricket-bat-sh-cricket-bats-906845.png?v=1739070772" },
  { id: 2, name: "MRF Genius", price: "$150", img: "https://championsports.pk/wp-content/uploads/2024/01/20231227103523542885499.jpg" },
  { id: 3, name: "Kookaburra Kahuna", price: "$140", img: "https://championsports.pk/wp-content/uploads/2024/01/20231226113319438839510.jpg" },
  { id: 4, name: "SG Scorer Classic", price: "$135", img: "https://img.freepik.com/premium-vector/cricket-bat-vector-illustration_110233-79.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 5, name: "GM Diamond", price: "$155", img: "https://championsports.pk/wp-content/uploads/2024/01/202312271054211291030017.jpg" },
  { id: 6, name: "CA Bat", price: "$125", img: "https://m.media-amazon.com/images/I/31LnhoH6p2L._AC_UF894,1000_QL80_.jpg" },
  { id: 7, name: "New Balance", price: "$145", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6RTPDfUP1cxuO8XKEyU3AFl73zedAar2HrHya9_XNPDVh-feSnBrMgAkGhEVSUuNbw4&usqp=CAU" },
  { id: 8, name: "Adidas Cricket", price: "$160", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2V7lD2Os-jnVA7fd_OnRwCf8WKhIRF829bvSLcxfhEyk9ecDrYNahKQWLqZgF65WCbA&usqp=CAU" },
  { id: 9, name: "Spartan Pro", price: "$170", img: "https://m.media-amazon.com/images/I/61-iH7MlcVL._UF1000,1000_QL80_.jpg" },
];

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLightBlue, setIsLightBlue] = useState(true);

  useEffect(() => {
    document.body.className = isLightBlue ? "lightblue-theme" : "black-theme";
  }, [isLightBlue]);

  const addToCart = (item) => {
    const existing = cartItems.find((ci) => ci.id === item.id);
    if (existing) {
      const updated = cartItems.map((ci) =>
        ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + item.quantity * price;
    }, 0);
  };

  return (
    <div className="home">
      {/* Theme Toggle */}
      <button
        className="theme-toggle-btn"
        onClick={() => setIsLightBlue(!isLightBlue)}
      >
        Switch to {isLightBlue ? "Black" : "Light Blue"} Theme
      </button>

      {/* Bat Title Section */}
      <div className="bat-section">
        <h1 className="bat-title">POPULAR CRICKET BATS</h1>
        <p style={{ fontStyle: "italic", fontSize: "1.1rem", color: "inherit" }}>
          Find your perfect match and level up your game
        </p>
      </div>

      {/* Bat Section with Background */}
      <div
        style={{
          backgroundImage: "url('https://www.cric-life.com/wp-content/uploads/2020/10/which-ground-is-called-the-mecca-of-cricket.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
          borderRadius: "0 0 16px 16px",
          marginBottom: "50px",
        }}
      >
        <div className="bat-grid">
          {bats.map((bat) => (
            <div key={bat.id} className="bat-hover-zoom">
              <BatCard {...bat} onAddToCart={() => addToCart(bat)} />
            </div>
          ))}
        </div>
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        🛒 {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        <div className="cart-popup">
          <h3>Cart Items</h3>
          {cartItems.length === 0 ? (
            <p>No items yet</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.price} × {item.quantity}
                </li>
              ))}
            </ul>
          )}
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            Total: ${getTotal().toFixed(2)}
          </p>
        </div>
      </div>

      {/* Helmet and Gloves Section */}
      <HelmetGloveShowcase addToCart={addToCart} />

      {/* Helmet Animation */}
      <div className="helmet-container">
        <img
          src="https://tornadosportscompany.com/cdn/shop/products/HELMETSPAKISTAN2.jpg?v=1671609085"
          alt="Helmet"
          className="helmet-animation"
        />
      </div>

      {/* Sale Banner */}
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 20px",
          marginTop: "40px",
          borderRadius: "10px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            BEST SUMMER SALE
          </h2>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            COLLECT YOUR SPORTS EQUIPMENTS
          </p>
        </div>

        <div style={{ textAlign: "center", flex: 1, minWidth: "250px" }}>
          <img
            src="https://valuebox.pk/cdn/shop/products/hcUunKSTr9.jpg?v=1718064744"
            alt="Sale Helmet"
            style={{ width: "180px", height: "auto", borderRadius: "10px" }}
          />
          <p
            style={{
              fontSize: "1rem",
              marginTop: "10px",
              backgroundColor: "white",
              color: "red",
              display: "inline-block",
              padding: "5px 10px",
              fontWeight: "bold",
              borderRadius: "6px",
            }}
          >
            20% OFF | 14AUG–20AUG
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "50px",
          backgroundColor: "#111",
          color: "#bbb",
          padding: "20px",
          textAlign: "center",
          fontSize: "0.9rem",
          borderTop: "2px solid #333",
        }}
      >
        © 2025 <strong style={{ color: "#fff" }}>BatFlip App</strong>. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
