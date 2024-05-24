import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
const Cards = ({data}) => {
  return (
    <div className="container">
        <div className="row cardRow">
            {
                data.map((dataItem,index)=>{
                    return(
                        <Card dataItem={dataItem} key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cards