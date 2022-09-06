import React from 'react'
import { useParams } from 'react-router-dom'
import UseAxios from '../hooks/Axios'
const PriceChange = () => {

    const {id}= useParams()
    const {response} = UseAxios(`coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false
    Server response`)
   
   
    if(!response){
        return <div>Loading</div>
    }
    const market_data = response.market_data
  return (
    <div className="grid  grid-flow-col auto-cols-max gap-40 mt-10 text-center border-solid border-2 border-blue-200 " >
  
    <div>
    <div>24h</div>
    <div className={`${market_data.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>{(response.market_data.price_change_percentage_24h).toFixed(2)}%</div>
    </div>
    <div>
    <div>7d</div>
    <div className={`${market_data.price_change_percentage_7d < 0 ? 'text-red-400' : 'text-green-400'}`} >{(response.market_data.price_change_percentage_7d).toFixed(2)}%</div>
    </div>
    <div>
        <div>14d</div>
        <div className={`${market_data.price_change_percentage_14d < 0 ? 'text-red-400' : 'text-green-400'}`}>{(response.market_data.price_change_percentage_14d).toFixed(2)}%</div>
    </div>
    <div>
        <div>30d</div>
        <div className={`${market_data.price_change_percentage_30d < 0 ? 'text-red-400' : 'text-green-400'}`}>{(response.market_data.price_change_percentage_30d).toFixed(2)}%</div>
    </div>
    <div>
        <div>1y</div>
        <div className={`${market_data.price_change_percentage_1y < 0 ? 'text-red-400' : 'text-green-400'}`}>{(response.market_data.price_change_percentage_1y).toFixed(2)}%</div>
    </div>


   

    </div>
  )
}

export default PriceChange
