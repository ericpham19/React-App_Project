import React from "react";
import {Link} from "react-router-dom";

const ExchangeRates = ({
  pricechange,
  name,
  marketcap,
  price,
  symbol,
  image,
  id
}) => {
  return (
    <Link to={`/coin/${id}`}>
    <div className=" max-w-5xl mx-auto px-2 sm:grid-cols-3 items-stretch  h-20 items-center font-light ml-2 mb-2 p-2 border-red-200 border-2 border-solid rounded hover:bg-blue-200 flex    ">
      <div className="  flex items-center gap-2 absolute ">
        <p>${price.toLocaleString()}</p>
        <p
          className={`ml-6
            ${ pricechange } >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {pricechange}%
        </p>
        <img className="w-16" src={image} alt={name} />
        <p>{name}</p>
        <p className="uppercase">({symbol})</p>
        <p>Market Cap:{marketcap.toLocaleString()}</p>
      </div>
    </div>
    </Link>
  );
};

export default ExchangeRates;
