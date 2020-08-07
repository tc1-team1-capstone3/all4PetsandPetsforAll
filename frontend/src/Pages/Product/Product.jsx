import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import productAPI from "../../Utils/productAPI";
import Item from "../../Components/Item/Item";
import './Product.scss';

const Product = () => {
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
		<div className='productPage'>
			{productData ?
				<Item product={productData} admin={false} />
				: <h1>No Item Found</h1>
			}
		</div>
	);
};

export default Product;
