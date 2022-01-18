import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav.js";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer"
import Resume from "./components/pages/Resume";
import HeroImage from "./components/Hero";

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Portfolio" element={<Portfolio/>} />
        <Route exact path="/Resume" element={<Resume/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;

