import React from 'react';

const Featured = () =>{
    const item = useSelector((state)=>state.itemReducer.items)
    const dispatch = useDispatch();
    useEffect(()=>dispatch(getItems()));
    return (
        <div>
            <p>featured</p>
        </div>
    )
}

export default Featured