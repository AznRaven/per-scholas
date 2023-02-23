import { Link } from "react-router-dom";
import data from "../data.js"


export default function Dashboard() {
  let stock = data
  console.log(stock)
  return (
    <div>
      {stock.map((x) => (
        <Link key={x.symbol} to={`/stocks/${x.symbol}`}>
          <h3>{x.symbol}</h3>
          <h2><b>{x.name}</b></h2>
          <hr/>
        </Link>
      ))}
    </div>
  );
}
