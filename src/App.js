import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Nav.js";
import About from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer"
import Resume from "./components/pages/Resume";
import HeroImage from "./components/Hero";

function App() {
  return (
    <Router bg="black" basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<About/>} />
        <Route exact path="/Projects" element={<Projects/>} />
        <Route exact path="/Resume" element={<Resume/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;

