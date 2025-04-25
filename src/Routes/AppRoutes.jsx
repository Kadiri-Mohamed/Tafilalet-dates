import React from 'react';
import { Routes, Route } from 'react-router-dom';

// User Pages
import Home from '../User/pages/Home';
import Products from '../User/pages/Products';
import Cart from '../User/pages/Cart';
import Services from '../User/pages/Services';
import Contact from '../User/pages/Contact';
// Admin Pages
import ManagementComments from '../Admin/pages/ManagementComments';
import ManagementProducts from '../Admin/pages/managementProducts';
import ManagementUsers from '../Admin/pages/ManagementUsers';
import ManagementContact from '../Admin/pages/ManagementContact';
import ManagementServices from '../Admin/pages/ManagementServices';
// Layouts
import UserLayout from './Layouts/UserLayout';
import AdminLayout from './Layouts/AdminLayout';
import ProductInfo from '../User/pages/ProductInfo';

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
        path="/product/:id" // Add route for ProductInfo
        element={
          <UserLayout>
            <ProductInfo />
          </UserLayout>
        }
      />
      <Route
        path="/services"
        element={
          <UserLayout>
            <Services/>
          </UserLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <UserLayout>
            <Contact/>
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
