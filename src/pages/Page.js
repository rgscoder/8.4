import { useParams } from "react-router-dom"
import stocks from "../data"

import React from 'react'

function Page(props) {
    const { symbol } = useParams()
    return(
        <div>
            {stocks.filter((stock) => stock.symbol === symbol).map((stock, idx) => (
                <div key={idx} className="stock-page">
                    <h2><b>Stock Details</b></h2>
                    <p><b>Name</b>: {stock.name}</p>
                    <p><b>Price</b>: {stock.lastPrice}</p>
                    <p><b>Change</b>: {stock.change}</p>
                    <p><b>High</b>: {stock.high}</p>
                    <p><b>Low</b>: {stock.low}</p>
                    <p><b>Open</b>: {stock.open}</p>
                </div>
            ))}
        </div>
    )
}

export default Page
