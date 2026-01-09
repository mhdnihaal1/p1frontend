import React from "react";
import "../style/AdminConfirm.css";
import { useNavigate } from "react-router-dom";

const AdminConfirm = () => {
  const navigate = useNavigate();

  return (
    <div className="confirm-wrapper">
      <div className="confirm-card">

        <button
          className="confirm-close"
          onClick={() => navigate("/adminHome")}
        >
          ×
        </button>

        <div className="confirm-icon">
          <span>✔</span>
        </div>

        <h2 className="confirm-heading">Order Successful</h2>

        <p className="confirm-text">
          The order has been completed and saved successfully.
        </p>

      </div>
    </div>
  );
};

export default AdminConfirm;
