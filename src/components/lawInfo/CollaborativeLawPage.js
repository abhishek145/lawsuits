"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Collaborative Family Law?",
    a: "An alternative dispute resolution for couples seeking separation/divorce where each spouse is represented by a collaborative attorney. Parties agree to share information openly, act in good faith, and resolve the matter outside of court.",
  },
  {
    q: "Why choose a collaborative divorce?",
    a: "Privacy, control, and affordability. The process is voluntary and private, allowing parties to solve family issues outside a public courtroom. With litigation off the table, costs are more predictable.",
  },
  {
    q: "Is it right for me?",
    a: "It’s appropriate for spouses committed to voluntarily working through post-separation issues, exchanging information honestly, and pursuing a negotiated settlement without going to court.",
  },
  {
    q: "How does it work?",
    a: "Both spouses retain collaborative attorneys and participate in meetings where information is exchanged, issues identified, and resolutions developed. Neutral professionals may be included. Once a settlement is reached, a written agreement is signed and filed.",
  },
  {
    q: "What if it doesn't work?",
    a: "If settlement efforts fail, both collaborative attorneys must withdraw and cannot represent the parties in future litigation.",
  },
];

export default function CollaborativeLawPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528747008803-c2c3e879f6fd?w=1920&q=80&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            COLLABORATIVE FAMILY LAW
          </h1>
          <p className="text-lg">
            A “court-free” approach for couples seeking a respectful, guided
            settlement process.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-5 leading-relaxed text-gray-700"
        >
          <p>
            For separated or divorcing couples interested in a non-adversarial
            resolution, collaborative law keeps you in control and out of
            court. Both spouses and their attorneys commit to working together
            toward a full settlement.
          </p>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="border-b">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-semibold text-gray-900">{f.q}</span>
                <ChevronDown
                  className={`transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pb-4 text-gray-700"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
