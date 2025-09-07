"use client";
import { motion } from "framer-motion";

export default function GuardianAdLitemPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            GUARDIAN AD LITEM
          </h1>
          <p className="text-lg">
            Investigating allegations, narrowing issues, and submitting
            recommendations.
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
            As a privately retained Guardian Ad Litem (GAL), Attorney Courtney
            Roller provides valuable assistance in contentious custody cases.
            Court-advisor GALs benefit parents, attorneys, and judges in
            determining the best interests of minor children.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
