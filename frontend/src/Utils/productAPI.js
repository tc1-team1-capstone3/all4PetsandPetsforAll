import axios from 'axios'

export default {
    createProduct: function (productData) {
        return axios.post('products', productData)
    }
}