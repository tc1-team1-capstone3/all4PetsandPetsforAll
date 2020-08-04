import axios from 'axios'

export default {
    createProduct: function (productData) {
        return axios.post('products', productData)
    },
    getProducts: function(){
        return axios.get('products')
    }
}