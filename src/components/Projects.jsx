import companyBrandColors from "../data/CompanyBrandColors";

function Projects() {
  const { primary, accent } = companyBrandColors;

  const projects = [
    {
      title: "Modern Home Renovation",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Kitchen Remodeling",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    },
    {
      title: "Basement Finishing",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      title: "Deck Construction",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    },
  ];

  return (
<section
  className="relative py-10 overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at top right, rgba(234,179,8,.06), transparent 35%),
      linear-gradient(135deg, #1E3043 0%, #16202D 45%, #0F1722 100%)
    `,
  }}
>
  <div
    className="absolute inset-y-0 left-0 w-[80%] pointer-events-none"
    style={{
      background: `
        linear-gradient(
          90deg,
          rgba(255,255,255,0.08) 0%,
          rgba(255,255,255,0.055) 30%,
          rgba(255,255,255,0.03) 60%,
          rgba(255,255,255,0.01) 85%,
          transparent 100%
        )
      `,
    }}
  ></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl md:text-3xl font-bold text-white">
            Our Projects
          </h2>

          <div
            className="flex-1 h-[2px]"
            style={{ backgroundColor: accent }}
          ></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-46 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-base">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="border px-8 py-3 font-semibold transition cursor-pointer text-white hover:text-[#16202d]"
            style={{ borderColor: accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;