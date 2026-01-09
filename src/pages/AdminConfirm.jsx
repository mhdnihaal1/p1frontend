import React from "react";
import "../style/AdminConfirm.css"
import { useNavigate } from "react-router-dom";

const AdminConfirm = () => {
    const navigate = useNavigate()
    function goBack() {
        navigate("/home")
         }
    return(
       <div className="success-container">
        <button className="close-btn" onClick={goBack}>×</button>
        
        <div className="success-icon"></div>
        
        <h2 className="success-title">Product Added</h2>
        <p className="success-message">The product has been successfully added</p>
    </div>
    )
}

export default AdminConfirm;