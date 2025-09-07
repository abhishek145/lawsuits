"use client";
import { motion } from "framer-motion";

export default function EstatePlanningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            ESTATES & ESTATE PLANNING
          </h1>
          <p className="text-lg">
            Concrete financial and healthcare plans for your family and future.
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
            Losing someone we care about is deeply stressful. We help ease the
            burden on your loved ones by preparing wills, general powers of
            attorney, and healthcare powers of attorney.
          </p>
          <p>
            Our wills are offered on a flat-fee basis so you know your costs up
            front — giving you clarity and peace of mind while planning.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
