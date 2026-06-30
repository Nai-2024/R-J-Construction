import companyBrandColors from "../data/CompanyBrandColors";
import testimonialImg from "../assets/testimonialImg2.png";
import testimonialBg from "../assets/testimonialBg.png";
import { Link } from "react-router-dom";

function Testimonials() {
  const { primary, accent } = companyBrandColors;

  const testimonials = [
    {
      name: "Sarah L.",
      project: "Kitchen Renovation",
      review: "R&J Construction exceeded our expectations. Fantastic work!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "James R.",
      project: "Basement Finishing",
      review: "Highly professional and always completed work on schedule.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Linda M.",
      project: "Home Renovation",
      review: "Top-notch quality and great communication from start to finish.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section
      className="relative py-12 overflow-hidden"
      style={{ backgroundColor: primary }}
    >
      {/* Main Dark Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${testimonialBg})`,
        }}
      ></div>
      {/* Right Side Image */}
      <div
        className="absolute inset-y-0 right-0 w-[55%] bg-cover bg-right hidden lg:block"
        style={{
          backgroundImage: `url(${testimonialImg})`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(22,32,45,1) 12%, rgba(22,32,45,1) 45%, rgba(22,32,45,.96) 51%, rgba(22,32,45,.82) 57%, rgba(22,32,45,.58) 65%, rgba(22,32,45,.32) 73%, rgba(22,32,45,.12) 79%, rgba(22,32,45,0) 87%)",
        }}
      ></div>

      {/* Mobile Dark Overlay */}
      <div className="absolute inset-0 bg-[#16202d] lg:hidden"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 mb-8">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold text-white whitespace-nowrap">
              Client Testimonials
            </h2>

            <div
              className="flex-1 h-[2px]"
              style={{ backgroundColor: accent }}
            ></div>
          </div>

          <div className="hidden lg:block"></div>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 items-center">
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 p-5 shadow-md backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2"
                    style={{ borderColor: accent }}
                  />

                  <div>
                    <h3 className="text-white font-bold text-sm">
                      {item.name}
                    </h3>
                    <p className="text-xs" style={{ color: accent }}>
                      {item.project}
                    </p>
                  </div>
                </div>

                <div
                  className="w-14 h-[3px] mb-4"
                  style={{ backgroundColor: accent }}
                ></div>

                <p className="text-gray-200 text-sm leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block"></div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/free-quote"
            className="
    inline-flex
    items-center
    justify-center
    px-8 py-3
    font-bold
    rounded-sm
    cursor-pointer
    transition-all
    duration-300
    ease-out
    hover:-translate-y-1
    hover:shadow-2xl
    active:translate-y-0
  "
            style={{
              backgroundColor: accent,
              color: primary,
              boxShadow: "0 4px 18px rgba(234,179,8,0.20)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FACC15";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(234,179,8,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = accent;
              e.currentTarget.style.boxShadow =
                "0 4px 18px rgba(234,179,8,0.20)";
            }}
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
