import React from "react";
import "../style/Confirm.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footers from "../layout/footers";

const Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar/>
      {/* TOP STRIP */}
      <div className="top-strip">Order Successful</div>

      {/* SUCCESS MESSAGE */}
      <div className="success-container">
        <img src="/anim1.gif" alt="success animation" className="tick-animation" />
        <div className="check-circle">✓</div>

        <span className="h">Thank you for shopping</span>
        <p>
          Your order has been successfully placed and is <br />
          now being processed.
        </p>

        <button className="order-btn" onClick={()=>navigate("/home")}>
          Go to Orders →
        </button>
      </div>

      {/* INFO BAR */}
      <div className="info-bar">
        <div className="info-item">
          <span>↩</span>
          <span>Easy Return</span>
        </div>

        <div className="info-item">
          <span>📦</span>
          <span>Book Your Product</span>
        </div>
      </div>

      {/* FOOTER */}
           <Footers/>

    </div>
  );
};

export default Confirm;
