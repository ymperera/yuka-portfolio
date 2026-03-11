"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  role: string;
  category: string;
  image: string;
  imageType?: "image" | "video" | "gradient";
  videoSrc?: string;
  gradientColors?: string;
  link?: string;
  problem: string;
  solution: string;
  tech: string;
  oneLine: string;
}

export function ExpandableProjectCard({
  title,
  role,
  category,
  image,
  imageType = "image",
  videoSrc,
  gradientColors,
  link,
  problem,
  solution,
  tech,
  oneLine,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-warm-gray mb-6 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
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
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-2xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
          {title}
        </h3>
        <span className={cn(
          "px-3 py-1 text-white text-xs rounded-full font-semibold shrink-0",
          role === "Co-Founder" ? "bg-indigo" : "bg-charcoal"
        )}>
          {role}
        </span>
      </div>

      <p className="text-gray-mid leading-relaxed mb-4">
        {oneLine}
      </p>

      {/* Expand/Collapse Button */}
      <button
        className="flex items-center gap-2 text-indigo hover:text-indigo-light font-medium transition-colors duration-200 mb-4"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <span className="text-sm">
          {isExpanded ? "Show less" : "Read more"}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4 border-t border-warm-gray">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Problem</h4>
                <p className="text-gray-mid leading-relaxed">{problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-charcoal mb-2">What I Built</h4>
                <p className="text-gray-mid leading-relaxed">{solution}</p>
              </div>

              <div>
                <p className="text-sm text-gray-mid">
                  <strong>Tech:</strong> {tech}
                </p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-indigo hover:text-indigo-light mt-2 font-medium transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit {new URL(link).hostname.replace("www.", "")} →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
