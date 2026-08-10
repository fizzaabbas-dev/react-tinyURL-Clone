import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Domains from "./pages/Domains"; 
import Plans from "./pages/Plans";
import Footer from "./components/Footer";
function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="plans" element={<Plans/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </>
  );
}

export default App;