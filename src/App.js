import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// import Pages
import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
import {Services} from './pages/Services/Services';
import {Portfolio} from './pages/Portfolio/Portfolio';
import {Contact} from './pages/Contact/Contact';

// import Components
import {Background} from './components/Background/Background';
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>

      <Footer />
    </div>
    <Background />
    </>
  );
}

export default App;
