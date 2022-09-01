import React from 'react'
import { useParams } from 'react-router-dom'
import UseAxios from '../hooks/Axios'
import {NumberFunction} from '../NumberFunction'

const CoinDetails = () => {
   
    const {id}= useParams()
    const {response} = UseAxios(`coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false
    Server response`)
    console.log(response)
   
    if(!response){
        return <div>Loading</div>
    }

   
  return (
    <div className="mt-10 w-full box-border">
      <div className="flex items-center gap-2">
      <img className="w-1/14"src= {response.image.small} alt={id}/>
        <p className="text-4xl font-bold">{response.name}</p>
        <p className="font-medium uppercase mt-2 ">{response.symbol}</p>
       
     </div> 
     
     <div className="flex gap-5 mt-16">
     <span className="text-4xl">${NumberFunction(response.market_data.current_price.usd)}</span>
     <span  className="text-2xl mt-1">USD</span>
    <span className={`text-2xl mt-1 ${response.market_data.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>{response.market_data.price_change_percentage_24h}%</span>
    <span className=" text-2xl mt-1">(24H)</span>
     </div>
    
    <div className="grid-cols-4 flex gap-20 absolute mt-10">
        <div>
            <h1>Market Cap</h1>
            <h1>Market Cap Change 24H</h1>
            <h1>Fully Diluted Valuation</h1>
        </div>
        <div>
        <h1>${NumberFunction(response.market_data.market_cap.usd)}</h1>
        <h1>${NumberFunction(response.market_data.market_cap_change_24h)}</h1>
        <h1>${response.market_data.fully_diluted_valuation.usd}</h1>
        </div>
        <div>
        <h1>Circulating Supply</h1>
        <h1>Total Supply</h1>
        <h1>Max Supply </h1>
        </div>
        <div>
        <h1>{response.market_data.circulating_supply}</h1>
        <h1>{response.market_data.total_supply}</h1>
        <h1>{response.market_data.max_supply}</h1>
        </div>






    </div>
    
    
    </div>
  )
}

export default CoinDetails
