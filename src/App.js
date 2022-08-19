import "./App.js"
import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/HomePage";
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <div className="entire">
      <NavBar />
      <Home />
      <AboutMe />
    </div>
  );
}
export default App;
