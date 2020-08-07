import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productAPI from '../../Utils/productAPI';
import ItemDisplay from '../../Components/ItemDisplay/ItemDisplay';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Featured from '../../Components/Featured/Featured';
const Home = () => {
	const [ productList, setProductList ] = useState([]);

	useEffect(() => {
		const getProductList = async () => {
			const returnedList = await productAPI.getProducts();
			setProductList(returnedList.data);
		};
		getProductList();
	}, []);
	return (
		<div>
			<div>
				<ItemDisplay productList={productList} admin={false} />
			</div>
		</div>
	);
};

export default Home;
