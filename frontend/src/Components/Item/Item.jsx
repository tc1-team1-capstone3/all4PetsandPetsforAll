import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productAPI from "../../Utils/productAPI";

const Item = ({product, admin}) => {
    const [userQuantity, setUserQuantity] = useState('');

    const onChange = e =>
        setUserQuantity(e.target.value);

    const updateQuantity = (e) => {
        console.log(userQuantity);
        productAPI.addQuantity({sku: product.sku, quantity: userQuantity}).then(res => {
            console.log(res);
            window.location.reload();
        })
    }

    return (
        <div className='product-card' key={product.id} style={{
            textAlign: "center",
            width: "220px",
            height: "500px;",
            margin: "20px",
            borderBottom: "2px solid lightpink"
        }}>
            <Link to={admin ? `/adminProduct/${product.sku}` : `/product/${product.sku}`}>
                <img className='product-img' height="200px" width="200px" src={(product.imgUrl === null || product.imgUrl.length === 0 )? 'A4PLogo.jpg' : product.imgUrl } alt={product.name} />
            </Link>
            <div className='product-info'>
                <p>
                    Product SKU: {product.sku}
                </p>
                <p>Product Name: {product.name}</p>
                <p>Description:{' '}
                    {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Product Quantity: {product.quantity}</p>
                {admin ? (<>
                        <input className='quantityInput hide' type='text' onChange={e => onChange(e)}/>
                        <button className='cart-btn' type='button' data-open={false} onClick={e => updateQuantity(e)}>Add Quantity</button>
                    </>) : '' }
            </div>
        </div>

    );
};

export default Item;
