import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './NavBar.js';
import CustomFooter from './components/CustomFooter.js';

// eslint-disable-next-line
import ComingSoon from './pages/ComingSoon.js';

import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Services from './pages/Services.js';
import ContactUs from './pages/ContactUs.js';
import Translate from './pages/Translate.js';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          {/* <Route path="/" index element={<ComingSoon />} /> */}
          <Route path="/" index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      {/* <header className="App-header"> */}
      <CustomFooter />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//         <Routes>
//           <Route path="/" index element={<ComingSoon />} />
//         </Routes>
//       {/* <header className="App-header"> */}
//     </div>
//   );
// }

export default App;
