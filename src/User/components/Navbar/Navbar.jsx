import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(4);

    return (
        <nav className="bg-gray-100 shadow-md relative">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="/images/tafilalet-dattes.png"
                            alt="TAFIALT Logo"
                            className="h-16"
                        />
                    </Link>
                </div>
                <div
                    className="md:hidden flex flex-col space-y-1 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </div>
                <ul
                    className={`${
                        menuOpen ? 'flex' : 'hidden'
                    } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-gray-100 md:bg-transparent md:space-x-8 text-sm font-medium z-10 transition-all`}
                >
                    <li className="my-2 md:my-0">
                        <Link
                            to="/"
                            className={`relative hover:text-yellow-500 transition ${
                                location.pathname === '/'
                                    ? 'text-yellow-500 font-bold'
                                    : 'text-black'
                            }`}
                        >
                            ACCUEIL
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link
                            to="/products"
                            className={`relative hover:text-yellow-500 transition ${
                                location.pathname === '/products'
                                    ? 'text-yellow-500 font-bold'
                                    : 'text-black'
                            }`}
                        >
                            PRODUITS
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link
                            to="/services"
                            className={`relative hover:text-yellow-500 transition ${
                                location.pathname === '/services'
                                    ? 'text-yellow-500 font-bold'
                                    : 'text-black'
                            }`}
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link
                            to="/contact"
                            className={`relative hover:text-yellow-500 transition ${
                                location.pathname === '/contact'
                                    ? 'text-yellow-500 font-bold'
                                    : 'text-black'
                            }`}
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block text-yellow-700 font-bold">
                        <span>FR</span> | <span>EN</span>
                    </div>
                    <div className="relative">
                        <Link
                            to="/cart"
                            className="flex items-center text-black hover:text-yellow-500 transition"
                        >
                            <FaShoppingCart className="text-xl" />
                            <span className="ml-1">Panier</span>
                        </Link>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
