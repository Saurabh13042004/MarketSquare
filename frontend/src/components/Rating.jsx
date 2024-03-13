import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ value, text }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const isFullStar = value >= index + 1;
        const isHalfStar = value >= index + 0.5 && value < index + 1;

        return (
          <span key={index}>
            {isFullStar ? (
              <FaStar className="text-yellow-500" />
            ) : isHalfStar ? (
              <FaStarHalfAlt className="text-yellow-500" />
            ) : (
              <FaRegStar className="text-gray-300" />
            )}
          </span>
        );
      })}
      {text && <span className="ml-2 text-gray-600">{text}</span>}
    </div>
  );
}

export default Rating;
