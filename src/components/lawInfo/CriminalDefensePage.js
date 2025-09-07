"use client";
import { motion } from "framer-motion";

export default function CriminalDefensePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            MISDEMEANOR CRIMINAL DEFENSE
          </h1>
          <p className="text-lg">Zealous advocacy in defense of your rights.</p>
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
            Sometimes good people make mistakes. Sometimes law enforcement gets
            it wrong. Whatever your situation, we provide experienced counsel
            ready to defend your rights and advocate for you.
          </p>
          <p>
            Consultations for misdemeanor criminal defense are always free of
            charge.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
