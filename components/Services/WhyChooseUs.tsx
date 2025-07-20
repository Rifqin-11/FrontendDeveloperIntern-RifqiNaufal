"use client";

import { motion } from "framer-motion";
import { Zap, Users, Shield, BarChart3, CheckCircle } from "lucide-react";

interface WhyChooseUsProps {
  benefitsData: string[];
}

export default function WhyChooseUs({ benefitsData }: WhyChooseUsProps) {
  return (
    <>
      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-20"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Suitmedia?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with creative innovation to
                deliver solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefitsData.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                    <div className="text-2xl font-bold text-gray-900">Fast</div>
                    <div className="text-gray-600">Quick turnaround</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Users className="w-8 h-8 text-blue-500 mb-3" />
                    <div className="text-2xl font-bold text-gray-900">
                      Expert
                    </div>
                    <div className="text-gray-600">Skilled professionals</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Shield className="w-8 h-8 text-green-500 mb-3" />
                    <div className="text-2xl font-bold text-gray-900">
                      Secure
                    </div>
                    <div className="text-gray-600">
                      Enterprise-grade security
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <BarChart3 className="w-8 h-8 text-purple-500 mb-3" />
                    <div className="text-2xl font-bold text-gray-900">
                      Scalable
                    </div>
                    <div className="text-gray-600">Future-proof solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let&#39;s discuss how our services can help you achieve your goals and
          drive success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Free Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View Our Portfolio
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
