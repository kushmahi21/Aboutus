import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
    
    <Router>  
    <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;