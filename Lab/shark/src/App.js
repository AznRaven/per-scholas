import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Recipe from "./Recipe";
import About from "./Pages/About";
import Form from "./components/Form";
// import Search from "./components/Search";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/" element={<Recipes />} />
        <Route path="/recipe/:symbol" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path ="/form" element ={<Form />} />
      </Routes>
    </div>
  );
}
