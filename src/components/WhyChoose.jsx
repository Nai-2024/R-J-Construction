import companyBrandColors from "../data/CompanyBrandColors";
import {
  FaHardHat,
  FaShieldAlt,
  FaUsers,
  FaHammer,
  FaClock,
} from "react-icons/fa";

function WhyChoose() {
  const reasons = [
    { icon: <FaHardHat />, title: "10+ Years of Experience" },
    { icon: <FaShieldAlt />, title: "Licensed & Insured" },
    { icon: <FaUsers />, title: "Skilled Team of Experts" },
    { icon: <FaHammer />, title: "High-Quality Materials" },
    { icon: <FaClock />, title: "On-Time Delivery" },
  ];

  return (
    <section
      className="py-10"
      style={{ backgroundColor: companyBrandColors.lightBackground }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8 gap-7">
          <h2
            className="text-3xl font-bold ml-4"
            style={{ color: companyBrandColors.primary }}
          >
            Why Choose R&J Construction
          </h2>

          <div
            className="flex-1 h-[3px]"
            style={{ backgroundColor: companyBrandColors.accent }}
          ></div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Construction worker"
              className="w-full h-[290px] object-cover shadow-lg"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-2 cursor-pointer">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-sm px-6 py-6 flex items-center gap-5 hover:shadow-xl transition"
              >
                <div
                  className="text-3xl"
                  style={{ color: companyBrandColors.accent }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-bold text-lg"
                  style={{ color: companyBrandColors.primary }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

/*
Main navy: #16202d
Icon gold: #d99a00
Background: #f4f5f7
Card: white
*/
