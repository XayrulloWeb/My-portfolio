import React from "react"
import Header from "./Header/Header"
import "./Style/style.css"
import Navbar from "./Header/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
        <Header/>
          <div className="wrapper">

            <Navbar/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
          </div>



        <p className="footer_End">© Xayrowa 2023</p>
    </div>
  );
}

export default App;
