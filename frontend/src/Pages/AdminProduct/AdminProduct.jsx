import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import productAPI from "../../Utils/productAPI";

const AdminProduct = () => {
    const [productData, setProductData] = useState();
    let { sku } = useParams();

    useEffect(() => {
        const getProductData = async () => {
            const returnedList = await productAPI.getProduct(sku)
            setProductData(returnedList.data)
        }
        getProductData();
    }, [])
    return (
        <div>
            <h1>Product Name: {productData ? productData.name : ''}</h1>
        </div>
    );
};

export default AdminProduct;
