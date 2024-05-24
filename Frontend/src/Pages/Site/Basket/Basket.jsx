import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import BasketTable from '../../../Components/BasketTable/BasketTable'

const Basket = () => {
    const {basketItems,setBasketItems}=useContext(MainContext)
  return (
    <div>
        <BasketTable  basketItems={basketItems}/>
    </div>
  )
}

export default Basket