import React from "react";
import "../style/Confirm.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footers from "../layout/footers";

const Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="confirm-page">
      <Navbar />

      {/* HEADER STRIP */}
      <div className="confirm-header">
        <h3>Order Succesfull</h3>
      </div>

      {/* MAIN CONTENT */}
      <div className="confirm-center">
        <div className="confirm-card-box">

          <img
            src="/anim1.gif"
            alt="success"
            className="confirm-gif"
          />

          <div className="confirm-checkmark">✔</div>

          <h2 className="confirm-title">Thank you for shopping</h2>

          <p className="confirm-description">
            Your order has been placed successfully.<br />
            We are preparing it for delivery.
          </p>

          <button
            className="confirm-action-btn"
            onClick={() => navigate("/home")}
          >
            Back to Home →
          </button>

        </div>
      </div>

      {/* INFO SECTION */}
      <div className="confirm-info-strip">
        <div className="confirm-info-box">
          <span>↩</span>
          <p>Easy Returns</p>
        </div>

        <div className="confirm-info-box">
          <span>📦</span>
          <p>Track Your Order</p>
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default Confirm;
