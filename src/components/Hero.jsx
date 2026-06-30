import HeroImg from "../assets/hero.png";
import companyBrandColors from "../data/CompanyBrandColors";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="
  relative min-h-screen bg-cover bg-no-repeat text-white
  bg-[position:71%_center]
  sm:bg-[position:80%_center]
  md:bg-[position:72%_center]
  lg:bg-[position:82%_center]
"
      style={{
        backgroundImage: `
      linear-gradient(
        90deg,
        rgba(7,21,40,0.96) 0%,
        rgba(7,21,40,0.45) 42%,
        rgba(7,21,40,0.15) 65%,
        rgba(7,21,40,0.05) 100%
      ),
      url(${HeroImg})
    `,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-36 sm:pt-40 md:pt-44 lg:pt-44 pb-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight [text-shadow:0_4px_20px_rgba(0,0,0,0.6)]">
            Complete Renovation Solutions for Your Home
          </h2>

          <p className="mt-6 max-w-xl text-xl font-medium text-white leading-relaxed [text-shadow:0_4px_20px_rgba(0,0,0,1)]">
            Reliable renovation and general contracting services including
            framing, drywall, painting, flooring, kitchen remodeling, decks,
            fences, and more.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/free-quote"
              className="inline-flex justify-center bg-[#FACC15] text-gray-900 px-7 py-3 rounded-sm font-bold hover:bg-[#FCD34D] cursor-pointer shadow-lg"
            >
              Get a Free Quote
            </Link>

            <a className="border border-white/70 bg-[#071528]/70 text-white px-6 py-3 rounded-sm font-semibold hover:bg-white hover:text-gray-900 cursor-pointer">
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      <section className="mt-10 bg-[#16202d]/90 py-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-6">
            <h3 className="text-2xl font-bold text-white whitespace-nowrap">
              Our Services
            </h3>

            <div
              className="flex-1 h-[2px]"
              style={{ backgroundColor: companyBrandColors.accent }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Full Renovation",
              "Kitchen & Cabinets",
              "Drywall & Framing",
              "Painting & Flooring",
              "Plumbing",
              "Deck Installation",
              "Fence Installation",
              "Stairs Renovation",
            ].map((service) => (
              <div
                key={service}
                className="bg-[#253247] border border-[#41506a] rounded-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2f3d55]"
              >
                <h4 className="font-bold text-white">{service}</h4>
                <p className="text-sm text-[#B7C0CD] mt-2 leading-relaxed">
                  Professional and reliable workmanship.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
