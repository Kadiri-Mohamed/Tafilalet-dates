import React from 'react';
import { Routes, Route } from 'react-router-dom';

// User Pages
import Home from '../User/pages/Home';
import Products from '../User/pages/Products';
import Cart from '../User/pages/Cart';
// Admin Pages
import ManagementComments from '../Admin/pages/ManagementComments';
import ManagementProducts from '../Admin/pages/managementProducts';
import ManagementUsers from '../Admin/pages/ManagementUsers';
import ManagementContact from '../Admin/pages/ManagementContact';
import ManagementServices from '../Admin/pages/ManagementServices';
// Layouts
import UserLayout from './Layouts/UserLayout';
import AdminLayout from './Layouts/AdminLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* User Routes with UserLayout */}
      <Route
        path="/"
        element={
          <UserLayout>
            <Home />
          </UserLayout>
        }
      />
      <Route
        path="/products"
        element={
          <UserLayout>
            <Products />
          </UserLayout>
        }
      />
      <Route
        path="/services"
        element={
          <UserLayout>
            <h1>Services</h1>
          </UserLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <UserLayout>
            <h1>Contact</h1>
          </UserLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <UserLayout>
            <Cart/>
          </UserLayout>
        }
      />

      {/* Admin Routes with AdminLayout */}
      <Route
        path="/admin/managementProducts"
        element={
          <AdminLayout>
            <ManagementProducts />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/managementUsers"
        element={
          <AdminLayout>
            <ManagementUsers />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/managementContact"
        element={
          <AdminLayout>
            <ManagementContact />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/managementServices"
        element={
          <AdminLayout>
            <ManagementServices />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/managementComments"
        element={
          <AdminLayout>
            <ManagementComments />
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
