import React from 'react';
import { useParams } from 'react-router-dom';

const AdminProduct = () => {
    let { sku } = useParams();
    console.log(sku);
    return (
        <div>
            <h1>product</h1>
        </div>
    );
};

export default AdminProduct;
