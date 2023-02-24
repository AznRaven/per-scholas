import { useState } from "react";
import About from "../Pages/About";

export default function Data({ onDataLoaded }) {
  let [recipe, setRecipe] = useState("");
  
  let url =
    // Andres key
    // "https://api.spoonacular.com/recipes/complexSearch?apiKey=a085977ad91341bab60bafd0289e2aa8";
    // Hai's key
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=aa72e5b6fd0d4c5281deb4f80b73bbe1";
  const getRecipe = async () => {
    try {
      const response = await fetch(url); // grab data
      const data = await response.json(); // after we data, convert to json, store in data
      setRecipe(data); // putting data in recipe
      recipe = data
      onDataLoaded(data);
    //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return 
     <>
       
  
  
     </>;
}
