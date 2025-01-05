import React, { useState } from "react"
import Card from '../Card/Card'
import { useSelector } from "react-redux";
const Cards = () => {
    const products = useSelector(data => data.products)
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center py-4 px-5 align-middle ">

            {products.map((product) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        prix = {product.prix}
                    />
             ))}
            {console.log(products ? products : "no products")}
        </div>
    )
};

export default Cards;
