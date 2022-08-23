import "./App.js"
import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/HomePage";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list = list.sort(() => Math.random() - 0.5)
console.log(list)

function App() {
  return (
    <div className="entire">
      <NavBar />
      <Home />
      <AboutMe />
      <Work />
      <Footer />
    </div>
  );
}
export default App;
