import React from 'react'

const TrendingCoin = ({coin}) => {
    
  return (
    <div className="font-light h-20 mr-2 mb-2 p-2 border-red-200 border-2 border-solid rounded hover:bg-blue-200">
        <div className="flex items-center gap-2 absolute">
          <span>{coin.score +1}</span>
          
          <div className= "w-1/12">
          <img src={coin.large}></img>
          </div>
         
          <p>{coin.name}</p>
          <p>({coin.symbol})</p>
          <p className="text-end">Market Rank:{coin.market_cap_rank}</p>
          
          
        </div>
      </div>
  )
}

export default TrendingCoin
