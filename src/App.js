import React from "react";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
