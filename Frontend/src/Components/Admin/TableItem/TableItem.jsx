import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import axios from 'axios'

const TableItem = ({item}) => {
    const {setData}=useContext(MainContext)
    return (
        <>
            <tr>
                <th scope="row">{item._id}</th>
                <td><img src={item.image} width="70px" alt="" /></td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td><button className='btn btn-danger' onClick={()=>{
                    axios.delete(`http://localhost:1000/categories/${item._id}`).then(res=>{
                        setData(res.data)
                    })
                }}>Delete</button></td>
            </tr>
        </>
    )
}

export default TableItem