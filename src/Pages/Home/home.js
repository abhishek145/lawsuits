"use client";
import { motion } from "framer-motion";
import heroImg from "../../assets/advice-2911664_1280.jpg";
import attorneyVector from "../../assets/lineup-1524806_1280.png";

export default function Home() {
  const services = [
    // { name: "Family Law" },
    { name: "Estate Administration" },
    // { name: "Traffic Violations" },
    { name: "Estate Planning" },
    { name: "Collaborative Law" },
    { name: "Criminal Defense" },
    // { name: "Guardian Ad Litem" },
    // { name: "Parenting Coordinator" },
  ];

  const whyChoose = [
    { title: "25+ Years Experience", desc: "Over two decades helping families navigate challenges." },
    { title: "Expert Legal Knowledge", desc: "Board-certified family law specialists with courtroom experience." },
    { title: "Compassionate Approach", desc: "We understand the emotional challenges & provide caring support." },
    { title: "98% Proven Results", desc: "Thousands of successful cases protecting our clients’ interests." },
    { title: "Client Satisfaction", desc: "Personalized solutions designed with your best interests in mind." },
    { title: "24/7 Emergency Support", desc: "Because family crises don’t wait for business hours." },
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col font-sans bg-white text-gray-800">
      {/* Hero */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          People’s Legal Counsel
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Trusted advocates with decades of legal expertise, delivering
            compassionate representation when you need it most.
          </p>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-[#f09f1a] text-white font-semibold rounded-xl shadow hover:bg-[#d32524] transition"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#243e9d]">Practice Areas</h2>
          <p className="text-gray-600 mt-2">
            Comprehensive legal solutions tailored to your needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
            >
              <h3 className="text-lg font-semibold text-[#243e9d] mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">
                Expert legal guidance and support in {service.name}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#243e9d] mb-6">
              Why Choose People’s Legal Counsel?
            </h2>
            <p className="text-gray-600 mb-6">
              For over two decades, we've been helping families navigate life's
              most challenging legal situations with compassion, expertise, and
              unwavering dedication.
            </p>
            <ul className="space-y-4">
              {whyChoose.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-lg font-semibold text-[#d32524]">
                    {item.title}
                  </span>
                  <span className="text-gray-600 text-sm">{item.desc}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="mt-8 px-6 py-3 bg-[#f09f1a] text-white font-semibold rounded-xl shadow hover:bg-[#d32524] transition"
            >
              Schedule a Consultation
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
          >
            <img
              src={attorneyVector}
              alt="Attorney"
              className="w-40 h-40 mb-6"
            />
            <h3 className="text-xl font-semibold text-[#243e9d]">
              Michael Fiorito
            </h3>
            <p className="text-gray-600">Senior Legal Researcher</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-[#243e9d] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to discuss your legal matter?
            </h2>
            <p className="mb-6">
              Contact us for a free, confidential consultation.
            </p>
            <p className="mb-2">
              <strong>Office Address:</strong> 19000 Stratford Road, Unit 105,
              Minnetonka, MN, 55345, USA
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 763 357 1659
            </p>
            <p className="mb-2">
              <strong>Email:</strong> mike@getintocompliance.org
            </p>
            <p>
              <strong>Office Hours:</strong> Mon – Fri, 9 AM – 5 PM
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-gray-800"
          >
            <h3 className="text-2xl font-bold text-[#243e9d] mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#243e9d]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#243e9d]"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#243e9d]"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#243e9d]"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#d32524] text-white font-semibold rounded-lg hover:bg-[#f09f1a] transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#d32524] text-white text-center">
        <p>
          Hotline: +1 763 357 1659 | Email: mike@getintocompliance.org
        </p>
      </footer>
    </div>
  );
}
