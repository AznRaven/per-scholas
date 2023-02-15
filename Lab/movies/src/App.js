import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  let [movie, setMovie] = useState(null);
  let randMovies = [
    "Jung E",
    "Bullet Train",
    "Avengers",
    "Avatar",
    "batman",
    "spider-man",
    "the flash",
  ];
  
  useEffect(() => {
    let randIndex = Math.floor(Math.random() * randMovies.length);
    getMovie(randMovies[randIndex]);
  }, []);

  async function getMovie(title) {
    console.log(title);

    const key = process.env.REACT_APP_KEY

    let url = `http://www.omdbapi.com/?apikey=${key}&t=${title}`;
    console.log(url);

    let response = await fetch(url);
    let data = await response.json();

    setMovie(data);

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => setMovie(data));
  }

  console.log(movie);

  if (movie) {
    return (
      <div className="App">
        <MovieDisplay movie={movie} />
        <Form getMovie={getMovie} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Search for a Movie</h1>
        <Form getMovie={getMovie} />
      </div>
    );
  }
}

export default App;
