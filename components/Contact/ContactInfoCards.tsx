"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { ContactInfo } from "@/types";
import { MapPin, Phone, Mail, Clock, type LucideIcon } from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

interface ContactInfoCardsProps {
  contactInfoData: ContactInfo[];
}

export default function ContactInfoCards({
  contactInfoData,
}: ContactInfoCardsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {contactInfoData.map((info, index) => {
        const IconComponent = iconMap[info.icon];

        return (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${info.color} rounded-xl mb-4`}
                >
                  {/* Render the icon if it exists */}
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
