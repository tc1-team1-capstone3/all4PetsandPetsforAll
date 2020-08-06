import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';

const Featured = () => {
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getItems()), []);
	let shuffled = item.sort((a, b) => {
		return 0.5 - Math.random();
	});
	let displayItems = shuffled
		? shuffled.slice(-5).map((product) => {
				return (
					<div style={{ display: 'flex' }}>
						<p>{product.name}</p>
						<img src={product.imgUrl} height="100px" width="100px" />
					</div>
				);
			})
		: '';

	return (
		<div>
			<p>{displayItems}</p>
		</div>
	);
};

export default Featured;
