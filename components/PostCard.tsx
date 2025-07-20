'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Idea } from '@/types';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PostCardProps {
  idea: Idea;
  index: number;
}

const defaultImages = [
  "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
  "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
  "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
];

export default function PostCard({ idea, index }: PostCardProps) {
  const fallbackImage = defaultImages[index % defaultImages.length];
  const imageUrl =
    idea.medium_image?.[0]?.url || idea.small_image?.[0]?.url || fallbackImage;
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-200">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={idea.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 flex flex-col h-[200px]">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={16} className="mr-2" />
            {formatDate(idea.published_at)}
          </div>

          <h3
            className="font-semibold text-lg leading-tight text-gray-900 mb-3 flex-1 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {idea.title}
          </h3>

          <motion.button
            whileHover={{ x: 5 }}
            className="text-brand-500 font-medium text-sm self-start hover:text-brand-600 transition-colors duration-200"
          >
            Read more →
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
