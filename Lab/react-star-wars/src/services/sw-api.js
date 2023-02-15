import { useEffect } from "react";

async function Swapi() {
  // let [ship, setShip] = useState(null);

  async function getData() {
    let url = `https://swapi.dev/api/starships/`;
    console.log("hello");

    let response = await fetch(url);
    let data = await response.json();

    // console.log(data.results[0].name)
    console.log("running");
    let starships = data.results.map((x) => {
      console.log(x);
      return <h1>{x.name}</h1>;
    });
  }
  // useEffect(() => {
  //   getData();
  // }, []);
  return <div>starships</div>;
}

export default Swapi;
