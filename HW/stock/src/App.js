import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Stock from "./Pages/Stock";
import Home from "./Pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
