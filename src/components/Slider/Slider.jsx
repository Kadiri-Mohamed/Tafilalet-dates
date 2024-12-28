import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Slider.css'; // Import the CSS file

const Slider = () => {
    const products = useSelector((state) => state.products);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    // Automatically go to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div className="slider-container">
            <button className="slider-button left" onClick={prevSlide}>❮</button>
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {products.map((product, index) => (
                    <div
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        key={product.id}
                        style={{ backgroundImage: `url(${product.image})` }}
                    >
                        <div className="slide-footer">
                        <a href="#" className="product-link">
                        <span className="product-name">{product.name}</span>
                        </a>
                            
                        <a href="#" className="product-link">
                        <span className="product-name">{product.prix} MAD</span>
                        </a>
                        </div>
                    </div>
                ))}
            </div>
            <button className="slider-button right" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Slider;