import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import productAPI from '../../Utils/productAPI'
import ItemDisplay from "../../Components/ItemDisplay/ItemDisplay";

const Home = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    const getProductList = async () => {
      const returnedList = await productAPI.getProducts()
      setProductList(returnedList.data)
    }
    getProductList()
  }, [])
  return (
    <>
      <h1>Hello World</h1>
      <Link to='/admin'>
        <h1>Admin</h1>
      </Link>
        <ItemDisplay productList={productList} admin={false} />
    </>
  )
}

export default Home
