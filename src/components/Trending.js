import React from 'react'
import UseAxios from "../hooks/Axios"
import TrendingCoin from "./TrendingCoin"

const Trending = () => {
    const { response} = UseAxios('search/trending');
    console.log(response)
    return (
        <div className="mt-8">
          <h1 className="text-2xl mb-2 text-center">Trending</h1>
          {response && response.coins.map(coin => <TrendingCoin key={coin.item.coin_id} coin={coin.item} />)}
        </div>
      )
}

export default Trending;
