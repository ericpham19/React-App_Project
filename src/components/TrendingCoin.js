import React from 'react'

const TrendingCoin = ({coin}) => {
    console.log(coin)
  return (
    <div>
      <p>{coin.name}</p>
    </div>
  )
}

export default TrendingCoin
