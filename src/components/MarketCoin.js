import React from 'react'

const MarketCoin = ({name, image , symbol, price , pricechange, marketcap}) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4  p-2  mr-2 mb-2 p-2 border-red-200 border-2 border-solid rounded hover:bg-blue-200">
    <div className="flex items-center gap-1 w-full">
      <img className="w-6" src={image} alt={name} />
      <p>{name}</p>
      <span className="text-xs">({symbol})</span>
    </div> 
    <span className="w-full text-center">${price}</span>
        <span className={`flex gap-1 ${pricechange < 0 ? 'text-red-400' : 'text-green-400'}`}>
        {pricechange}%
        </span>
        <div className='block'>
        <p>Market Cap</p>
      <span>${marketcap}</span>
        </div>
       

       
     </div>
  )
}

export default MarketCoin
