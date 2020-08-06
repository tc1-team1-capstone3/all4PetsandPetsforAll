import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';

const Products = () => {
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	useEffect(dispatch(getItems()), []);
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
		<div class = "itemDisplay">
			{displayItems}
		</div>
	);
};

export default Products;
