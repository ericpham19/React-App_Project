import React from 'react'

const TrendingCoin = ({coin}) => {
    
  return (
    <div className="font-light mb-2 p-2 border-red-200 border-2 border-solid rounded hover:bg-blue-200">
        <div className="flex items-center gap-1">
          
         
          <p>{coin.name}</p>
          
        </div>
      </div>
  )
}

export default TrendingCoin
