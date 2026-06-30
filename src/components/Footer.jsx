import companyBrandColors from "../data/CompanyBrandColors";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const { primary, accent } = companyBrandColors;

  return (
    <footer
      className="relative pt-14 pb-6"
      style={{
        background: `linear-gradient(135deg, ${primary} 0%, #08111A 100%)`,
      }}
    >
      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: `linear-gradient(
        to right,
        transparent,
        ${accent},
        transparent
      )`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
          <div>
            <h2 className="text-2xl font-bold text-white">
              R&J <span style={{ color: accent }}>Construction</span>
            </h2>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Professional renovation and construction services with quality,
              reliability, and attention to detail.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#EAB308] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#EAB308] transition">
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#EAB308] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#EAB308] transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#EAB308] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#FACC15] transition">
                  Home Renovation
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-[#FACC15] transition">
                  Kitchen Remodeling
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-[#FACC15] transition">
                  Basement Finishing
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-[#FACC15] transition">
                  Deck Construction
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-[#FACC15] transition">
                  Flooring & Painting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <p className="flex items-center gap-3">
                <FaPhoneAlt style={{ color: accent }} />
                +1 (416) 000-0000
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope style={{ color: accent }} />
                info@rjconstruction.ca
              </p>

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt style={{ color: accent }} className="mt-1" />
                Toronto, Ontario, Canada
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#EAB308] hover:text-[#16202D] hover:border-[#EAB308] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} R&J Construction. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
