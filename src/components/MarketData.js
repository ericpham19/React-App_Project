import React from 'react'
import MarketCoin from './MarketCoin'
import UseAxios from "../hooks/Axios"
const MarketData = () => {
  const {response} = UseAxios("coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  console.log(response)
  return (
    <div className="mt-8">
     <h1 className="text-2xl mb-2 text-center">Market Data</h1>
     {response && response.map(coin => <MarketCoin key= {coin.id} id={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price= {coin.current_price} marketcap={coin.market_cap} pricechange= {coin.price_change_percentage_24h}/>)}
    </div>
  )
}

export default MarketData;
