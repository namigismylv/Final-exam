import { useEffect, useState } from 'react'
import './App.css'
import MainContext from './Context/Context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ROUTES from './Routes/Routes'
import axios from 'axios';
function App() {
  const routes = createBrowserRouter(ROUTES)
  const [data, setData] = useState([])
  const [wishlistItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [])
  const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
  const [input, setInput] = useState("")
  const [sort, setSort] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:1000/categories").then(res => {
      setData(res.data)
      console.log(res);
    })
  }, [])
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
  }, [wishlistItems, basketItems])

  function addToWishlist(item) {
    const target = wishlistItems.find(x => x.item._id == item._id)
    if (!target) {
      let newWishlistItem = {
        item: item
      }
      setWishlistItems([...wishlistItems, newWishlistItem])
    }
  }
  function deleteFromWishlist(item) {
    setWishlistItems([...wishlistItems.filter(x => x.item._id !== item._id)])
  }
  function addToBasket(item) {
    const target = basketItems.find(x => x.item._id == item._id)
    if (!target) {
      let newBasketItem = {
        item: item
      }
      setBasketItems([...basketItems, newBasketItem])
    }
  }
  function deleteFromBasket(item) {
    setBasketItems([...basketItems.filter(x => x.item._id !== item._id)])
  }
  const contextData = { data, setData, wishlistItems, setWishlistItems, addToWishlist, deleteFromWishlist, input, setInput, basketItems, setBasketItems, addToBasket, deleteFromBasket, sort, setSort }
  return (
    <>
      <MainContext.Provider value={contextData} >
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App
