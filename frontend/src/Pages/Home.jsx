import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <h1>Hello World</h1>
            <Link to="/admin"><h3>Admin</h3></Link>
        </>
    )
}

export default Home;