import React, { useEffect, useState } from "react";
import "../style/Entry.css";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="entry-container">
      <img
        className="entry-image"
        src="/image16.png"
        alt="Wonky Logo"
      />

      {loading && (
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <span className="entry-text">Web Developer Task</span>
    </div>
  );
};

export default Entry;
