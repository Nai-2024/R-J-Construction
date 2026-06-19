import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import companyBrandColors from "../data/CompanyBrandColors";

function Contact() {
  const { primary, accent, lightBackground, text } = companyBrandColors;

  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+1 (416) 000-0000",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "info@rjconstruction.ca",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Service Area",
      value: "Toronto, Ontario, Canada",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      value: "Monday – Saturday: 8:00 AM – 6:00 PM",
    },
  ];

  return (
    <main style={{ backgroundColor: lightBackground }}>
      <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-5 md:gap-7 mb-10 md:mb-12">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap"
              style={{ color: primary }}
            >
              Contact Us
            </h1>

            <div
              className="flex-1 h-[3px]"
              style={{ backgroundColor: accent }}
            ></div>
          </div>

         <div className="grid xl:grid-cols-[0.9fr_1fr] gap-10 xl:gap-16 items-start">
            {/* Left Side */}
            <div>
              <div className="inline-flex items-center gap-4 mb-4 md:mb-5">
                <div
                  className="w-10 md:w-12 h-[3px] rounded-full"
                  style={{ backgroundColor: accent }}
                />

                <span
                  className="uppercase text-xs md:text-sm font-bold tracking-[0.20em]"
                  style={{ color: accent }}
                >
                  Get In Touch
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 md:mb-6 max-w-xl"
                style={{ color: primary }}
              >
                Let’s Talk About Your Next Renovation Project
              </h2>

              <p
                className="text-base md:text-lg leading-7 md:leading-8 mb-7 md:mb-8 max-w-xl"
                style={{ color: text }}
              >
                Have a renovation, repair, or construction project in mind?
                Contact R&J Construction today and our team will help you plan
                the right solution for your home.
              </p>

              <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-4 max-w-none xl:max-w-xl">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 md:p-5 rounded-xl border border-gray-200 shadow-[0_8px_24px_rgba(22,32,45,0.06)] min-h-[105px]"
                  >
                    <div
                      className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: primary, color: accent }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-bold mb-1" style={{ color: primary }}>
                        {item.title}
                      </h3>
                      <p
                        className="text-sm md:text-base leading-6"
                        style={{ color: text }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
          <div className="mt-8 xl:mt-16 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(22,32,45,0.14)]">
              <h3
                className="text-xl md:text-2xl font-bold mb-6"
                style={{ color: primary }}
              >
                Request a Free Estimate
              </h3>

              <form className="space-y-4 md:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#16202D]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#16202D]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#16202D]"
                />

                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#16202D]">
                  <option>Project Type</option>
                  <option>Full Home Renovation</option>
                  <option>Kitchen & Cabinets</option>
                  <option>Drywall & Framing</option>
                  <option>Painting & Flooring</option>
                  <option>Plumbing</option>
                  <option>Deck Installation</option>
                  <option>Fence Installation</option>
                  <option>Stairs Renovation</option>
                </select>

                <textarea
                  rows="6"
                  placeholder="Tell us about your project"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#16202D] resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 font-bold rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
                  style={{ backgroundColor: accent, color: primary }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;