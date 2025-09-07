import React from "react";
import aboutHero from "../../assets/ai-generated-9347724_1280.png"; // replace with a proper law/justice themed image
import attorneyImg from "../../assets/ai-generated-9347724_1280.png"; // placeholder for attorney photo
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <img
          src={aboutHero}
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Firm
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Committed to providing compassionate, dedicated, and results-driven
            legal services for families and individuals.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At <strong>Courtney Roller Law</strong>, we understand that legal
            matters can be deeply personal and often overwhelming. That’s why we
            focus on providing personalized representation tailored to each
            client’s unique situation. Whether you are facing a family law case,
            estate planning decision, or traffic-related issue, we are here to
            guide you every step of the way with compassion and strength.
          </p>
        </div>
      </section>

      {/* Attorney Bio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Attorney Image */}
          <div>
            <img
              src={attorneyImg}
              alt="Attorney"
              className="rounded-xl shadow-lg object-cover w-full h-[450px]"
            />
          </div>

          {/* Bio Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Courtney Roller
            </h2>
            <p className="text-gray-600 mb-4">
              Courtney Roller is a dedicated attorney with years of experience
              representing individuals and families. Known for her compassionate
              approach and unwavering commitment, she ensures that each client
              feels supported during some of life’s most challenging times.
            </p>
            <p className="text-gray-600">
              With a focus on <strong>family law</strong>,{" "}
              <strong>estate planning</strong>, and{" "}
              <strong>traffic matters</strong>, Courtney brings both skill and
              empathy to her practice, helping clients navigate the legal system
              with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            We believe that every client deserves honesty, respect, and
            tireless advocacy. These values guide everything we do at Courtney
            Roller Law.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compassion
              </h3>
              <p className="text-gray-600">
                Understanding your struggles and supporting you with empathy and
                respect.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dedication
              </h3>
              <p className="text-gray-600">
                Fighting tirelessly to protect your best interests and those of
                your family.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                Offering honest guidance and ethical representation you can
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
