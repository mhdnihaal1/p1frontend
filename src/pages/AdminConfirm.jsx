import React from "react";
import "../style/AdminConfirm.css"
import { useNavigate } from "react-router-dom";

const AdminConfirm = () => {
    const navigate = useNavigate()
        
         
    return(
<div class="page-wrapper">
  <div class="success-container">
    <button class="close-btn" onClick={()=>navigate("/adminHome")}>×</button>

    <div class="success-icon"></div>

    <h2 class="success-title">Success</h2>
    <p class="success-message">
      Your order has been placed successfully.
    </p>
  </div>
</div>

    )
}

export default AdminConfirm;