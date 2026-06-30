import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#16202D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          R&J <span className="text-yellow-400">Construction</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link
          to="/free-quote"
          className="hidden lg:inline-block bg-yellow-400 text-gray-900 px-5 py-2 rounded font-semibold"
        >
          Free Estimate
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300"
        >
          {menuOpen ? (
            <IoCloseOutline className="text-[40px]" />
          ) : (
            <HiOutlineBars3 className="text-[40px]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
   {menuOpen && (
  <div className="lg:hidden absolute top-full left-0 w-full bg-[#16202D] border-t border-white/10 px-6 py-4 shadow-lg">
    <nav className="flex flex-col text-white font-medium">
      <Link onClick={closeMenu} to="/" className="py-3 border-b border-white/10 hover:text-yellow-400 transition">
        Home
      </Link>

      <Link onClick={closeMenu} to="/about" className="py-3 border-b border-white/10 hover:text-yellow-400 transition">
        About
      </Link>

      <Link onClick={closeMenu} to="/services" className="py-3 border-b border-white/10 hover:text-yellow-400 transition">
        Services
      </Link>

      <Link onClick={closeMenu} to="/projects" className="py-3 border-b border-white/10 hover:text-yellow-400 transition">
        Projects
      </Link>

      <Link onClick={closeMenu} to="/contact" className="py-3 hover:text-yellow-400 transition">
        Contact
      </Link>

      <Link
        onClick={closeMenu}
        to="/free-quote"
        className="bg-yellow-400 text-gray-900 px-5 py-3 rounded font-semibold text-center mt-4 hover:bg-yellow-300 transition"
      >
        Free Estimate
      </Link>
    </nav>
  </div>
)}
    </header>
  );
}

export default Header;
