"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/ai-generated-9347724_1280.png";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { name: "Family Law", path: "/family-law" },
    { name: "Estate Administration", path: "/estate-planning" },
    { name: "Traffic Violations", path: "/traffic-violations" },
    { name: "Estate Planning", path: "/estate-planning" },
    { name: "Collaborative Law", path: "/collaborative-law" },
    { name: "Criminal Defense", path: "/criminal-defense" },
    { name: "Guardian Ad Litem", path: "/guardian-ad-litem" },
    { name: "Parenting Coordinator", path: "/parenting-coordinator" },
  ];

  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <section
  className="relative h-[80vh] flex items-center justify-center text-white mt-[72px]"
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Subtle black overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center px-6 relative z-10"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Minimizing Conflicts. Maximizing Results.
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
      Experienced, compassionate, and effective legal representation.
    </p>
    <button
      onClick={() => navigate("/contact")}
      className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
    >
      Schedule a Consultation
    </button>
  </motion.div>
</section>


      {/* Practice Areas Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700">Practice Areas</h2>
          <p className="text-gray-600 mt-2">
            Legal expertise across a wide range of services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600">
                Expert legal guidance and compassionate representation in{" "}
                {service.name}.
              </p>
              <button
                onClick={() => navigate(service.path)}
                className="mt-4 text-green-700 font-semibold hover:underline"
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"> <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} > <h2 className="text-4xl font-bold text-green-700 mb-6">About Us</h2> <p className="text-gray-600 mb-4"> At Courtney Roller Law, we believe in resolving conflicts with compassion and efficiency. Our mission is to protect your rights and help you achieve the best possible outcome. </p> <p className="text-gray-600"> With years of experience in family, estate, and criminal law, we provide tailored legal solutions for individuals and families across North Carolina. </p> </motion.div> <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="rounded-2xl shadow-lg overflow-hidden" > <img src={heroImg} alt="Courtroom" className="w-full h-full object-cover" /> </motion.div> </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-green-700 text-white text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6">
            Visit us at 48 Salem St, Thomasville, NC 27360 or call (336)
            123-4567 to schedule a consultation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </section>
    </div>
  );
}
