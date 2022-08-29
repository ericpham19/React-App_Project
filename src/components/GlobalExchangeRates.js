import React from "react";
import UseAxios from "../hooks/Axios"
import ExchangeRates from "./ExchangeRates"
const GlobalExchangeRates = () => {
    const { response } = UseAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7')
    console.log(response)
  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2 text-center"
      
      >Global</h1>
      <ExchangeRates/>
    </div>
  );
};

export default GlobalExchangeRates;
