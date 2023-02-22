import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Stock from "./components/Stock";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/dashboard" element={Dashboard} />
      <Route path="/stock" element={Stock} />
      <Route path="/about" element={About} />
    </Routes>
  );
}

export default App;
