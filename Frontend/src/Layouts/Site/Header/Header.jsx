import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MainContext from '../../../Context/Context'
const Header = () => {
  const {basketItems}=useContext(MainContext)
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png" alt="" />
        </div>
        <div className="header__middle">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link >MENU</Link>
            </li>
            <li>
              <Link>RESERVATION</Link>
            </li>
            <li>
              <Link>Gallery</Link>
            </li>
            <li>
              <Link>ABOUT</Link>
            </li>
            <li>
              <Link>BLOG</Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <Link to="wishlist"><i class="fa-regular fa-heart"></i></Link>
            </li>
            <li>
              <Link to="basket"><i class="fa-solid fa-cart-shopping"></i> <sup>{basketItems.length}</sup></Link>
            </li>
            <li>
              <button class="header__bars" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <ul className='offCanvas__ul'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link >MENU</Link>
            </li>
            <li>
              <Link>RESERVATION</Link>
            </li>
            <li>
              <Link>Gallery</Link>
            </li>
            <li>
              <Link>ABOUT</Link>
            </li>
            <li>
              <Link>BLOG</Link>
            </li>
          </ul>
            <div className="offcanvas__img">
              
              <img src="https://preview.colorlib.com/theme/pato/images/intro-01.jpg.webp" className='ml-4' width="370px" alt="" />
            </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header