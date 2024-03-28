/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="w-full p-4">
      <div className="card h-full shadow-lg">
        <Link to={`/product/${product._id}`}>
          <img
            className="w-full h-48 object-cover object-center"
            src={product.image}
            alt={product.name}
          />
          <div className="card-body">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              {product.name}
            </h2>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            {/* {product.description && (
              <p className="text-gray-600 mb-4">{product.description}</p>
            )} */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-bold">${product.price}</span>
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
