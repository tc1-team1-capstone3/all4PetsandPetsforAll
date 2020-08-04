import React, { Component, useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss';
import {Provider} from 'react-redux';
import store from './Redux/store';
import routes from './routes';

function App() {
	// const [ message, setMessage ] = useState('');
	// useEffect(() => {
	// 	fetch('/api/hello').then((response) => response.text()).then((message) => {
	// 		setMessage(message);
	// 	});
	// }, []);
	return (
    <Provider store={store}>
			<Router><div className='App'>{routes}</div></Router>
    </Provider>
	);
}

export default App;
