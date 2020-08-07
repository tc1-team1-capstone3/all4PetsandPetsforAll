import React from 'react';
import './NavBar.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className="navWrapper">
			<div className="left" />
			<div className="mid">
				<Link to="/admin">
					<h2>Admin</h2>
				</Link>
			</div>
			<div children="right">
				<SearchBar />
			</div>
		</div>
	);
};

export default NavBar;
