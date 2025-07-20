"use client";

import { motion } from "framer-motion";
import { Award, Users, Calendar, LucideIcon } from "lucide-react";
import type { StatItem } from "@/types";

const iconMap: { [key: string]: LucideIcon } = {
  Award,
  Users,
  Calendar,
};

interface StatsSectionProps {
  statsData: StatItem[];
}

export default function StatsSection({ statsData }: StatsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
    >
      {statsData.map((stat, index) => {
        const IconComponent = iconMap[stat.icon];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              {IconComponent && (
                <IconComponent className="w-8 h-8 text-brand-500" />
              )}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
