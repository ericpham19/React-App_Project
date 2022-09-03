import { useState } from "react";

const Trade = () => {
  const [trade, setTrade] = useState({
    buyData: {},
    sellData: {},
    gains: 0,
  });
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [volume, setVolume] = useState();
  const [coin, setCoin] = useState();

  const dataUrl = (date, coin) => {
    return `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}&localization=false`;
  };

  const dataFetch = async (buy, date, coin) => {
    fetch(dataUrl(date, coin)).then((response) =>
      response
        .json()

        .then((jsonData) => {
          if (buy) {
            setTrade({ ...trade, buyData: jsonData });
          } else {
            setTrade({ ...trade, sellData: jsonData });
          }
          console.log(jsonData);
        })
    );
  };

  const handleBuy = (event) => {
    let result = event.target.value;
    setBuy(result);
    dataFetch(true, result, coin);
  };

  const handleSell = (event) => {
    let result = event.target.value;
    setSell(result);
    dataFetch(false, result, coin);
  };

  const handleCoinChange = (event) => {
    let result = event.target.value;
    setCoin(result);
    dataFetch(coin, result);
  };
  const calcGains = () => {
    setTrade({
      ...trade,
      gains:
        (trade.sellData.market_data?.current_price.usd -
          trade.buyData.market_data?.current_price.usd) *
        volume,
    });
  };

  return (
    <div className="text-center justify-center  ">
      <div className="">
        <h1 className="mt-10 font-extrabold text-8xl text-green-400">
          Crypto Calculator
        </h1>
      </div>
      <div className="mt-44 flex gap-10 justify-center">
        <input
          className="border-solid border-2"
          defaultValue={coin}
          onChange={(result) => handleCoinChange(result)}
        />

        <input
          className="border-solid border-2"
          defaultValue={buy}
          onChange={(result) => handleBuy(result)}
          placeholder="dd-mm-yyyy"
        />
        <h2>
          {trade.buyData.market_data?.current_price.usd}
          USD
        </h2>
        <input
          className="border-solid border-2"
          defaultValue={sell}
          onChange={(result) => handleSell(result)}
          placeholder="dd-mm-yyyy"
        />
        <h2>
          
          {trade.sellData.market_data?.current_price.usd}
          USD
        </h2>

        <input
          className="border-solid border-2"
          value={volume}
          placeholder="Enter Coin Amount"
          onChange={(event) => setVolume(event.target.value)}
        />
        <button className="border-solid border-2" onClick={calcGains}>
          Calculate
        </button>
        <h3>{trade.gains} USD</h3>
      </div>
    </div>
  );
};

export default Trade;
