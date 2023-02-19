import { useState } from "react";

export async function getData() {
  // let url = `https://swapi.dev/api/starships`;
  let url = 'https://swapi.dev/api/planets';
  let response = await fetch(url);
  let ships = await response.json();
  return ships;
}

function Swapi() {
  let [ship, setShip] = useState(null);

  async function fetchShipData() {
    let ships = await getData();
    setShip(ships);
  }

  return ship;
}

export default Swapi;