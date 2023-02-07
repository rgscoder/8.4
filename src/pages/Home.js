
import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';
import stocks from "../data"


function Home() {
  return (<div className="home">
        
    <h1>Market Stocks</h1>

    <div className="dashboard">
        <h3>Overview</h3>
      {stocks.map((stock) => {
        const { name, symbol, lastPrice, change, high, low, open } = stock;
        return (
          <table>
            <Link  key={symbol} to={`/stock/${symbol}`}>
              <tr>
                <td>
                  {name} ({symbol})
                </td>
              </tr>
            </Link>
            <td>{lastPrice}</td>
            <td>{change}</td>
            <td>{high}</td>
            <td>{low}</td>
            <td>{open}</td>
          </table>
        );
      })}
    </div>
</div>)
}

export default Home
