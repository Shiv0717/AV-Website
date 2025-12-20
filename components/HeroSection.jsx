"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-xs font-semibold text-green-700 border border-green-300">
            ● PUBLIC BETA LIVE
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            The Digital Workbench for{" "}
            <span className="text-blue-600">Vedic Numerologists.</span>
          </h1>

          <p className="mt-6 max-w-xl text-slate-600 text-md font-light md:text-lg">
            Bridging ancient Siddhant with modern precision. Stop calculating
            grids manually and start delivering deeper insights. Instant dasha
            charts, client CRM, and whitelabeled reports.
          </p>

          <Link
            href="https://app.ankvidya.in"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Sign Up for Free Beta →
          </Link>
        </motion.div>

        {/* RIGHT — DASHBOARD */}
        <motion.div
         animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)] p-4 cursor-pointer">
            
            {/* Browser Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-slate-100" />
              <span className="w-3 h-3 rounded-full bg-slate-100" />
              <span className="w-3 h-3 rounded-full bg-slate-100" />
              <span className="ml-3 w-32 h-4 rounded-full bg-slate-50" />
            </div>

            {/* Dashboard Image */}
            <div className="w-full h-[320px] rounded-xl bg-gray-50 flex items-center justify-center">
              <Image
                src="/hero.jpeg"
                alt="AnkVidya Dashboard"
                width={1400}
                height={800}
                priority
                className="max-w-full max-h-full object-contain"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
