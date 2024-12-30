import React from "react"
import { useSelector } from "react-redux";
import Card from "../Card/Card"
const Cards = () => {
    const products = useSelector((state) => state.products);
    return (
        <div className="row py-4 px-5 align-middle items-center">

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
