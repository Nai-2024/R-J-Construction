import {
  FaHardHat,
  FaPaintRoller,
  FaHammer,
  FaHouseUser,
  FaFaucet,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import { MdKitchen, MdFence, MdStairs } from "react-icons/md";
import companyBrandColors from "../data/CompanyBrandColors";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  const { primary, accent, lightBackground, text } = companyBrandColors;

  const services = [
    {
      icon: <FaHouseUser />,

      title: "Full Home Renovation",
      desc: "Complete home renovation services with expert planning, quality craftsmanship, project management, and attention to every detail from start to finish.",
    },
    {
      icon: <MdKitchen />,
      title: "Kitchen & Cabinets",
      desc: "Kitchen remodeling, custom cabinet installation, layout improvements, and professional finishing to create beautiful and functional spaces.",
    },
    {
      icon: <FaHardHat />,
      title: "Drywall & Framing",
      desc: "Professional framing, drywall installation, repairs, taping, mudding, and finishing for smooth, durable walls and ceilings throughout your home",
    },
    {
      icon: <FaPaintRoller />,
      title: "Painting & Flooring",
      desc: "Interior painting, flooring installation, trim work, and finishing services that refresh your home with lasting beauty and durability.",
    },
    {
      icon: <FaFaucet />,
      title: "Plumbing",
      desc: "Reliable plumbing services for kitchens, bathrooms, renovations, fixture installation, repairs, and water line upgrades completed with professional workmanship.",
    },

    {
      icon: <MdStairs />,
      title: "Stairs Renovation",
      desc: "Stair renovation, refinishing, repairs, and replacement services designed to improve safety, appearance, and long-lasting performance throughout your home.",
    },

    {
      icon: <MdFence />,
      title: "Fence Installation",
      desc: "Fence installation and repair services that improve privacy, security, curb appeal, and long-term durability for residential properties and homes with expert craftsmanship",
    },
    {
      icon: <FaHammer />,
      title: "Deck Installation",
      desc: "Custom deck design and installation using quality materials to create durable, comfortable, and attractive outdoor living spaces for your family.",
    },
  ];

  return (
    <main style={{ backgroundColor: lightBackground }}>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-7 mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold whitespace-nowrap"
              style={{ color: primary }}
            >
              Our Services
            </h1>
            <div
              className="flex-1 h-[3px]"
              style={{ backgroundColor: accent }}
            ></div>
          </div>
          {/* Section Intro */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-4 mb-5">
              <div
                className="w-12 h-[3px] rounded-full"
                style={{ backgroundColor: accent }}
              />

              <span
                className="uppercase text-sm font-bold tracking-[0.20em]"
                style={{ color: accent }}
              >
                Why Homeowners Choose Us
              </span>

              <div
                className="w-61 h-[3px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(234,179,8,0.5), transparent)",
                }}
              />
            </div>

            <h2
              className="text-3xl md:text-3xl font-bold leading-tight max-w-3xl"
              style={{ color: primary }}
            >
              Trusted Renovation Experts for Every Home
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">
            {/* Left Content */}
            <div>
              <div className="max-w-2xl">
                <p
                  className="text-lg leading-8 mb-5 text-justify"
                  style={{ color: text }}
                >
                  R&J Construction provides dependable renovation and general
                  contracting services for homeowners who want quality work,
                  clear communication, and long-lasting results.
                </p>

                <p
                  className="text-lg leading-8 text-justify"
                  style={{ color: text }}
                >
                  From small upgrades to complete home renovations, we handle
                  every project with careful planning, skilled workmanship, and
                  attention to detail from start to finish.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mt-10">
                {[
                  "Licensed & Insured",
                  "Transparent Pricing",
                  "Quality Craftsmanship",
                  "On-Time Project Delivery",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle
                      className="text-lg"
                      style={{ color: accent }}
                    />
                    <span style={{ color: primary }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA */}
            <div
              className="relative py-10 px-10 shadow-[0_18px_45px_rgba(22,32,45,0.18)] overflow-hidden"
              style={{ backgroundColor: primary }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: accent }}
              />

              <h3 className="text-2xl font-bold text-white mb-5">
                Need help with your next project?
              </h3>

              <p className="text-white/80 leading-8 mb-8 text-lg text-justify">
                Tell us what you need, and our team will help you plan the right
                renovation solution for your home.
              </p>

              <button
                className="px-10 py-4 font-bold shadow-md hover:shadow-xl transition cursor-pointer"
                style={{ backgroundColor: accent, color: primary }}
              >
                Request a Free Quote
              </button>

              <p className="text-white/60 text-sm mt-5 text-justify">
                Free estimates • Fast response • No obligation
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 cursor-pointer">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                group
                bg-white
                rounded-xl
                border
                border-gray-200
                hover:border-[#16202D]/60
                p-7
                min-h-[300px]
                flex
                flex-col
                shadow-[0_8px_24px_rgba(22,32,45,0.08)]
                hover:shadow-[0_20px_50px_rgba(22,32,45,0.18)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: primary,
                    color: accent,
                  }}
                >
                  <div className="text-2xl">{service.icon}</div>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: primary }}
                >
                  {service.title}
                </h3>

                <p className="leading-7 text-base mb-6" style={{ color: text }}>
                  {service.desc}
                </p>

                <p className="mt-auto inline-flex items-center gap-4 text-sm font-semibold">
                  <span style={{ color: primary }}>Learn More</span>

                  <span
                    className="text-md transition-all duration-300 group-hover:translate-x-1.5"
                    style={{ color: accent }}
                  >
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
