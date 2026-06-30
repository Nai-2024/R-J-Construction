import { useState } from "react";
import { validateFreeQuoteForm, validateField } from "../utils/formValidation";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaHandshake,
  FaPaperPlane,
  FaCheckCircle,
  FaUpload,
} from "react-icons/fa";

import HeroImg from "../assets/hero.png";

function FreeQuote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    estimatedBudget: "",
    serviceType: "",
    preferredStartDate: "",
    projectDetails: "",
    contactMethod: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateFreeQuoteForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        propertyType: "",
        estimatedBudget: "",
        serviceType: "",
        preferredStartDate: "",
        projectDetails: "",
        contactMethod: "",
      });

      setErrors({});
      setSuccessMessage(
        "Thank you! Your request has been submitted successfully.",
      );
    }
  };

  return (
    <main className="bg-[#F5F6F8]">
      <section
        className="relative pt-36 pb-20 bg-cover bg-center text-white"
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
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Get a Free Quote
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
            Tell us about your project and we’ll get back to you with a
            personalized estimate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)] gap-8 xl:gap-12 items-start lg:items-stretch">
          {/* Left Side */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-7 md:p-8 shadow-[0_15px_40px_rgba(22,32,45,0.08)]">
              <h2 className="text-2xl font-bold text-[#16202D] mb-4">
                Let’s Build Something Great
              </h2>

              <div className="w-14 h-[3px] bg-[#FACC15] mb-6"></div>

              <p className="text-sm md:text-base text-[#334155] leading-7 mb-6">
                Whether you're planning a renovation, repair, or full remodel,
                our team is ready to help with clear communication, quality
                workmanship, and reliable project planning.
              </p>

              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 mb-6">
                <h3 className="font-bold text-[#16202D] mb-4">
                  Why Choose R&J?
                </h3>

                <div className="space-y-3">
                  <TrustItem text="10+ Years of Renovation Experience" />
                  <TrustItem text="Licensed & Insured Professionals" />
                  <TrustItem text="High-Quality Workmanship" />
                  <TrustItem text="On-Time Project Completion" />
                  <TrustItem text="Free, No-Obligation Estimates" />
                </div>
              </div>

              <div className="space-y-5">
                <InfoItem
                  icon={<FaPhoneAlt />}
                  title="Call Us"
                  value="(647) 123-4567"
                />
                <InfoItem
                  icon={<FaEnvelope />}
                  title="Email Us"
                  value="info@rjconstruction.ca"
                />
                <InfoItem
                  icon={<FaMapMarkerAlt />}
                  title="Service Area"
                  value="Toronto & GTA"
                />
                <InfoItem
                  icon={<FaClock />}
                  title="Business Hours"
                  value="Mon – Fri: 8:00 AM – 6:00 PM"
                  secondValue="Sat: 9:00 AM – 3:00 PM"
                />
              </div>
            </div>

            <div className="bg-[#071528] text-white rounded-2xl p-7 md:p-8 shadow-xl">
              <div className="text-[#FACC15] text-4xl mb-5">
                <FaAward />
              </div>

              <h3 className="text-xl font-bold mb-3">Fast & Free Estimates</h3>

              <p className="text-sm text-[#CBD5E1] leading-6 mb-5">
                We provide accurate and detailed quotes with no obligation.
              </p>

              <div className="space-y-3 text-sm text-[#CBD5E1]">
                <div className="flex gap-3 items-start">
                  <FaCheckCircle className="text-[#FACC15] mt-1 shrink-0 text-xl" />
                  <p>Quick response time</p>
                </div>
                <div className="flex gap-3">
                  <FaCheckCircle className="text-[#FACC15] mt-1 shrink-0 text-xl" />
                  <p>Clear project discussion</p>
                </div>

                <div className="flex gap-3">
                  <FaCheckCircle className="text-[#FACC15] mt-1 shrink-0 text-xl" />
                  <p>Honest pricing guidance</p>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-7 pt-5 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  What Happens Next?
                </h4>

                <div className="space-y-4 text-sm text-[#CBD5E1] leading-6">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#071528] text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <p className="text-[#CBD5E1]">
                      We review your request within one business day.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#071528] text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <p className="text-[#CBD5E1]">
                      Our renovation specialist contacts you to discuss your
                      project.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#071528] text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <p className="text-[#CBD5E1]">
                      We schedule a site visit or consultation if required.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#071528] text-xs font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <p className="text-[#CBD5E1]">
                      You receive a detailed, transparent quotation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="w-full min-w-0 bg-white rounded-2xl p-6 md:p-8 shadow-[0_15px_45px_rgba(22,32,45,0.10)]">
            <h2 className="text-2xl font-bold text-[#16202D] mb-7">
              Project Information
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <FormInput
                  label="Last Name *"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormInput
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>

              <FormInput
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
                placeholder="Street address, city, postal code"
              />

              <FormSelect
                label="Property Type"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                error={errors.propertyType}
                options={["House", "Condo", "Townhouse", "Commercial"]}
              />

              <FormSelect
                label="Estimated Budget"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                error={errors.estimatedBudget}
                options={[
                  "Under $5,000",
                  "$5,000 – $10,000",
                  "$10,000 – $25,000",
                  "$25,000 – $50,000",
                  "Over $50,000",
                ]}
              />

              <FormSelect
                label="What type of service do you need? *"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                error={errors.serviceType}
                options={[
                  "Full Renovation",
                  "Kitchen & Cabinets",
                  "Drywall & Framing",
                  "Painting & Flooring",
                  "Plumbing",
                  "Deck Installation",
                  "Fence Installation",
                  "Stairs Renovation",
                ]}
              />

              <FormInput
                label="Preferred Start Date"
                name="preferredStartDate"
                type="date"
                value={formData.preferredStartDate}
                onChange={handleChange}
                error={errors.preferredStartDate}
              />

              <div>
                <label className="block font-medium text-[#16202D] mb-4">
                  Preferred Contact Method *
                </label>

                <div className="grid sm:grid-cols-3 gap-4">
                  {["Phone", "Email", "Text Message"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-sm border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-[#16202D]"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={item}
                        checked={formData.contactMethod === item}
                        onChange={handleChange}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>

                {errors.contactMethod && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.contactMethod}
                  </p>
                )}
              </div>

              <FormTextarea
                label="Project Details *"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                error={errors.projectDetails}
                rows={7}
                placeholder="Please describe your project, including size, scope, and any specific requirements."
              />

              <div>
                <label className="block font-medium text-[#16202D] mb-2">
                  Upload Project Photos
                </label>

                <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-lg px-4 py-8 cursor-pointer hover:border-[#16202D] transition">
                  <FaUpload className="text-[#FACC15] text-2xl" />
                  <span className="font-medium text-[#16202D]">
                    Choose files or drag photos here
                  </span>
                  <span className="text-sm text-gray-500">
                    JPG, PNG, or PDF files accepted
                  </span>
                  <input type="file" multiple className="hidden" />
                </label>
              </div>

              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  {successMessage}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#FACC15] hover:bg-[#FCD34D] text-[#16202D] font-bold py-3 rounded-lg transition shadow-md flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaPaperPlane />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  error,
}) {
  return (
    <div>
      <label className="block font-medium text-[#16202D] mb-2">{label}</label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
          error ? "border-red-500" : "border-gray-300 focus:border-[#16202D]"
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function FormSelect({ label, name, options, value = "", onChange, error }) {
  return (
    <div>
      <label className="block font-medium text-[#16202D] mb-2">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
          error ? "border-red-500" : "border-gray-300 focus:border-[#16202D]"
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function FormTextarea({
  label,
  name,
  placeholder = "",
  value = "",
  onChange,
  error,
  rows = 6,
}) {
  return (
    <div>
      <label className="block font-medium text-[#16202D] mb-2">{label}</label>

      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-4 py-3 outline-none resize-none transition ${
          error ? "border-red-500" : "border-gray-300 focus:border-[#16202D]"
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TrustItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-[#FACC15] mt-1 shrink-0" />
      <p className="text-sm text-[#334155] leading-6">{text}</p>
    </div>
  );
}

function InfoItem({ icon, title, value, secondValue }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 rounded-full bg-[#071528] text-[#FACC15] flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-[#16202D]">{title}</h4>
        <p className="text-sm text-[#334155]">{value}</p>
        {secondValue && <p className="text-sm text-[#334155]">{secondValue}</p>}
      </div>
    </div>
  );
}

export default FreeQuote;
