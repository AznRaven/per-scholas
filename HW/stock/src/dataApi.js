import { useEffect, useState } from "react";

export default function Stock({ onDataLoaded }) {
  let url =
    "https://financialmodelingprep.com/api/v3/quote/AAPL,MSFT, GOOGL, FB, ORCL, INTL, COST,NVDA,F,TSLA,META,AMZN,AMD,GOOG?apikey=89839b3c5fa357dcbea035645cd7cf4a";
  let [stock, setStock] = useState([]);

  const getStock = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStock(data);
      onDataLoaded(data);

    } catch (error) {
      console.error(`error: ${error}`);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <>
      {/* <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stock &&
            stock.map((item) => (
              <tr key={item.symbol}>
                <td>{item.symbol}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.change}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </>
  );
}

