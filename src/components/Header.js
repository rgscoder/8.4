import React from 'react'
import Navigation from './Navigation'

function Header() {
  return (
    <div className="header">
        <header>
            <div id="bloomdiv"><h1 id="title">Bloombag</h1></div>
            <h2 id="subtitle">Stock Exchange</h2>
            {/* <Navigation /> */}
        </header>
    </div>
  )
}

export default Header