import "./App.js"
import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/HomePage";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
// import topBtn from "./components/TopBtn"



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
