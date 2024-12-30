import React from 'react';
import { Routes, Route } from 'react-router-dom';

// User Pages
import Home from '../User/pages/Home';
import Products from '../User/Pages/Products';
// Admin Pages
import managementProducts from '../Admin/pages/managementProducts';
// Layouts
import UserLayout from './Layouts/UserLayout';
import AdminLayout from './Layouts/AdminLayout';
const AppRoutes = () => {
  return (
    <Routes>
      {/* User Routes with UserLayout */}
      <Route path="/" element={
          <UserLayout>
            <Home />
          </UserLayout>
        } />
      <Route path="/products" element={
          <UserLayout>
            <Products />
          </UserLayout>
        } />
      <Route path="/services" element={
          <UserLayout>
            <h1>Services</h1>
          </UserLayout>
        } />
      <Route path="/contact" element={
          <UserLayout>
            <h1>Contact</h1>
          </UserLayout>
        } />

      {/* Admin Routes with AdminLayout */}

      <Route path="/admin/manage-products" element={
          <AdminLayout>
            <managementProducts />
          </AdminLayout>
        } />
      <Route path="/admin/comments" element={
          <AdminLayout>
            <h1>Admin Comments</h1>
          </AdminLayout>
        } />
    </Routes>
  );
};

export default AppRoutes;
