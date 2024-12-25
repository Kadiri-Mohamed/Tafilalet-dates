import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        src="tafilalet-dattes.png"
                        alt="TAFIALT Logo"
                    />
                </Link>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}> ACCUEIL
                    </Link>
                </li>
                
                <li>
                    <Link to="/products" className={`${location.pathname === '/products' ? 'active' : ''}`}> PRODUITS
                    </Link>
                </li>
                <li>
                    <Link to="/services" className={`${location.pathname === '/services' ? 'active' : ''}`}> SERVICES
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={`${location.pathname === '/contact' ? 'active' : ''}`}> CONTACT
                    </Link>
                </li>
            </ul>

            <div className="language-switcher">
                <span>FR</span> | <span>EN</span>
            </div>

            <div className="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
