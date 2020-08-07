import axios from 'axios';

export default {
	createProduct: function(productData) {
		return axios.post('products', productData);
	},
	getProducts: function() {
		return axios.get('products');
	},
	getProduct: function(sku) {
		return axios.get(`products/sku/${sku}`);
	},
	addQuantity: function(productData) {
		return axios.put('products', productData)
	},
	deleteProduct: function (sku) {
		return axios.delete(`products/${sku}`)
	},
    updateProduct(sku, productData) {
		return axios.put(`products/${sku}`, productData)
	}
};
