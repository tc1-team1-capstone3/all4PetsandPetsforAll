import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import productAPI from "../../Utils/productAPI";

const Home = () => {
    const [productList, setProductList] = useState([]);

    useEffect( () => {
        const getProductList = async () => {
            const returnedList = await productAPI.getProducts();
            setProductList(returnedList.data);
        }
        getProductList();
    }
    ,[]);
    return(
        <>
        <h1>Hello World</h1>
            <Link to="/admin"><h3>Admin</h3></Link>
            {productList ? productList.map(products => {
                return <p key={products.id}>Product SKU: {products.sku}</p>
            }): "no items"}
        </>
    )
}

export default Home;