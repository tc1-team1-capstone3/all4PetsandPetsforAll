import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Admin} path="/admin" />
	</Switch>
);
