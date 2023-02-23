import { useEffect, useState } from "react";
import Stock from "../dataApi";
import { Link } from "react-router-dom";
export default function Api() {
  const [data, setData] = useState([]);

  const handleDataLoaded = (data) => {
    setData(data);
  };
  console.log(data)
  return (
    <>
      <h1 style={{ fontSize: "2vw" }}>Most Active Stocks</h1>
      <Stock onDataLoaded={handleDataLoaded} />
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
              return (
                  <tr key={x.symbol}>
                    <Link key={x.symbol} to={`/stocks/${x.symbol}`}>
                <th>{x.symbol}</th></Link>
                <th>{x.name}</th>
                <th>{x.price}</th>
                <th style={x.change < 0 ? { color: "red" } : { color: "green" }}>
                  {x.change}
                </th>
        
              </tr>
            );
        })}
        </tbody>
      </table>
    </>
  );
}
