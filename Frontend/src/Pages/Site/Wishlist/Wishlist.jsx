import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import WishlistCards from '../../../Components/Site/WishlistCards/WishlistCards'
import { Helmet } from 'react-helmet'
import './Wishlist.css'

const Wishlist = () => {
  const {wishlistItems,setWishlisItems}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>
      Wishlist</title></Helmet>
    <div className='wishlist'>
      <WishlistCards wishlistItems={wishlistItems}/>
    </div>
    </>
  )
}

export default Wishlist