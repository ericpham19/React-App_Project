import React from 'react'
import Trending from "../components/Trending"
import GlobalExchangeRates from "../components/GlobalExchangeRates"
import MarketData from '../components/MarketData'
const Home= () => {
  return (
    <div className="w-full place-content-evenly">
      <div className="grid grid-cols-2 divide-x ">

      <div className="">
      <Trending/>
      </div>
      <div className=''> 
      <GlobalExchangeRates/>
      </div>

      </div>

      <div className="place-content-center text-center mt-20">
      <MarketData/>
      </div>
      

    </div>

    

  )
}

export default Home
