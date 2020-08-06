import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';
import { useParams } from 'react-router-dom';

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
						<img src={product.imgUrl} height="200px" width="200px" />
						<p>{product.name}</p>
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
