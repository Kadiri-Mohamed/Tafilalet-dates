import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminNavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white overflow-y-auto transition-transform transform z-50 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        } lg:translate-x-0`}
      >
        <button
          className="absolute text-white top-4 right-6 text-2xl font-bold lg:hidden"
          onClick={toggleNav}
        >
          &times;
        </button>
        <div className="flex flex-col mt-16 space-y-4 px-8">
          <NavLink
            to="/admin/managementProducts"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-[#ffd700]" : "hover:text-gray-300"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/admin/managementComments"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-[#ffd700]" : "hover:text-gray-300"
              }`
            }
          >
            Comments
          </NavLink>
          <NavLink
            to="/admin/managementServices"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-[#ffd700]" : "hover:text-gray-300"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/admin/managementUsers"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-[#ffd700]" : "hover:text-gray-300"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/admin/managementContact"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "text-[#ffd700]" : "hover:text-gray-300"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        } lg:ml-64`}
      >
        <button
          className="mt-4 ml-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700 lg:hidden"
          onClick={toggleNav}
        >
          &#9776;
        </button>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminNavBar;
