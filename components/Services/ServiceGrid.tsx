"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import type { ServiceItem } from "@/types";

const iconMap: { [key: string]: LucideIcon } = {
  Code,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
};

interface ServiceGridProps {
  servicesData: ServiceItem[];
}

export default function ServiceGrid({ servicesData }: ServiceGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 group-hover:border-brand-200">
                <CardContent className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-brand-500 font-medium mt-6 group-hover:text-brand-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
