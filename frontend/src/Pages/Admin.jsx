import React, { useState } from 'react'
import productAPI from '../Utils/productAPI.js'

const Admin = () => {
    const [formData, setFormData] = useState({
        sku: '',
        itemName: '',
        description: '',
        price: 0.0,
        quantity: 0,
    })

    const { sku, itemName, description, price, quantity } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
        try{
            productAPI.createProduct({}).then((res) => {
                console.log(res)
            })
        } catch (e) {
            throw new Error(e)
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={sku}
                    onChange={(e) => onChange(e)}
                    name='sku'
                    id='sku'
                    type='input'
                    placeholder='Enter Item SKU'
                />
                <input
                    value={itemName}
                    onChange={(e) => onChange(e)}
                    name='itemName'
                    id='itemName'
                    type='input'
                    placeholder='Enter Item Name'
                />
                <input
                    value={description}
                    onChange={(e) => onChange(e)}
                    name='description'
                    id='description'
                    type='textarea'
                    placeholder='Enter Item Description'
                />
                <input
                    onChange={(e) => onChange(e)}
                    name='price'
                    id='price'
                    type='input'
                    defaultValue={price}
                    placeholder='Enter Item Price'
                />
                <input
                    onChange={(e) => onChange(e)}
                    name='quantity'
                    id='quantity'
                    type='input'
                    defaultValue={quantity}
                    placeholder='Enter Item Quantity'
                />
                <button type='submit'>Add to List</button>
            </form>
        </div>
    )
}

export default Admin