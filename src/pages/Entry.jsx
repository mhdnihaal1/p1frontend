import React, { useEffect } from "react";
import "../style/Entry.css";
import { useNavigate } from "react-router-dom";


const Entry = () => {
    const navigate = useNavigate();
      useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");  
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="entry-container">
      <img
        className="entry-image"
        src="/image 16.png"
        alt="Wonky Logo"
      />
      <span className="entry-text">Web Developer Task</span>
    </div>
  );
};

export default Entry;
