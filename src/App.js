import "./App.css";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Hello from "./pages/Hello";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#010C15] min-h-screen">
      <div className="items-center">
        <div className="container mx-auto h-full py-[50px] max-lg:py-[15px] px-[15px]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {!isMenuOpen && (
            <Routes>
              <Route exact path="/" element={<Hello />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
          <Footer />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
