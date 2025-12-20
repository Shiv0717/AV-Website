"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Very useful for managing clients",
    text: "Using from last 3 months. Client records, charts, everything in one app. Can check from phone also. Makes work much easier.",
    name: "Rajesh Sharma",
    location: "Jaipur",
  },
  {
    quote: "Monthly charts are finally correct",
    text: "I tried 4-5 paid apps before using ankvidya.in. All showed wrong Pratyantar Dasha calculations. AnkVidya.in gets it right. I checked manually also - matches perfectly. Using it daily very satisfied experience",
    name: "Priya Mehta",
    location: "Pune",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-sm tracking-widest text-blue-600 font-semibold mb-10"
        >
          TRUSTED BY NUMEROLOGISTS
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
            >
              {/* STARS */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                “{t.quote}”
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-6 border-t border-gray-300 pt-4">
                <p className="font-semibold text-gray-900 text-md">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
