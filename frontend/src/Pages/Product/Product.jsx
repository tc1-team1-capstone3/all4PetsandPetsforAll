import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productAPI from '../../Utils/productAPI';
import Item from '../../Components/Item/Item';
import './Product.scss';
import Featured from '../../Components/Featured/Featured';
const Product = () => {
	const [ productData, setProductData ] = useState();
	let { sku } = useParams();

	useEffect(
		() => {
			const getProductData = async () => {
				const returnedItem = await productAPI.getProduct(sku);
				setProductData(returnedItem.data);
			};
			getProductData();
		},
		[ sku ]
	);
	return (
		<div className="productPage">
			{productData ? <Item product={productData} admin={false} /> : <h1>No Item Found</h1>}
			<h2>OUR FEATURED ITEMS</h2>
			<Featured />
		</div>
	);
};

export default Product;
