import { useState, useEffect } from "react";

export default function About() {
  const [data, setData] = useState([]);

  let url =
    // "https://api.spoonacular.com/recipes/complexSearch?apiKey=aa72e5b6fd0d4c5281deb4f80b73bbe1";
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=a085977ad91341bab60bafd0289e2aa8";

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
    //   console.log(data.results)
      setData(data);
      let mapData = await data.results.map((x, i) => {
        return (
            <div>
            <img src={x.image} alt="{x.title}"></img>
            <div>{x.title}</div>
            </div>
        )
      });
      setData(mapData)
    };

    dataFetch();
  }, []);

  return (
    <div className="recipes">
      {data}
    </div>
  );
}
