import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import Navbar from "../layout/Navbar";
import Footers from "../layout/footers";
 

const Home = () => {
const navigate = useNavigate(); 
 
      const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://p1backend.onrender.com/products");
        setProducts(res.data);
        } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner">
        <div>
          <img src="/Container.png" alt="1234" />
        </div>
      </div>

      <div className="home-new-arrivals">
        <div className="new-arrivals-text">Explore our new arrivals!</div>
      </div>

      <div className="new-arrivals-cards">
 <div className="product-grid">

  {products.map((val, ind) => (
  <div className="productCard" key={val._id || ind}  onClick={() => navigate(`/detail/${val._id}`)}>
    
    <div className="productImageWrapper">
      <span className="wishlistIcon">♡</span>
      <img
        className="productImage"
        src={val.images[0]}
        alt={val.name}
      />
      {console.log(123,":",val.images[0])}
    </div>

    <div className="productDetails">
      <h4 className="productTitle">{val.name}</h4>

      <div className="priceSection">
        <span className="oldPrice">₹1999</span>
        <span className="newPrice">₹{val.price}</span>
        <span className="discountBadge">30% OFF</span>
      </div>

      <div className="productRating">
        ⭐ 4.5 <span>(0 reviews)</span>
      </div>
    </div>

  </div>
))}
        
</div>
</div>
 
      <div className="home-banner2">
        <img
          className="home-banner2-img"
          src="/image2.png"
          alt=""
        />
      </div>

      <div className="home-new-arrivals">
        <div className="new-arrivals-text">Explore our top deals</div>
      </div>

      <div className="new-arrivals-cards">
 <div className="product-grid">
 {products.map((val, ind) => (
  <div className="productCard" key={val._id || ind}  onClick={() => navigate(`/detail/${val._id}`)}>
    
    <div className="productImageWrapper">
      <span className="wishlistIcon">♡</span>
     <img
        className="productImage"
        src={`https://p1backend.onrender.com/${val.images[0]}`}
        alt={val.name}
      />
    </div>

    <div className="productDetails">
      <h4 className="productTitle">{val.name}</h4>

      <div className="priceSection">
        <span className="oldPrice">₹1999</span>
        <span className="newPrice">₹{val.price}</span>
        <span className="discountBadge">30% OFF</span>
      </div>

      <div className="productRating">
        ⭐ 4.5 <span>(0 reviews)</span>
      </div>
    </div>

  </div>
))}

</div>

       </div>

   
 <div className="info-bar">
  <div className="info-item">
    <span className="icon">↩</span>
    <span>Easy Return</span>
  </div>

  <div className="info-item">
    <span className="icon">📦</span>
    <span>Book Your Product</span>
  </div> *
 </div>
     <Footers/>
    </div>
  );
};
export default Home;
