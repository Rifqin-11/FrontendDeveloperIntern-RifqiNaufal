"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { ProcessStep } from "@/types";

interface ProcessStepsProps {
  processData: ProcessStep[];
}

export default function ProcessSteps({ processData }: ProcessStepsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Our Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processData.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
            {index < processData.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-gray-300" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
