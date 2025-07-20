'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FileText size={32} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Ideas Found</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        We couldn&#39;t find any ideas matching your criteria. Try adjusting your filters or check back later.
      </p>
    </motion.div>
  );
}
