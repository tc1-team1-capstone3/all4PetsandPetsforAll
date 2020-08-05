import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';

const Products = () => {
<<<<<<< HEAD
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getItems()), []);
	let displayItems = item
		? item.map((product) => {
				return (
					<div>
						<p>{item.name}</p>
					</div>
				);
			})
		: '';
	return (
		<div>
			<p>products</p>
		</div>
	);
=======
	// const item = useSelector((state) => state.itemReducer.items);
	// const dispatch = useDispatch();
	// useEffect(() => dispatch(getItems()));
	// let displayItems = item
	// 	? item.map((product) => {
	// 			return (
	// 				<div>
	// 					<p>{item.name}</p>
	// 				</div>
	// 			);
	// 		})
	// 	: '';
// 	return (
// 		<div>
// 			<p>products</p>
// 		</div>
// 	);
>>>>>>> 2d8548d7ab28d8b1eefc3c0c371e891172d2987f
};

export default Products;
