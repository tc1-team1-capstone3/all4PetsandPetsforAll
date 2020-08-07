import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import productAPI from "../../Utils/productAPI";
import Item from "../../Components/Item/Item";
import './AdminProduct.scss';

const AdminProduct = () => {
    const [productData, setProductData] = useState();
    let { sku } = useParams();
    const [ formData, setFormData ] = useState({
        newSku: '',
        newName: '',
        newDescription: '',
        newPrice: ''
    });

    const { newSku, newName, newDescription, newPrice } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitUpdate = (e) => {
        e.preventDefault();
        console.log('fuck');
        const updatedProduct = {
            name: newName,
            sku: newSku,
            price: newPrice,
            description: newDescription,
            quantity: productData.quantity
        }
        console.log(updatedProduct)

        productAPI.updateProduct(productData.sku, updatedProduct).then(function(res){
            console.log(res);
            window.location.reload();
        });
    }

    useEffect(() => {
        const getProductData = async () => {
            const returnedItem = await productAPI.getProduct(sku)
            setProductData(returnedItem.data)
        }
        getProductData();
    }, [])
    return (
        <div className={'admin-product-display'}>
            {productData ? '' : <h1>No Item Found</h1> }
            <div>
                {productData ? <Item product={productData} admin={true} /> : '' }
            </div>
            <div>
                <form>
                    <div className={'form-item'}>
                        <label htmlFor='skuUpdate'>Update SKU:</label>
                        <input id='skuUpdate'
                               value={newSku}
                               onChange={(e) => onChange(e)}
                               name="newSku"
                               type="input"
                               placeholder="Enter New Item SKU"
                        />
                    </div>
                    <div className={'form-item'}>
                        <label htmlFor='nameUpdate'>Update Name:</label>
                        <input id='nameUpdate'
                           value={newName}
                           onChange={(e) => onChange(e)}
                           name="newName"
                           type="input"
                           placeholder="Enter New Item Name"
                        />
                    </div>
                    <div className={'form-item'}>
                        <label htmlFor='descriptionUpdate'>Update Description:</label>
                        <input id='descriptionUpdate'
                               value={newDescription}
                               onChange={(e) => onChange(e)}
                               name="newDescription"
                               type="input"
                               placeholder="Enter New Item Description"
                        />
                    </div>
                    <div className={'form-item'}>
                        <label htmlFor='priceUpdate'>Update Price:</label>
                        <input id='priceUpdate'
                               value={newPrice}
                               onChange={(e) => onChange(e)}
                               name="newPrice"
                               type="input"
                               placeholder="Enter New Item Price"
                        />
                    </div>
                    <button onClick={(e) => submitUpdate(e)}>Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default AdminProduct;
