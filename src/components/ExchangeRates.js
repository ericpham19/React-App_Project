import {useState} from "react";

const ExchangeRates = ({ pricechange, name, marketcap, price, symbol, image }) => {

  return (
    <div className=" h-20 font-light ml-2 mb-2 p-2 border-red-200 border-2 border-solid rounded hover:bg-blue-200 flex    ">
      <div className="mt-4 flex gap-4">
        <p>${price}</p>
        <p className= { {pricechange} >= 0 ? "positive-price-change" : "negative-price-change"}>{pricechange}%</p>
    
      </div>
      <div className="flex items-center gap-2 justify-center absolute  ml-20">
        <div className="w-1/12 ">
          <img src={image} alt={name} />
        </div>
        <div className="flex gap-1">
          <p>{name}</p>
          <p className="uppercase">({symbol})</p>
        </div>
        <div className= "ml-5">
          <p>Market Cap:{marketcap}</p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
