import React from 'react'
import Trending from "../components/Trending"
import GlobalExchangeRates from "../components/GlobalExchangeRates"
import MarketData from '../components/MarketData'
import {Link} from "react-router-dom"
const Home= () => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2 divide-x ">

      <div >
      <Trending/>
      </div>
      <div > 
      <GlobalExchangeRates/>
      </div>

      </div>
      
      <div className="text-center mt-10">
      <Link to="/trade">
      <button className="text-4xl border border-dashed border-8 border-red-200 hover:border-indigo-300 ">Trade</button>
      </Link>
      </div>
   
      <div  className="text-center mt-10">
      <div className= "mb-2">
      <Link to="/contact">
          <span className="text-3xl border border-dashed border-8 border-red-200 hover:border-indigo-300">Contact</span>
          </Link>
        </div>
      </div>
     


      <div className="place-content-center text-center mt-20">
      <MarketData/>
      </div>
      

    </div>

    

  )
}

export default Home
