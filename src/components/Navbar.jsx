import React from 'react'
import "./Navbar.css"
import sushi_logo from '../assets/BonsaiSushi.png'

const Navbar = () => {
  return (
    <div>
        <div className="navbar-container">
          <img id='website-logo' src={sushi_logo} alt="Bonsai Sushi Logo" />
          <div className="navbar-options">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Reservations</a></li>
              <li><a id="contact-button" href="">Contact</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar