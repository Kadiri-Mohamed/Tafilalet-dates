import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const ProductInfo = () => {
    const { id } = useParams();
    const products = useSelector((state) => state.products); // Access products from the Redux store
    const product = products?.find((p) => p.id === parseInt(id)); // Safely find the product by ID

    if (!product) {
        return <div className="text-center text-red-500">Product not found!</div>;
    }

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-50 shadow-md rounded-lg">
            {/* Product Image */}
            <div className="w-full md:w-1/2 ">
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg shadow-lg w-full h-96"
                />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-xl font-semibold text-yellow-600">
                    {product.prix} DH
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
                        Add to Cart
                    </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;