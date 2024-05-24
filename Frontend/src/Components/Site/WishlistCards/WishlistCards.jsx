import React from 'react'
import WishlistCard from '../WishlistCard/WishlistCard'
import "./WishlistCards.css"
const WishlistCards = ({wishlistItems}) => {
  return (
    <div className='container'>
        <div className="row">
        {
            wishlistItems.map((wishlistItem,index)=>{
                return(

                    <WishlistCard wishlistItem={wishlistItem} key={index}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default WishlistCards