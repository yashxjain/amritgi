import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './index.css'; // Import the CSS file for styling
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Departments from './pages/Departments';
import ContactUs from './pages/ContactUs';
// import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
