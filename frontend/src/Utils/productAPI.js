import axios from 'axios';

export default {
	createProduct: function(productData) {
		return axios.post('products', productData);
	},
	getProducts: function() {
		return axios.get('products');
	},
	getProduct: function(sku) {
		return axios.post('product', sku);
	},
	addQuantity: function(productData) {
		return axios.put('products', productData)
	}
};
