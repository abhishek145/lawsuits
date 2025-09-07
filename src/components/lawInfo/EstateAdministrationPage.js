"use client";
import { motion } from "framer-motion";

export default function EstateAdministrationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            ESTATE ADMINISTRATION & PROBATE
          </h1>
          <p className="text-lg">
            Client-driven assistance with clarity and compassion.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-5 leading-relaxed text-gray-700"
        >
          <p>
            Our client-driven approach to Estate Administration and Probate lets
            us assist with as much or as little as you need — from full
            administration and asset/debt distribution to one-on-one
            consultations and real-time answers.
          </p>
          <p>
            Whether your loved one had a will or passed without clear
            instruction, we provide transparent guidance and compassionate
            representation throughout the process.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
