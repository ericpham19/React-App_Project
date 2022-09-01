import React from 'react'
import {Link} from "react-router-dom"
const TrendingCoin = ({coin , id}) => {
    
  return (
    <Link to={`/coin/${id}`}>
    <div className="font-light  md:grid-cols-3 h-20 mr-2 mb-2 p-2 border-red-200 border-2 border-solid rounded hover:bg-blue-200 ">
        <div className="flex items-center gap-2 ">
          <span>{coin.score +1}</span>
          
          <div className= "w-16">
          <img src={coin.large} alt={id}></img>
          </div>
         
          <p>{coin.name}</p>
          <p>({coin.symbol})</p>
          <p className="text-end">Market Rank:{coin.market_cap_rank}</p>
          
          
        </div>
      </div>
      </Link>
  )
}

export default TrendingCoin
