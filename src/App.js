import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home.js'
import AboutUs from './pages/AboutUs.js'
import Services from './pages/Services.js'
import ContactUs from './pages/ContactUs.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
      {/* <header className="App-header"> */}
    </div>
  );
}

export default App;
