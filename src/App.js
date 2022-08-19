import "./App.js"
import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"

function App() {
  //parent component
  return (
    <div >
      <NavBar />
      <Home />
      <AboutMe />
    </div>
  );
}
export default App;
