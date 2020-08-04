import React, { Component, useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import routes from './routes';

function App() {
	const [ message, setMessage ] = useState('');
	useEffect(() => {
		fetch('/api/hello').then((response) => response.text()).then((message) => {
			setMessage(message);
		});
	}, []);
	return (
		<div className="App">
			<Router>{routes}</Router>
		</div>
	);
}

export default App;
