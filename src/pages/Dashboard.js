import React from 'react';
import { Link } from 'react-router-dom';
import stocks from "../data";
import Navigation from '../components/Navigation';



function Dashboard() {
  return (
    <div>
        <Navigation />
         <section>
        <h1>Dashboard</h1>
        {
            Data.map((stock) => {
                const { title, symbol } = stock;

                return (
                 <Link key={symbol} to={`/stocks/${symbol}`}>
                <h2>{title}</h2>
                 </Link>
                    );
                    })
        }
            </section>
    </div>
  )
}

export default Dashboard

