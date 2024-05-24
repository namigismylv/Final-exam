import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import Table from '../../../Components/Admin/Table/Table'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
  const {data,setData}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <div className='dashboard'>
      <Table data={data}/>
    </div>
    </>
  )
}

export default Dashboard