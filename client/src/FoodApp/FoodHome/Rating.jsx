import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Rating = ({ rating }) => {
  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} style={{ color: "gold" }} />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalfAlt style={{ color: "gold" }} />}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <CiStar key={`empty-${index}`} style={{ color: "gray" }} />
      ))}
    </div>
  );
};

export default Rating;
