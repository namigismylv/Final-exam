import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png" alt="" />
        </div>
        <div className="header__middle">
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="add" >Add</Link>
            </li>
          </ul>
        </div>
      
      </div>
    </header>
  )
}

export default Header