"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center items-center px-4">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-brand-500">Suitmedia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto">
            This project was created as part of the{" "}
            <strong>Suitmedia Internship Test</strong> for the Frontend
            Developer.
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,
            and <strong>ShadCN UI</strong>. This site includes features such as
            animated headers, parallax banners, list post sorting, pagination,
            and external API integration.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/ideas">
              <Button
                size="lg"
                className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg"
              >
                Explore Ideas
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <footer className="mt-12 text-sm text-gray-500">
        Created with ❤️ by <span className="font-semibold">Rifqi Naufal</span>
      </footer>
    </div>
  );
}
