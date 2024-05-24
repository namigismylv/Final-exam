import React, {useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import MainContext from '../../../Context/Context';
import { Helmet } from 'react-helmet';
import "./Details.css"
const Details = () => {
  const {id} = useParams()
  const [item,setItem]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:1000/categories/${id}`).then(res=>{
      
      setItem(res.data)
    })
  },[])
  const {wishlistItems,setWishlistItems,addToWishlist,addToBasket}=useContext(MainContext)
  return (
    <div className='details'>
      <Helmet><title>{item.title}</title></Helmet>
      <div className="container">
        <div className="row">
          <div className="col-6 detailsCol">
            <img src={item.image} width="500px" alt="" /></div>
          <div className="col-6 detailsCol">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="details__button">
              <button className='btn btn-warning' onClick={()=>addToWishlist(item)}>Add To Wishlist</button>
              <button className='btn btn-primary' onClick={()=>addToBasket(item)}> Add to Basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details