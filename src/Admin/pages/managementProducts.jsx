import React from "react";
import ProductsTable from "../components/ProductsTable";
const ManagementProducts = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
      <p>Welcome to the Products Management section!</p>
      <ProductsTable />
    </div>
  );
};

export default ManagementProducts;
