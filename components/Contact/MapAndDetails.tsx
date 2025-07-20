"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function MapAndDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      {/* Map Placeholder */}
      <Card className="overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lokasi Kami
              </h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Contact */}
      <Card className="p-6">
        <CardContent className="p-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Kontak Cepat
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Telepon</p>
                <p className="text-gray-600">(021) 7196877</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">contact@suitmedia.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Waktu Respons</p>
                <p className="text-gray-600">Dalam 24 jam</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="p-6">
        <CardContent className="p-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Sering Ditanyakan
          </h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-gray-900 text-sm">
                Berapa lama proyek pada umumnya?
              </p>
              <p className="text-gray-600 text-sm">
                Linimasa proyek bervariasi dari 2-12 minggu tergantung
                kompleksitas.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">
                Apakah Anda menawarkan dukungan berkelanjutan?
              </p>
              <p className="text-gray-600 text-sm">
                Ya, kami menyediakan paket pemeliharaan dan dukungan.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">
                Bisakah Anda bekerja dengan tim kami yang sudah ada?
              </p>
              <p className="text-gray-600 text-sm">
                Tentu saja! Kami senang berkolaborasi dengan tim internal.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
