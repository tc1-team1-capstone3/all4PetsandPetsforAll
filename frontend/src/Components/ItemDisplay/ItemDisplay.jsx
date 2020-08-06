import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemDisplay = (props) => {
	return (
		<div>
			{props.productList ? (
				props.productList.map((product) => {
					return (
						<Item product={product} admin={props.admin}/>
					);
				})
			) : (
				'no items'
			)}
		</div>
	);
};

export default ItemDisplay;
