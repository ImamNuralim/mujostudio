import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import About from './pages/About.jsx';

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Preloader />
      <Navbar />
      <div className="overflow-x-hidden">
      <div className="container mx-auto px-4">
        
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
      </div>
    </Router>
  </StrictMode>
);
