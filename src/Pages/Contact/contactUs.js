import React, { useEffect, useRef } from "react";
import heroImg from "../../assets/ai-generated-9347724_1280.png"; // hero image for law theme
import attorneyImg from "../../assets/ai-generated-9347724_1280.png"; // attorney photo
import contactImg from "../../assets/ai-generated-9347724_1280.png"; // professional contact image
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={heroImg}
          alt="Law Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Courtney Roller Law
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Providing compassionate, dedicated, and results-driven legal services
            for families and individuals in North Carolina.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Courtney Roller Law focuses on personal legal support for families
          and individuals. We specialize in <strong>family law</strong>,{" "}
          <strong>estate planning</strong>, and <strong>traffic matters</strong>,
          providing tailored legal guidance while keeping clients informed and
          supported at every step.
        </p>
      </section>

      {/* Attorney Bio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={attorneyImg}
            alt="Attorney Courtney Roller"
            className="rounded-xl shadow-lg w-full h-[450px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Courtney Roller
            </h2>
            <p className="text-gray-600 mb-4">
              Courtney Roller is a trusted attorney known for her compassionate
              approach and strong advocacy. She ensures each client receives
              personalized guidance to protect their best interests.
            </p>
            <p className="text-gray-600">
              With expertise in family law, estate planning, and traffic matters,
              Courtney combines skill and empathy to help clients navigate
              complex legal situations effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Every client deserves honesty, respect, and tireless advocacy. These
            values guide our work at Courtney Roller Law.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We listen and understand your needs to provide supportive guidance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedication</h3>
              <p className="text-gray-600">
                We fight tirelessly to protect your best interests and those of your family.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honest guidance and ethical representation you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-16 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have legal questions or need representation? Get in touch today.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Image */}
          <div>
            <img
              src={contactImg}
              alt="Contact"
              className="rounded-xl shadow-lg w-full md:w-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
