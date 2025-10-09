"use client";
import { motion } from "framer-motion";

export default function ParentingCoordinatorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1473643068424-cd2485b7e16b?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            PARENTING COORDINATOR SERVICES
          </h1>
          <p className="text-lg">
            Decision making and dispute resolution for parents.
          </p>
        </div> */}
      </section>

      {/* Body (you can expand with specific process/benefits as needed) */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-5 leading-relaxed text-gray-700"
        >
          <p>
            Parenting coordinators help reduce conflict and implement parenting
            plans by making timely recommendations and resolving day-to-day
            disputes focused on the child’s best interests.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
