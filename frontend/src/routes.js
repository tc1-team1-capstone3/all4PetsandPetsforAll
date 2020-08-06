import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import Landing from './Pages/Landing/Landing';
import MyCart from './Pages/MyCart/MyCart';
import ThankYou from './Pages/ThankYou/ThankYou';
import AdminProduct from './Pages/AdminProduct/AdminProduct';
import Search from './Pages/Search/Search';

export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Admin} path="/admin" />
		<Route component={AdminProduct} path="/adminProduct/:sku" />
		<Route component={Product} path="/product/:sku" />
		<Route component={Products} path="/products" />
		<Route component={Landing} path="/landing" />
		<Route component={MyCart} path="/mycart" />
		<Route component={ThankYou} path="/thanks" />
		<Route component={Search} path="/search/:id" />
	</Switch>
);
