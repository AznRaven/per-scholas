import data from "../data.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 style={{fontSize:"2vw"}}>Most Active Stocks</h1>
      <table>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
                
        {data.map((x) => {
          return (
            
              <tr>
                {/* <Link key={x.symbol} to={`/stocks/${x.symbol}`}> */}
                <th>{x.symbol}</th>
                <th>{x.name}</th>
                <th>{x.lastPrice}</th>
                <th style={x.change<0?{color: "red"}:{color:'green'}}>{x.change}</th>
                {/* </Link> */}
              </tr>
            
          );
        })}
      </table>
    </>
  );
}
