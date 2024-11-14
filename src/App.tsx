import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#191919] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;