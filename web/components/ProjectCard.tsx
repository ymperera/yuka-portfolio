"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  role: string;
  image: string;
  imageType?: "image" | "video" | "gradient";
  videoSrc?: string;
  gradientColors?: string;
  oneLine: string;
  onClick: () => void;
}

export function ProjectCard({
  title,
  role,
  image,
  imageType = "image",
  videoSrc,
  gradientColors,
  oneLine,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Card Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-dark shadow-sm ring-1 ring-warm-gray group-hover:shadow-xl transition-all duration-300">
        {imageType === "video" && videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : imageType === "gradient" ? (
          <div className={cn("w-full h-full flex items-center justify-center", gradientColors)}>
            <div className="text-white text-center p-6">
              <div className="text-6xl mb-3">🍽️</div>
              <div className="text-xl font-semibold">{title}</div>
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            {title}
          </h3>
          <span className={cn(
            "px-3 py-1 text-white text-xs rounded-full font-semibold shrink-0",
            role === "Co-Founder" ? "bg-emerald" : "bg-indigo"
          )}>
            {role}
          </span>
        </div>

        <p className="text-gray-mid leading-relaxed mb-4">
          {oneLine}
        </p>

        {/* View Details Link */}
        <div className="flex items-center gap-2 text-indigo hover:text-indigo-light font-medium transition-colors duration-200">
          <span className="text-sm">View details</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </motion.div>
  );
}
