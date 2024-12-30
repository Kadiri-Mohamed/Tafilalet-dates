import React from 'react';
import AdminNavBar from '../../Admin/components/AdminNavBar';
import AdminFooter from '../../Admin/components/AdminFooter';
const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      <main>{children}</main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
