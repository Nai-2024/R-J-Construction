
import companyBrandColors from "../data/CompanyBrandColors";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  const { primary, accent, lightBackground, text } = companyBrandColors;

  const projects = [
    {
      title: "Modern Home Renovation",
      category: "Full Renovation",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      desc: "Complete interior renovation with modern finishes, improved layout, and high-quality craftsmanship.",
    },
    {
      title: "Kitchen Remodeling",
      category: "Kitchen & Cabinets",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
      desc: "Custom kitchen upgrade with cabinet installation, better storage, and clean professional finishing.",
    },
    {
      title: "Basement Finishing",
      category: "Interior Renovation",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      desc: "Functional basement transformation designed for comfort, durability, and long-term home value.",
    },
    {
      title: "Deck Construction",
      category: "Outdoor Living",
      image: "https://images.unsplash.com/photo-1598228723793-52759bba239c",
      desc: "Durable outdoor deck installation built for family comfort, safety, and lasting curb appeal.",
    },
    {
      title: "Flooring & Painting",
      category: "Interior Finishing",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      desc: "Professional flooring and painting work that refreshes the home with a clean modern look.",
    },
    {
      title: "Fence Installation",
      category: "Exterior Work",
      image: "https://images.unsplash.com/photo-1592595896616-c37162298647",
      desc: "Residential fence installation focused on privacy, security, durability, and improved exterior design.",
    },
  ];

  return (
    <main style={{ backgroundColor: lightBackground }}>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Heading */}
          <div className="flex items-center gap-7 mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold whitespace-nowrap"
              style={{ color: primary }}
            >
              Our Projects
            </h1>

            <div
              className="flex-1 h-[3px]"
              style={{ backgroundColor: accent }}
            ></div>
          </div>

          {/* Intro */}
          <div className="max-w-4xl mb-14">
            <div className="inline-flex items-center gap-4 mb-5">
              <div
                className="w-12 h-[3px] rounded-full"
                style={{ backgroundColor: accent }}
              />

              <span
                className="uppercase text-sm font-bold tracking-[0.20em]"
                style={{ color: accent }}
              >
                Recent Work
              </span>

              <div
                className="w-52 h-[3px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(234,179,8,0.5), transparent)",
                }}
              />
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              style={{ color: primary }}
            >
              Quality Renovation Projects Built with Care
            </h2>

            <p className="text-lg leading-8 max-w-3xl" style={{ color: text }}>
              Explore a selection of renovation, remodeling, and construction
              projects completed with careful planning, quality materials, and
              attention to detail.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-[0_8px_24px_rgba(22,32,45,0.08)] hover:shadow-[0_20px_50px_rgba(22,32,45,0.18)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#16202D]/80 via-[#16202D]/20 to-transparent"></div>

                  <span
                    className="absolute top-5 left-5 px-4 py-2 text-sm font-bold rounded"
                    style={{
                      backgroundColor: accent,
                      color: primary,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-7">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: primary }}
                  >
                    {project.title}
                  </h3>

                  <p className="leading-7 mb-6" style={{ color: text }}>
                    {project.desc}
                  </p>

                  <p className="inline-flex items-center gap-3 text-sm font-semibold">
                    <span style={{ color: primary }}>View Project</span>
                    <span
                      className="transition-all duration-300 group-hover:translate-x-1.5"
                      style={{ color: accent }}
                    >
                      <FaArrowRight />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-20 p-10 text-center shadow-[0_18px_45px_rgba(22,32,45,0.18)]"
            style={{ backgroundColor: primary }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Renovation Project?
            </h3>

            <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-7">
              Contact R&J Construction today and let our team help you plan a
              renovation solution that fits your home and goals.
            </p>

            <button
              className="px-10 py-4 font-bold cursor-pointer shadow-md hover:shadow-xl transition"
              style={{ backgroundColor: accent, color: primary }}
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;