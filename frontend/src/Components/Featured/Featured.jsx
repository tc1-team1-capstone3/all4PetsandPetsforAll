import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';
import './Featured.scss';
import { Link } from 'react-router-dom';
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
					<div>
						<Link to={`/product/${product.sku}`}>
							<img src={product.imgUrl} height="200px" width="200px" />
							<p>{product.name}</p>
						</Link>
					</div>
				);
			})
		: '';

	return <div className="featured-wrapper">{displayItems}</div>;
};

export default Featured;
