import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "../src/pages/About";
import Services from "../src/pages/Services";
import Project from "../src/pages/Project";
import Contact from "../src/pages/Contact";
import FreeQuote from "../src/pages/FreeQoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-quote" element={<FreeQuote />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
