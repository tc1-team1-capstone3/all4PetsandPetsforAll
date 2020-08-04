import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Admin} path="/admin" />
	</Switch>
);
