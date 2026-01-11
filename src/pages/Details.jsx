import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Detail.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footers from "../layout/footers";

const Detail = () => {
  const navigate = useNavigate()
   const { id } = useParams();
  const [product, setProduct] = useState(null);
      const [products, setProducts] = useState([]);

 
useEffect(() => {
  const fetchData = async () => {
    try {
      const productsRes = await axios.get("https://p1backend.onrender.com/products");
      setProducts(productsRes.data);

      const productRes = await axios.get(
        `https://p1backend.onrender.com/product/${id}`
      );
      setProduct(productRes.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [id]);


  if (!product) return (<h2>Loading...</h2>);


  return (
    <main className="home-container">
      {/* NAVBAR */}
            <Navbar/>

      {/* PRODUCT */}
      <div className="pd-wrapper">
        <div className="image-section">
           <div className="thumbnail-column"  >
            <img
              className="thumbnail active"
        src={product.images[0]}
              alt="Thumb 1"
            />
            <img
              className="thumbnail"
        src={product.images[1]}
              alt="Thumb 2"
            />
            <img
              className="thumbnail"
        src={product.images[2]}
              alt="Thumb 3"
            />
          </div>
 
          <div className="main-image">
            <img
        src={product.images[3]}
              alt="Product"
            />
          </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="reviews">4.0 (8 reviews)</span>
          </div>

          <div className="price-section">
            <span className="current-price">₹{product.price}</span>
            <span className="original-price">₹1999</span>
            <span className="discount-badge">-50%</span>
          </div>

          <div className="divider" />

          <div className="option-group">
            <div className="option-label">
              <span>Size: 1-2 Years</span>
              <span className="size-guide">Size Chart 📏</span>
            </div>

            <div className="size-options">
              <button className="size-btn">1-2 Years</button>
              <button className="size-btn active">3-4 Years</button>
              <button className="size-btn">5-6 Years</button>
              <button className="size-btn">7-8 Years</button>
            </div>
          </div>

          <div className="option-group">
            <div className="option-label">
              <span>Color: Charcoal</span>
            </div>

            <div className="color-options">
              <div className="color-option color-charcoal active" />
              <div className="color-option color-white" />
              <div className="color-option color-pink" />
              <div className="color-option color-blue" />
            </div>
          </div>

          <button className="buy-button" onClick={()=>navigate(`/moreDetail/${product._id}`)}>Buy Now</button>

          <p className="return-policy">
            Returns within 7 days. View <a href="#">return policy</a>
          </p>
        </div>
      </div>

      {/* RELATED ITEMS */}
      <div className="home-new-arrivals">
        <div className="new-arrivals-text">Related Items</div>
      </div>

      <div className="new-arrivals-cards">
 <div className="product-grid">

   {products.map((val, ind) => (
  <div className="productCard" key={val._id || ind}  onClick={()=>navigate(`/moreDetail/${val._id}`)}>
    
    <div className="productImageWrapper">
      <span className="wishlistIcon">♡</span>
      <img
        className="productImage"
        src={val.images[0]}
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
      {/* FOOTER */}
           <Footers/>

    </main>
  );
};

export default Detail;
