// import { useStockState } from './components/Stock';

// const [stock, setStock] = useStockState();

// // You can now use `stock` and `setStock` in `data.js`
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Stock() {

  let url =
    "https://financialmodelingprep.com/api/v3/quote/AAPL,COST,NVDA,F,TSLA,META,AMZN, MSFT,AMD,GOOG?apikey=89839b3c5fa357dcbea035645cd7cf4a";
  let [stock, setStock] = useState("");

  const getStock = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setStock(data);
      console.log(stock);
      console.log(`data: ${data[0].name}`);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };
  useEffect(() => {
    getStock();
  }, []);
  return (
    <>
      <table>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        
      </table>
    </>
  );
}