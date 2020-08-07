import React, { Component, useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import store from './Redux/store';
import routes from './routes';
import NavBar from './Components/NavBar/NavBAR';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<NavBar />
					{routes}
				</div>
			</Router>
		</Provider>
	);
}

export default App;
