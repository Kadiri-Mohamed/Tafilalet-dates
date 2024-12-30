import React from 'react';
import Navbar from '../../User/components/Navbar/Navbar'
import Footer from '../../User/components/Footer/Footer';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
