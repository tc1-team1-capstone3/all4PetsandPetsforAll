import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemDisplay.scss';
const ItemDisplay = (props) => {
	return (
		<div className="outerWrapper">
			{props.productList ? (
				props.productList.map((product) => {
					return <Item product={product} admin={props.admin} />;
				})
			) : (
				'no items'
			)}
		</div>
	);
};

export default ItemDisplay;
