import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'

const WishlistCard = ({wishlistItem}) => {
    const {deleteFromWishlist} =useContext(MainContext)
  return (
    <>
       <div className="wishlistCol col-4">
                <div class="card wishlistCard mb-5" style={{ width: "400px" }} >
                    <img src={wishlistItem.item.image} class="card-img-top" alt="..." />
                        <h1 class= "w-title">{wishlistItem.item.title}</h1>
                        <p class="w-text">{wishlistItem.item.desc}</p>
                    <div className="wishlist__button">
                        <button className='wishlist__btn' onClick={()=>{deleteFromWishlist(wishlistItem.item)}}><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
        </div>

    </>
  )
}

export default WishlistCard