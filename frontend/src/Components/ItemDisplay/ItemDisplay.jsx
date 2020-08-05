import React from 'react';
import { Link } from 'react-router-dom';

const ItemDisplay = (props) => {
	return (
		<div>
			{props.productList ? (
				props.productList.map((products) => {
					return (
						<div key={products.id}>
							<Link to={props.admin ? `/adminProduct/${products.sku}` : `/product/${products.sku}`}>
								<img height="200px" width="200px" src={products.imgUrl} alt={products.name} />
							</Link>
							<p>
								Product SKU: {products.sku}, Product Name {products.name}, Description:{' '}
								{products.description}, Price: {products.price}
							</p>
						</div>
					);
				})
			) : (
				'no items'
			)}
		</div>
	);
};

export default ItemDisplay;
