import React from "react";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";


function HomeScreen() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : error ? (
       <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <div className="container mx-auto p-10">
          <h1 className="text-3xl mb-8">Latest Products</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HomeScreen;
