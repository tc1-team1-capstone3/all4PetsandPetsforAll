import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SearchBar = () => {
	const [ input, setInput ] = useState('');
	let onChangeHandler = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<input style={{ marginLeft: '100px' }} onChange={(e) => onChangeHandler(e)} placeholder="search items" />
			<Link to={`/search/${input}`}>
				{' '}
				<button content="search" />
			</Link>
		</div>
	);
};

export default SearchBar;
