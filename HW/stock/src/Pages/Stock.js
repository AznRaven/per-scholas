import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.js";
import Stock from "../dataApi";
import { useParams } from "react-router-dom";

export default function Stocks() {
  let { symbol } = useParams();
//   console.log(symbol);
  let stock = data.filter((x) => x.symbol === symbol);
//   console.log(stock);
  return (
    <>
      <h1>{stock[0]?.name}</h1>
      <h2>Symbol: {stock[0]?.symbol}</h2>
      <p>Change: {stock[0]?.change}</p>
      <p>High: {stock[0]?.high}</p>
      <p>Last Price: {stock[0]?.lastPrice}</p>
      <p>Low: {stock[0]?.low}</p>
      <p>Open: {stock[0]?.open}</p>
    </>
  );
 }
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getStock } from "../dataApi";

// export default function Stock() {
//   let { symbol } = useParams();
//   let [stock, setStock] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getStock();
//       setStock(data.filter((x) => x.symbol === symbol)[0]);
//     }
//     fetchData();
//   }, [symbol]);

//   if (!stock) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <h1>{stock.name}</h1>
//       <h2>Symbol: {stock.symbol}</h2>
//       <p>Change: {stock.change}</p>
//       <p>High: {stock.high}</p>
//       <p>Last Price: {stock.lastPrice}</p>
//       <p>Low: {stock.low}</p>
//       <p>Open: {stock.open}</p>
//     </>
//   );
// }

