import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import './App.css'

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";


function App() {
 

  return (
    <Router>
    <Navbar />
    <div className="container mt-4">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  )
}

export default App
