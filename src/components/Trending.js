import React from 'react'
import UseAxios from "../hooks/Axios"
import TrendingCoin from "./TrendingCoin"

const Trending = () => {
    const { response} = UseAxios('search/trending');

    
     
    return (
        <div className="mt-8">
          <h1 className="text-4xl mb-2 text-center">Trending</h1>
          {response && response.coins.map(coin => <TrendingCoin key={coin.item.coin_id} coin={coin.item} id={coin.item.id}/>)}
        </div>
      )
}

export default Trending;
