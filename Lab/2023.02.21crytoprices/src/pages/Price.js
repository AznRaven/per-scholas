import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Price() {
  let key = process.env.REACT_APP_KEY;

  let { symbol } = useParams();
  let navigate = useNavigate()
  console.log(symbol);
  let [coin, setCoin] = useState(null);

  let url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${key}`;
  
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  function goBack() {
    navigate(-1)
  }

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base} / {coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
        <button onClick={goBack}>Back</button>
      </div>
    );
  };

  const loading = () => {
    return <div>Loading...</div>;
  };

  return coin ? loaded() : loading();
}

const get = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
