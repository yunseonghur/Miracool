import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './NavBar.js';

import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Services from './pages/Services.js';
import ContactUs from './pages/ContactUs.js';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      {/* <header className="App-header"> */}
    </div>
  );
}

export default App;
