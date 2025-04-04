import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "4rem", color: "#FF0000" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/Home" style={{ textDecoration: "none", color: "#007BFF" }}>
        <button style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px"
        }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
