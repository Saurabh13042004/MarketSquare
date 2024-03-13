import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useState } from "react";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function ProductScreen() {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [qty, setQty] = useState(1);


  const addToCartHandler = () => {
      dispatch(addToCart({...product,qty}));
      navigate("/cart");
  }
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductDetailsQuery(productId);

  // Ensure product data is available before accessing its properties
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <Message variant="danger">{error?.data?.message || error.error}</Message>
    );
  }

  // Check if product is undefined or null before rendering
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <>
        <Link className="btn btn-primary my-3" to="/">
          Go Back
        </Link>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-1/3 mt-4 lg:mt-0 lg:ml-6">
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-2xl font-semibold mt-2">${product.price}</p>
          </div>
          <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6">
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Price:</p>
                </div>
                <div>
                  <p>${product.price}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="font-semibold">Status:</p>
                </div>
                <div>
                  <p>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>
              {product.countInStock > 0 && (
                <div className="space-y-4">
                  {" "}
                  {/* Tailwind CSS class */}
                  <div className="flex items-center">
                    {" "}
                    {/* Tailwind CSS class */}
                    <p className="mr-2">Qty</p> {/* Tailwind CSS class */}
                    <div className="relative">
                      {" "}
                      {/* Tailwind CSS class */}
                      <select
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 py-1 pl-2 pr-8 text-sm"
                      >
                        {" "}
                        {/* Tailwind CSS classes */}
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        {" "}
                        {/* Tailwind CSS class */}
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          {" "}
                          {/* SVG icon, can be Daisy UI */}
                          <path
                            fillRule="evenodd"
                            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-4">
                <button
                onClick={addToCartHandler}
                  className={`btn btn-primary ${
                    product.countInStock === 0 && "btn-disabled"
                  }`}
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProductScreen;
