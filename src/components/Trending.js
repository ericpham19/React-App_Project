import React from 'react'
import UseAxios from "../hooks/Axios"
import TrendingCoin from "./TrendingCoin"
const Trending = () => {
    const {response} = UseAxios("search/trending")
    console.log(response)
  return (
    <div className= "font-bold text-xl text-red-500 max-w-7xl mx-auto  ">
    {response && response.coins.map(coin => <TrendingCoin coin={coin} key = {coin.item.coin_id}/>) }
    </div>
  )
}

export default Trending;
