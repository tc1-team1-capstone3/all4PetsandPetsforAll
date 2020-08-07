import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';
import { useParams } from 'react-router-dom';
import '../../Components/Item/Item.scss';
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
					<div className="product-info">
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
								<img src={product.imgUrl} height="200px" width="200px" />
								<p>{`Name: ${product.name}`}</p>
								<p>{`Description: ${product.description}`}</p>
								<p>{`price: $ ${product.price}`}</p>
							</div>
						</div>
					</div>
				);
			}
		})
	) : (
		<div>couldnt find any items with that name</div>
	);
	return (
		<div>
			<p>{filtered}</p>
		</div>
	);
};

export default Search;
