import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SearchBar = () => {
	const [ input, setInput ] = useState('');
	let onChangeHandler = (e) => {
		setInput(e.target.value);
	};
	return (
		<div style={{ marginTop: '4%' }}>
			<input
				style={{ width: '200px', borderRadius: '5px', marginRight: '10px' }}
				onChange={(e) => onChangeHandler(e)}
				placeholder="search items"
			/>
			<Link to={`/search/${input}`}>
				<button>Search</button>
			</Link>
		</div>
	);
};

export default SearchBar;
