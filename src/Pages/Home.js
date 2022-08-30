import React from 'react'
import Trending from "../components/Trending"
import GlobalExchangeRates from "../components/GlobalExchangeRates"

const Home= () => {
  return (
    <div className=" grid grid-cols-2 divide-x  ">
      <div className="">
      <Trending/>
      </div>
      <div className=''> <GlobalExchangeRates/>
      </div>
   
    </div>
  )
}

export default Home
