import React from 'react';
import AdminNavBar from '../../Admin/components/AdminNavBar';
import AdminFooter from '../../Admin/components/AdminFooter';
const AdminLayout = ({ children }) => {
  return (
    <AdminNavBar>
      {children}
    </AdminNavBar>
  );
};

export default AdminLayout;
