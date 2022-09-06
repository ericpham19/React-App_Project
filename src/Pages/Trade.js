import { useEffect, useState} from "react";
import UseAxios from "../hooks/Axios";
import { NumberFunction } from "../NumberFunction";


const Trade = () =>{
  
  const [trade, setTrade] = useState({
    buyData: {},
    sellData: {},
    gains: 0,
  });


  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [volume, setVolume] = useState(0);
  const [coin, setCoin] = useState("");


  

    const {response}= UseAxios("coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")

  const dataUrl = (coin, date) => {
    return `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}&localization=false`;
  };



  const dataFetch = async (buy, coin, date) => {
    let newDate = handleDate(date);
   
    setTimeout (() => {
      fetch(dataUrl(coin, newDate)).then((response) =>
      response.json()
        .then((jsonData) => {
          if (buy) {  
            setTrade({ ...trade, buyData: jsonData });
          } else {
            setTrade({ ...trade, sellData: jsonData });
          }
        }).catch((error) =>{
          console.log(error)
        })
    );
    } , 1000)
    
  };
  const handleDate =(event) =>{
    const days = event.slice(8);
    const month = event.slice(5, 7);
    const year = event.slice(0,4);
    
    return `${days}-${month}-${year}`
}
  const handleBuy = (event) => {
    let result = event.target.value;
    setBuy(result);
    dataFetch(true, coin, result);
  };

  const handleSell = (event) => {
    let result = event.target.value;
    setSell(result);
    dataFetch(false, coin,result);
  };

  const handleCoinChange = (event) => {
    let result = event.target.value;
    setCoin(result);
    dataFetch(null ,coin, result);
  };
  const calcGains = () => {
    setTrade({
      ...trade,
      gains:
        ((trade.sellData.market_data?.current_price.usd -
          trade.buyData.market_data?.current_price.usd).toFixed(2)) *
        volume,
    });
  };

 
    const handleEnter = (event) => {
      if(event.key === "Enter"){
        event.preventDefault();
        calcGains();
      }
    };
   
let today = new Date().toISOString().split('T')[0];

  

  return (
    <div className="text-center justify-center  ">
      <div className="">
        <h1 className="mt-10 font-extrabold text-8xl text-green-400">
          Crypto Calculator
        </h1>
        <h3 className="mt-10">Start using the calculator by selecting a coin from the dropdown box. Proceed choose a buy and sell date from the calendar icon ensuring that it is a past date. Enter your coin amount and click calculate to see your return. Thank you for trying the calculator out.</h3>
      </div>
      <div className="mt-44 flex gap-10 justify-center">
        <p>Choose a coin</p>
        <select
          className="border-solid border-2 mr-20"
          defaultValue={coin}
          onChange= {handleCoinChange}
          
          >
          {response && response.map(item => <option key={item.id} >{item.id}</option>)}
          
        </select>
        <span>Choose a buy date</span>
        <input
          className="border-solid border-2"
        defaultValue={buy}
        type="date"
        max= {today}
       
        onChange={(result) => handleBuy(result)}
         placeholder="Buy Date dd-mm-yyyy"
        />
        <h2>
          {trade.buyData.market_data?.current_price.usd}
          USD
        </h2>
        <span>Choose a sell date</span>
        <input
          className="border-solid border-2 "
         defaultValue={sell}
         type="date"
         max= {today}
          onChange={handleSell}
          placeholder="Sell Date dd-mm-yyyy"
        />
        <h2>
          {trade.sellData.market_data?.current_price.usd}
          USD
        </h2>
          <span>Set your coin amount</span>
        <input
        
          className="border-solid border-2"
          value={volume}
          onKeyDown= {handleEnter}
          placeholder="Enter Coin Amount"
          onChange={(event) => setVolume(event.target.value)}
        />
        <button className="border-solid border-2" onClick={calcGains}>
          Calculate
        </button>
        <p className={`text-2xl ${trade.gains < 0 ? 'text-red-400' : 'text-green-400'}`}>{trade.gains.toLocaleString()} USD</p>
        <p></p>
      </div>
    </div>
  );
};

export default Trade;
