import { useEffect, useState } from "react";
import axios from "axios";
import "../style/moreDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footers from "../layout/footers";

const MoreDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  navigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/product/${id}`);
        setProduct(res.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>
    );
  }

  return (
    <main className="page-container">
      <Navbar />

      {/* PRODUCT + SUMMARY WRAPPER */}
      

      <div className="pd-wrapper">
        {/* LEFT PRODUCT CARD */}
        <div className="pd-card">
          <div className="pd-image-box">
            <span className="pd-wishlist">♡</span>
            <img
              src={`http://localhost:5000/${product.images[0]}`}
              alt="Dress"
            />
          </div>

          <div className="pd-info">
            <h2 className="pd-title">Floral Summer Dress</h2>

            <div className="pd-rating">
              ⭐ 4.5 <span>(0 reviews)</span>
            </div>

            <div className="pd-price">
              <span className="pd-current">₹1399</span>
              <span className="pd-old">₹1999</span>
              <span className="pd-off">30% OFF</span>
            </div>

            {/* SIZE */}
            <div className="pd-option">
              <div className="pd-option-head">
                <span>Choose Options</span>
                <span className="pd-link">Size Chart</span>
              </div>

              <div className="pd-sizes">
                <button className="pd-size active">1-2 Years</button>
                <button className="pd-size">2-3 Years</button>
                <button className="pd-size">3-4 Years</button>
                <button className="pd-size">4-5 Years</button>
              </div>
            </div>

            {/* COLOR */}
            <div className="pd-option">
              <span className="pd-label">Color: Charcoal</span>

              <div className="pd-colors">
                <span className="pd-color black active"></span>
                <span className="pd-color peach"></span>
                <span className="pd-color grey"></span>
                <span className="pd-color blue"></span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="pd-summary">
          <h3>Summary</h3>

          <div className="pd-summary-row">
            <span>Price</span>
            <span>₹1399</span>
          </div>

          <div className="pd-summary-row">
            <span>Delivery Charge</span>
            <span>₹50</span>
          </div>

          <div className="pd-summary-row total">
            <span>Total Amount</span>
            <span>₹1449</span>
          </div>

          <button className="pd-pay-btn">Confirm & Pay ₹1449</button>
        </div>
      </div>
 

      {/* INFO BAR */}
      <div className="info-bar">
        <div className="info-item">
          <span className="icon">↩</span>
          <span>Easy Return</span>
        </div>
        <div className="info-item">
          <span className="icon">📦</span>
          <span>Book Your Product</span>
        </div>
      </div>

      <Footers />
    </main>
  );
};

export default MoreDetails;
