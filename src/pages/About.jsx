// src/pages/About.jsx
import {
  FaShieldAlt,
  FaUsers,
  FaHammer,
  FaClock,
  FaHardHat,
  FaCalendarAlt,
  FaComments,
  FaClipboardList,
  FaTools,
  FaHome,
  FaArrowRight,
  FaCheckCircle,
  FaAppleAlt,
  FaHandshake,
} from "react-icons/fa";
import TitleWithLine from "../components/TitleWithLine";

import AboutHero from "../assets/hero.png";
import KitchenImg from "../assets/hero.png"; // KitchenImg
import CtaImg from "../assets/hero.png"; // cta-house.png

function About() {
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
        90deg,
        rgba(7,21,40,0.97) 0%,
        rgba(7,21,40,0.88) 34%,
        rgba(7,21,40,0.45) 62%,
        rgba(7,21,40,0.20) 100%
      ),
      url(${AboutHero})
    `,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full pt-28 pb-16">
          <div className="max-w-2xl">
            <p className="text-[#FACC15] font-bold text-sm uppercase mb-5">
              About Us
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              About R&J <br /> Construction
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-100 mb-8">
              We are a trusted renovation and general contracting company
              committed to delivering exceptional craftsmanship, honest service,
              and results that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <a
                href="/free-quote"
                className="bg-[#FACC15] text-[#071528] font-bold px-7 py-3 rounded-sm hover:bg-[#EAB308] transition"
              >
                Get a Free Quote
              </a>

              <a
                href="/projects"
                className="border border-white/70 bg-[#071528]/70 text-white px-6 py-3 rounded-sm font-semibold hover:bg-white hover:text-[#071528] transition"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[48%_48%] gap-8 lg:gap-10 justify-between items-center">
          <div>
            <img
              src={KitchenImg}
              alt="Modern kitchen renovation"
              className="w-full h-[450px] rounded-xl object-cover shadow-lg"
            />
          </div>

          <div>
            <TitleWithLine
              title="WHO WE ARE"
              titleColor="text-[#FACC15]"
              lineMaxWidth="max-w-[1000px]"
            />

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#071528] mb-6 leading-tight">
              Building Better Spaces, Building Better Relationships
            </h2>

            <p className="text-[#334155] leading-7 mb-5 text-justify">
              R&J Construction is a professional renovation and general
              contracting company serving homeowners across Toronto and the
              Greater Toronto Area. With more than 10 years of experience, we
              have built a reputation for quality workmanship, reliability, and
              outstanding customer care.
            </p>

            <p className="text-[#334155] leading-7 mb-7 text-justify">
              From full home renovations to kitchen remodeling, basements,
              flooring, drywall, painting, decks, fences, and more — we handle
              projects of all sizes with the same level of dedication and
              attention to detail.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 font-semibold text-sm">
              <Check text="Reliable Project Planning" />
              <Check text="Quality Workmanship" />
              <Check text="Clear Communication" />
              <Check text="Clean and Safe Job Sites" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-[#071528] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full mb-4">
          <TitleWithLine
            title="Why Choose R&J Construction"
            titleColor="text-white"
            lineMaxWidth="max-w-[720px]"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Feature icon={<FaShieldAlt />} title="10+ Years Experience" />
            <Feature icon={<FaShieldAlt />} title="Licensed & Insured" />
            <Feature icon={<FaUsers />} title="Skilled Team" />
            <Feature icon={<FaHammer />} title="High-Quality Materials" />
            <Feature icon={<FaClock />} title="On-Time Delivery" />
          </div>
        </div>
      </section>

      {/* Values + Track Record */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[40%_60%] gap-8 lg:gap-10">
          {/* Our Values */}
          <div className="lg:pr-8">
            <TitleWithLine title="Our Values" lineMaxWidth="max-w-[1000px]" />

            <div className="space-y-5">
              <Value
                title="Integrity"
                text="We believe in honesty, transparency, and doing the right thing."
              />
              <Value
                title="Quality"
                text="We are committed to delivering top-quality workmanship on every project."
              />
              <Value
                title="Respect"
                text="We treat our clients, team, and partners with respect and professionalism."
              />
              <Value
                title="Customer Focused"
                text="Your satisfaction is our priority from start to finish."
              />
            </div>
          </div>

          {/* Track Record */}
          <div className="lg:border-l lg:border-gray-300 lg:pl-8 lg:pr-6">
            <TitleWithLine
              title="Our Track Record"
              lineMaxWidth="max-w-[1000px] mr-3"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch max-w-[98%]">
              <Stat
                icon={<FaCalendarAlt />}
                number="10+"
                text="Years Experience"
              />
              <Stat
                icon={<FaHardHat />}
                number="500+"
                text="Projects Completed"
              />
              <Stat icon={<FaUsers />} number="98%" text="Happy Clients" />
              <Stat
                icon={<FaShieldAlt />}
                number="100%"
                text="Licensed & Insured"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#071528] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <TitleWithLine
            title="Our Process"
            titleColor="text-white"
            lineMaxWidth="max-w-[1000px]"
          />

          <div className="grid sm:grid-cols-2 gap-10 lg:flex lg:justify-between lg:gap-0">
            <Process
              number="1"
              icon={<FaComments />}
              title="Consultation"
              text="We listen to your ideas, understand your vision, and discuss your project goals in detail."
            />

            <Process
              number="2"
              icon={<FaClipboardList />}
              title="Planning & Estimate"
              text="We create a detailed plan, project timeline, and transparent cost estimate."
            />

            <Process
              number="3"
              icon={<FaTools />}
              title="Construction"
              text="Our skilled team delivers quality workmanship with precision and attention to detail."
            />

            <Process
              number="4"
              icon={<FaHome />}
              title="Final Walkthrough"
              text="We review every detail with you to ensure your complete satisfaction before completion."
              isLast
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 bg-cover bg-center text-white"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(7,21,40,0.98), rgba(7,21,40,0.65)),
            url(${CtaImg})
          `,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 mb-3">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg mb-8">
            Let’s bring your vision to life with quality workmanship you can
            trust.
          </p>

          <a
            href="/free-quote"
            className="inline-flex items-center gap-3 bg-[#FACC15] text-[#071528] font-bold px-8 py-4 rounded hover:bg-[#EAB308] transition"
          >
            Request a Free Estimate <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}

function Check({ text }) {
  return (
    <div className="flex items-center  gap-3">
      <FaCheckCircle className="text-[#FACC15]" />
      <span>{text}</span>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-[#122033] p-7 rounded shadow text-center">
      <div className="text-[#FACC15] text-4xl flex justify-center mb-5">
        {icon}
      </div>
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="text-sm text-[#CBD5E1] leading-6">
        Professional service with attention to detail and lasting results.
      </p>
    </div>
  );
}

function Value({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="w-14 h-14 bg-white rounded-lg shadow-[0_12px_30px_rgba(15,23,42,0.18)] flex items-center justify-center text-[#FACC15] text-2xl shrink-0">
        <FaHandshake />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-[#334155]">{text}</p>
      </div>
    </div>
  );
}

function Stat({ icon, number, text }) {
  return (
    <div className="bg-white p-6 min-h-[300px] text-center shadow-[0_12px_35px_rgba(15,23,42,0.15)] flex flex-col items-center justify-center">
      {/* Icon */}
      <div className="text-[#FACC15] text-4xl flex justify-center mb-8">
        {icon}
      </div>

      {/* Number */}
      <h3 className="text-4xl font-extrabold text-[#071528] mb-8">{number}</h3>

      {/* Text */}
      <p className="font-semibold text-[#16202D] leading-6">{text}</p>
    </div>
  );
}

function Process({ number, icon, title, text, isLast = false }) {
  return (
    <div className="relative lg:w-[250px]">
      <div className="relative flex items-center gap-5 mb-5">
        <span className="relative z-10 w-14 h-14 rounded-full bg-[#FACC15] text-[#071528] font-extrabold flex items-center justify-center text-2xl shadow-md shrink-0">
          {number}
        </span>

        <div className="relative z-10 text-5xl text-white">{icon}</div>

        {!isLast && (
          <div className="hidden lg:block absolute left-[120px] w-[230px] top-1/2 h-px border-t border-dashed border-white/25"></div>
        )}
      </div>

      <h3 className="text-xl font-extrabold mb-4 text-white leading-tight">
        {title}
      </h3>

      <p className="text-[#CBD5E1] leading-7 text-[15px]">{text}</p>
    </div>
  );
}
export default About;
