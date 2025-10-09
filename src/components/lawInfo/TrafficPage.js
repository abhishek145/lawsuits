"use client";
import { motion } from "framer-motion";

export default function TrafficPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            TRAFFIC VIOLATIONS
          </h1>
          <p className="text-lg">
            Traffic court made quick and simple in Davidson County.
          </p>
        </div> */}
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
            A simple speeding ticket can carry extensive consequences when other
            factors are considered. We take your tickets seriously and explain
            your options thoroughly.
          </p>
          <p>
            Many traffic matters are handled on a flat-fee basis so you know the
            attorney fee up front — and you can relax knowing your case will be
            handled quickly and professionally.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
