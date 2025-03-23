import React from "react";
 import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
 import Home from "./pages/Home/Home"
 import About from "./pages/Home/About";
 import Services from "./pages/Home/Services";
 import Blog from "./pages/Home/Blog";
 import  Contact from './pages/Home/Contact'
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} /> 
            
      </Routes>
    </Router>
     
  );
}


export default App;