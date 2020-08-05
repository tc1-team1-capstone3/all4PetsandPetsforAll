import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../Redux/itemReducer/itemReducer';

const SearchResults = () => {
	const [ filtered, setFiletered ] = useState([]);
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getItems()));

	let search = (name, item) => {
		let empty = [];
		for (let i = 0; i < item.length; i++) {
			if (item[i].name.toLowerCase().includes(name.toLowerCase())) {
				empty.push(item[i]);
				setFiletered([ ...empty ]);
			}
		}
	};
	return (
		<div>
			<p>search results</p>
		</div>
	);
};

export default SearchResults;
