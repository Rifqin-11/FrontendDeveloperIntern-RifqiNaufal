'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function LoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-200 animate-pulse" />
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse" />
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded w-3/5 animate-pulse" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-20 mt-4 animate-pulse" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}