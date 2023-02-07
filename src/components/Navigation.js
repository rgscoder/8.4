import { Link } from "react-router-dom";

import React from 'react'

function Navigation(props) {
    return (
        <div className="nav">
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="stocks">
                <h3>Stocks</h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
        </div>
    )
}

export default Navigation
