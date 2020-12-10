import React from "react";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
