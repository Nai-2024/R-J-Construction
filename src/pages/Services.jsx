import {
  FaShieldAlt,
  FaAward,
  FaClock,
  FaDollarSign,
  FaHome,
  FaBriefcase,
  FaHammer,
  FaPaintRoller,
  FaFaucet,
  FaBorderAll,
  FaTree,
  FaArrowRight,
  FaComments,
  FaClipboardList,
  FaTools,
} from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";

import { Link } from "react-router-dom";
import TitleWithLine from "../components/TitleWithLine";

import HeroImg from "../assets/hero.png";
import LivingImg from "../assets/hero.png";
import KitchenImg from "../assets/hero.png";
import DrywallImg from "../assets/hero.png";
import PaintingImg from "../assets/hero.png";
import PlumbingImg from "../assets/hero.png";
import StairsImg from "../assets/hero.png";
import FenceImg from "../assets/hero.png";
import DeckImg from "../assets/hero.png";

function Services() {
  const services = [
    {
      icon: <FaHome />,
      image: LivingImg,
      title: "Full Home Renovation",
      text: "Complete home renovation services with expert planning, quality craftsmanship, and attention to every detail.",
    },
    {
      icon: <FaBriefcase />,
      image: KitchenImg,
      title: "Kitchen & Cabinets",
      text: "Kitchen remodeling, custom cabinet installation, layout improvements, and professional finishing.",
    },
    {
      icon: <FaHammer />,
      image: DrywallImg,
      title: "Drywall & Framing",
      text: "Professional framing, drywall installation, repairs, taping, mudding, and smooth finishes.",
    },
    {
      icon: <FaPaintRoller />,
      image: PaintingImg,
      title: "Painting & Flooring",
      text: "Interior painting, flooring installation, trim work, and finishing services that refresh your home.",
    },
    {
      icon: <FaFaucet />,
      image: PlumbingImg,
      title: "Plumbing",
      text: "Reliable plumbing services for kitchens, bathrooms, fixture installation, repairs, and water line upgrades.",
    },
    {
      icon: <FaStairs />,
      image: StairsImg,
      title: "Stairs Renovation",
      text: "Stair renovation, refinishing, repairs, and replacement services to improve safety and appearance.",
    },
    {
      icon: <FaBorderAll />,
      image: FenceImg,
      title: "Fence Installation",
      text: "Fence installation and repair services for privacy, security, curb appeal, and long-term durability.",
    },
    {
      icon: <FaTree />,
      image: DeckImg,
      title: "Deck Installation",
      text: "Custom deck design and installation using quality materials for beautiful outdoor living spaces.",
    },
  ];

  return (
    <main className="bg-[#F5F6F8] text-[#16202D]">
      {/* Hero */}
      <section
        className="
         relative min-h-[520px] bg-cover bg-no-repeat text-white flex items-center
         bg-[position:71%_center]
         sm:bg-[position:80%_center]
         md:bg-[position:72%_center]
         lg:bg-[position:82%_center]
       "
        style={{
          backgroundImage: `
linear-gradient(
  to bottom,
  rgba(7,21,40,0.15) 0%,
  rgba(7,21,40,0.15) 70%,
  rgba(7,21,40,0.82) 100%
),
linear-gradient(
  90deg,
  rgba(7,21,40,0.98) 0%,
  rgba(7,21,40,0.88) 35%,
  rgba(7,21,40,0.45) 65%,
  rgba(7,21,40,0.15) 100%
),
url(${HeroImg})
`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full pt-28 pb-16">
          <div className="max-w-2xl">
            <p className="text-[#FACC15] font-bold uppercase text-sm mb-5">
              Our Services
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Complete Renovation Solutions for Every Home
            </h1>

            <p className="text-lg leading-8 text-gray-100 mb-8 max-w-xl">
              From small upgrades to full home transformations, we deliver
              high-quality renovation and contracting services with expert
              craftsmanship and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/free-quote"
                className="bg-[#FACC15] text-[#071528] font-bold px-7 py-3 rounded-sm hover:bg-[#EAB308] transition inline-flex items-center gap-3 justify-center"
              >
                Get a Free Quote <FaArrowRight />
              </Link>

              <Link
                to="/projects"
                className="border border-white/70 bg-[#071528]/70 text-white px-7 py-3 rounded-sm font-semibold hover:bg-white hover:text-[#071528] transition text-center"
              >
                View Our Projects
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 border-t border-white/15 pt-8">
            <HeroFeature icon={<FaShieldAlt />} title="Licensed & Insured" />
            <HeroFeature icon={<FaAward />} title="Quality Craftsmanship" />
            <HeroFeature icon={<FaClock />} title="On-Time Delivery" />
            <HeroFeature icon={<FaDollarSign />} title="Transparent Pricing" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#FACC15] uppercase tracking-[0.25em] text-sm font-bold mb-5">
              Why Homeowners Choose Us
            </p>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#071528] mb-6 leading-tight">
              Trusted Renovation Experts Committed to Your Home
            </h2>

            <p className="text-[#334155] leading-7 mb-5">
              R&J Construction provides dependable renovation and general
              contracting services for homeowners who want quality work, clear
              communication, and long-lasting results.
            </p>

            <p className="text-[#334155] leading-7 mb-8">
              We manage every project with careful planning, skilled
              craftsmanship, and attention to detail from start to finish.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 font-semibold text-sm">
              <Check text="Licensed & Insured" />
              <Check text="Transparent Pricing" />
              <Check text="Quality Craftsmanship" />
              <Check text="On-Time Project Delivery" />
            </div>
          </div>

          <div className="bg-[#071528] text-white p-8 lg:p-10 border-t-4 border-[#FACC15] shadow-[0_16px_45px_rgba(15,23,42,0.20)]">
            <div className="text-[#FACC15] text-5xl mb-6">
              <FaHome />
            </div>

            <h3 className="text-2xl font-extrabold mb-5">
              Need help with your next project?
            </h3>

            <p className="text-[#CBD5E1] leading-7 mb-7">
              Tell us what you need, and our team will help you plan the right
              renovation solution for your home.
            </p>

            <Link
              to="/free-quote"
              className="bg-[#FACC15] text-[#071528] font-bold px-7 py-3 inline-flex items-center gap-3 hover:bg-[#EAB308] transition"
            >
              Request a Free Quote <FaArrowRight />
            </Link>

            <p className="text-sm text-[#94A3B8] mt-5">
              Free estimates • Fast response • No obligation
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[45%_55%] gap-8 items-start mb-10">
            <TitleWithLine title="Our Services" lineMaxWidth="max-w-[360px]" />

            <p className="text-[#334155] leading-7 max-w-xl lg:ml-auto">
              We offer a full range of renovation and general contracting
              services to improve, upgrade, and transform your home.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-14 bg-cover bg-center text-white"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(7,21,40,0.98), rgba(7,21,40,0.65)),
            url(${HeroImg})
          `,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Ready to Transform Your Home?
          </h2>

          <p className="text-lg text-gray-100 mb-7 max-w-xl">
            Let’s bring your vision to life with quality workmanship you can
            trust.
          </p>

          <Link
            to="/free-quote"
            className="bg-[#FACC15] text-[#071528] font-bold px-8 py-4 inline-flex items-center gap-3 hover:bg-[#EAB308] transition"
          >
            Request a Free Quote <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

function HeroFeature({ icon, title }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-[#FACC15] text-3xl shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-[#CBD5E1] leading-6">
          Professional service you can trust.
        </p>
      </div>
    </div>
  );
}

function Check({ text }) {
  return (
    <div className="flex items-center gap-3">
      <FaShieldAlt className="text-[#FACC15]" />
      <span>{text}</span>
    </div>
  );
}

function ServiceCard({ image, icon, title, text }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.10)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition-all duration-300 group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 relative">
        <div className="w-12 h-12 bg-[#071528] text-[#FACC15] rounded-lg flex items-center justify-center text-2xl mb-5 -mt-12 shadow-lg">
          {icon}
        </div>

        <h3 className="text-xl font-extrabold text-[#071528] mb-3">{title}</h3>

        <p className="text-[#334155] leading-7 mb-5">{text}</p>

        <Link
          to="/free-quote"
          className="text-[#EAB308] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Learn More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Services;
