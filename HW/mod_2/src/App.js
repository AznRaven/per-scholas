import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
