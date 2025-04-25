import React from "react"
import { useSelector } from "react-redux";

const ProductsTable = (props) => {

    const products = useSelector(data => data.products)
    return (
        <div className="flex flex-wrap gap-4 items-center py-4 px-5 align-middle ">

            <table className="w-full text-center rounded-lg overflow-hidden border-collapse shadow-lg bg-white">
                <thead>

                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>description</th>
                        <th>prix</th>
                        <th colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (

                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className=" w-20 h-20"><img src={product.image} alt="dattes" className=" rounded " /></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.prix} DH</td>
                            <td><button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button></td>
                            <td><button className="bg-green-500 text-white px-2 py-1 rounded-md">Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {console.log(products ? products : "no products")}
        </div>
    )
};

export default ProductsTable;
