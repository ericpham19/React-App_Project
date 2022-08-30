import React from "react";
import UseAxios from "../hooks/Axios"
import ExchangeRates from "./ExchangeRates"
const GlobalExchangeRates = () => {
   const {response}  = UseAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7')
   console.log(response)
  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2 text-center"
      
      >Global</h1>
      {response && response.map(res => <ExchangeRates key= {res.id} name= {res.name} symbol={res.symbol} marketcap={res.market_cap} price= {res.current_price} image={res.image} pricechange= {res.price_change_percentage_24h}/>)}
    </div>
  );
};

export default GlobalExchangeRates;
