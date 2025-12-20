"use client"
import { motion } from "framer-motion";

const features = [
  {
    icon: "⚖️",
    title: "Compare charts",
    description:
      "Open multiple clients side-by-side to analyze their compatibility and life patterns instantly.",
  },
  {
    icon: "📅",
    title: "Dasha charts",
    description:
      "Accurate Base grid, Mahadasha, Antardasha, and Pratyantar Dasha charts without errors across devices.",
  },
  {
    icon: "📄",
    title: "Download report",
    description:
      "Generate beautiful, branded PDF reports that reflect the quality of your practice.",
  },
  {
    icon: "📂",
    title: "Secure CRM",
    description:
      "Manage unlimited clients, track consultation history, and save private notes.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold text-gray-900"
          >
            Built for Pro Practitioners
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 font-light tracking-wide text-lg text-slate-500"
          >
            Everything you need to run a professional numerology practice.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="rounded-2xl bg-white border border-gray-200 p-8 
                         hover:shadow-lg transition-shadow duration-200"
            >
              {/* ICON */}
              <div className="mb-5 w-12 h-12 rounded-xl bg-blue-50 
                              flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
