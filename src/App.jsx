import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import "./Style/global.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default route should be About */}
        <Route path="/" element={<About />} />

        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;













