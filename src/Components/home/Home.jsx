import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About";
import Services from "./Services";
function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
