import React from 'react'
import CoinDetails from '../components/CoinDetails'
import Chart from "../components/Chart"
import PriceChange from "../components/PriceChange"
import { useParams } from 'react-router-dom'


const Details = () => {
  const {id} = useParams()
  return (
    <div className= " max-w-5xl mx-auto px-2 ">
     <CoinDetails id ={id}/>
     <div className="mt-40 border-blue-200 border-2 border-solid rounded ">
      <Chart/></div>
      <div>
      <PriceChange/>
      </div>
    </div>
  )
}

export default Details
