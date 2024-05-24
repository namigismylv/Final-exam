import React from 'react'
import TableItem from '../TableItem/TableItem'
import './Table.css'
const Table = ({data}) => {
    return (
        <>
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
                        data.map((item,index)=>{
                            return(
                                <TableItem item={item} key={index}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table