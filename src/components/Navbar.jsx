import React from 'react'
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="nav-container">
            <h1 id='page-name'>BONSAI.</h1>
            <div className="nav-options">
                <ul id='nav-items'>
                    <li><a href="">HOME</a></li>
                    <li><a href="">MENU</a></li>
                    <li><a href="">RESERVE</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar