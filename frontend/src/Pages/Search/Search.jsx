import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';
import { useParams } from 'react-router-dom';
import './Search.scss';
import Featured from '../../Components/Featured/Featured';
import { Link } from 'react-router-dom';
const Search = () => {
	// const [ filtered, setFiletered ] = useState([]);
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getItems()), []);
	let { id } = useParams();
	console.log(item, id);

	let filtered = item ? (
		item.map((product) => {
			let lowered = id.toLowerCase();
			if (product.name.toLowerCase().includes(lowered)) {
				return (
					<div>
						<div className="outerWrapper ">
							<div
								className="product-card"
								key={product.id}
								style={{
									textAlign: 'center',
									width: '220px',
									height: '500px;',
									// margin: "20px",
									borderBottom: '2px solid lightpink'
								}}
							>
								<h1>{`Name: ${product.name}`}</h1>
								<img src={product.imgUrl} height="200px" width="200px" />

								<p>{`Description: ${product.description}`}</p>
								<p>{`price: $ ${product.price}`}</p>
							</div>
						</div>
					</div>
				);
			}
		})
	) : (
		<h1>couldnt find any items with that name</h1>
	);
	return (
		<div>
			{filtered}
			<h2>OUR FEATURED ITEMS</h2>
			<Featured />
		</div>
	);
};

export default Search;
