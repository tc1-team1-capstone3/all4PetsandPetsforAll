import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getItems} from '../../Redux/itemReducer/itemReducer'
const Products = ()=>{
    const item = useSelector((state)=>state.itemReducer.items)
    const dispatch = useDispatch();
    useEffect(()=>dispatch(getItems()));

    return (
        <div>
            <p>products</p>
        </div>
    )
}

export default Products;
