// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Assignment 1 check!

import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="lab-container">
        <div className="styled-card">
          
          {/* Navigation Bar */}
          <nav className="nav-bar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Page Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} /> {/* Includes the useState Hook here */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;