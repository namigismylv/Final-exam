import React, { useContext } from 'react'
import MainContext from "../../../Context/Context"
import Category from '../../../Components/Site/Sections/Category/Category'
import {Helmet} from "react-helmet";
const Home = () => {
  const {data}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <main>
      <Category data={data}/>
    </main>
    
    </>
  )
}

export default Home