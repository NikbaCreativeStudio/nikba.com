import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import Api State
import { ApiState } from './context/api/ApiState';

// import Pages
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { Service } from './pages/Service/Service';
import { Works } from './pages/Works/Works';
import { Work } from './pages/Work/Work';
import { Contact } from './pages/Contact/Contact';
import { Quote } from './pages/Quote/Quote';


// import Components
import { Background } from './components/Background/Background';
import { Footer } from "./components/Footer/Footer";


function App() {

  return (
    
    
        <ApiState>
          <Router>
          <div className="wrapper">
            <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:url" element={<Service />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:url" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/quote" element={<Quote />} />
              
            </Routes>
            <Footer />
            
            </div>
            <Background />
          </Router>
          
          
        </ApiState>

       
      
     
    
  );
}

export default App;

//<div className="wrapper"></div>