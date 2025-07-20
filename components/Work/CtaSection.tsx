"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Start Your Project?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Let&#39;s collaborate to bring your vision to life with cutting-edge
        technology and innovative solutions.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
      >
        Get Started Today
      </motion.button>
    </motion.div>
  );
}
