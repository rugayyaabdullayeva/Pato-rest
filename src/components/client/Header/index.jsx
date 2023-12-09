import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Header = () => {
  return (
    <div class="flex gap-20 p-7 items-center justify-center">
      <NavLink to="/"
        onClick={(isActive) => (isActive ? ".active" : "")}
      ><img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png" alt="" />
      </NavLink>
      <nav>
        <ul className='flex gap-20 uppercase'>
          <li>
            <NavLink to="/home"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservation"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              onClick={(isActive) => (isActive ? ".active" : "")}
            >Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-5">
        <a href="https://www.facebook.com/profile.php?id=100093042257893" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  )
}

export default Header