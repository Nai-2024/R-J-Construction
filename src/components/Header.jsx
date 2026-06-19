import { Link } from "react-router-dom";

function Header() {
  return (
   <header className="fixed top-0 left-0 w-full z-50 bg-[#16202D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          R&J <span className="text-yellow-400">Construction</span>
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-yellow-400 text-gray-900 px-5 py-2 rounded font-semibold"
        >
          Free Estimate
        </a>
      </div>
    </header>
  );
}

export default Header;
