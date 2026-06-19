import { FaCheckCircle, FaTools, FaHome, FaUsers } from "react-icons/fa";
import companyBrandColors from "../data/CompanyBrandColors";

function About() {
  const { primary, accent, lightBackground, text } = companyBrandColors;

  return (
    <main style={{ backgroundColor: lightBackground }}>
      {/* Hero */}
      <section className="pt-30 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-7 mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold whitespace-nowrap"
              style={{ color: primary }}
            >
              About R&J Construction
            </h1>
            <div
              className="flex-1 h-[3px]"
              style={{ backgroundColor: accent }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Construction planning"
                className="w-full h-[460px] object-cover shadow-2xl"
              />

              <div
                className="absolute -bottom-8 right-8 px-8 py-6 shadow-xl"
                style={{ backgroundColor: primary }}
              >
                <h3 className="text-5xl font-bold" style={{ color: accent }}>
                  10+
                </h3>
                <p className="text-white font-semibold">Years Experience</p>
              </div>
            </div>

            <div>
              <p className="font-bold mb-3" style={{ color: accent }}>
                WHO WE ARE
              </p>

              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ color: primary }}
              >
                Renovation Services Built on Trust, Quality, and Care
              </h2>

              <p className="text-lg leading-8 mb-5" style={{ color: text }}>
                R&J Construction is a professional renovation and general
                contracting company serving homeowners with reliable
                workmanship, honest communication, and clean project execution.
              </p>

              <p className="text-lg leading-8 mb-8" style={{ color: text }}>
                We handle full renovations, kitchens, basements, drywall,
                flooring, painting, decks, fences, and more — always focusing on
                quality, safety, and long-lasting results.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reliable project planning",
                  "Quality workmanship",
                  "Clear communication",
                  "Clean and safe job sites",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle style={{ color: accent }} />
                    <span className="font-semibold" style={{ color: primary }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Info Band */}
      <section className="py-16" style={{ backgroundColor: primary }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            { icon: <FaHome />, title: "Home Renovation" },
            { icon: <FaTools />, title: "General Contracting" },
            { icon: <FaUsers />, title: "Skilled Team" },
            { icon: <FaCheckCircle />, title: "Trusted Service" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition"
            >
              <div
                className="text-3xl mb-4 flex justify-center"
                style={{ color: accent }}
              >
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Promise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Our Mission",
              text: "Our mission is to transform homes through exceptional renovation and construction services that combine quality craftsmanship, innovative solutions, and dependable customer service. We strive to create beautiful, functional spaces while building lasting relationships based on trust, integrity, and satisfaction.",
            },
            {
              title: "Our Promise",
              text: "We promise to treat every project with the same level of care and dedication as if it were our own home. From the initial consultation to the final walkthrough, we are committed to honest communication, transparent pricing, quality materials, professional workmanship, and delivering projects on time and within budget.",
            },
            {
              title: "Our Approach",
              text: "Every successful renovation begins with understanding our clients' vision. We carefully plan each stage of the project, maintain open communication throughout the process, prioritize safety and cleanliness, and focus on every detail to ensure a smooth experience and results that exceed expectations.",
            },
            {
              title: "Why Clients Choose Us",
              text: "Homeowners choose R&J Construction because of our reliability, skilled craftsmanship, attention to detail, and commitment to customer satisfaction. We take pride in delivering high-quality results that enhance both the beauty and value of every home.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
            >
              <div
                className="w-12 h-1 mb-5"
                style={{ backgroundColor: accent }}
              ></div>
              <h3 className="text-xl font-bold mb-4" style={{ color: primary }}>
                {card.title}
              </h3>
              <p className="leading-7" style={{ color: text }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
