import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import productAPI from "../../Utils/productAPI";
import Item from "../../Components/Item/Item";

const AdminProduct = () => {
    const [productData, setProductData] = useState();
    let { sku } = useParams();

    useEffect(() => {
        const getProductData = async () => {
            const returnedItem = await productAPI.getProduct(sku)
            console.log(returnedItem.data)
            setProductData(returnedItem.data)
        }
        getProductData();
    }, [])
    return (
        <>
            {productData ? '' : <h1>No Item Found</h1> }
            <div>
                {productData ? <Item product={productData} admin={true} /> : '' }
            </div>
        </>
    );
};

export default AdminProduct;
