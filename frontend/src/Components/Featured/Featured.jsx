import React from 'react';

const Featured = () => {
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getItems()));
	let shuffled = item.sort((a, b) => {
		return 0.5 - Math.random();
	});
	let displayItems = shuffled
		? shuffled.slice(-5).map((product) => {
				return (
					<div>
						<p>{item.name}</p>
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
