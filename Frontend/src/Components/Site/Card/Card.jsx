import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ dataItem }) => {
    return (
        <div className="col-4 cardCol">
            <Link to={`details/${dataItem._id}`}>
                <div class="card mb-5" style={{ width: "400px" }} >
                    <img src={dataItem.image} class="card-img-top" alt="..." />
                        <h1 className='card-title'>{dataItem.title}</h1>
                        <p class="card-text">{dataItem.desc}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card