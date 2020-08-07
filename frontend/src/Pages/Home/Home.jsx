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
			<SearchBar />
			<h1>Hello World</h1>
			<Link to="/admin">
				<h2>Admin</h2>
			</Link>
			<div>
				<ItemDisplay productList={productList} admin={false} />
			</div>
			{/*<Featured/>*/}
		</div>
	);
};

export default Home;
