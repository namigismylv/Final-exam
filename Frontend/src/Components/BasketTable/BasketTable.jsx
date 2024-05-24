import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'

const BasketTable = ({basketItems}) => {
    return (
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
               {
                basketItems.map((basketItem,index)=>{
                    return (
                    <BasketTableItem basketItem={basketItem} key={index} index={index}/>

                    )
                })
               }
            </tbody>
        </table>)
}

export default BasketTable