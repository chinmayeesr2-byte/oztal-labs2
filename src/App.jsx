import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />         {/* 👈 Default route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;













