"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
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
}

export function ProjectModal({
  isOpen,
  onClose,
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
}: ProjectModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream rounded-2xl shadow-2xl ring-1 ring-warm-gray"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-cream-dark hover:bg-warm-gray rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>

              {/* Image */}
              <div className="relative aspect-[16/9] rounded-t-2xl overflow-hidden bg-warm-gray">
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
                      <div className="text-7xl mb-4">🍽️</div>
                      <div className="text-2xl font-semibold">{title}</div>
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

              {/* Content */}
              <div className="p-8 md:p-10 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
                      {title}
                    </h2>
                    <span className={cn(
                      "px-4 py-1.5 text-white text-sm rounded-full font-semibold shrink-0",
                      role === "Co-Founder" ? "bg-emerald" : "bg-indigo"
                    )}>
                      {role}
                    </span>
                  </div>
                  <p className="text-gray-mid text-sm uppercase tracking-wider">{category}</p>
                </div>

                {/* Problem */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-emerald rounded-full"></span>
                    Problem
                  </h3>
                  <p className="text-charcoal leading-relaxed pl-4">{problem}</p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-indigo rounded-full"></span>
                    What I Built
                  </h3>
                  <p className="text-charcoal leading-relaxed pl-4">{solution}</p>
                </div>

                {/* Tech & Link */}
                <div className="pt-4 border-t border-warm-gray space-y-3">
                  <p className="text-sm text-gray-mid">
                    <strong className="text-charcoal">Tech Stack:</strong> {tech}
                  </p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald hover:text-emerald-light font-medium transition-colors duration-200 group"
                    >
                      Visit {new URL(link).hostname.replace("www.", "")}
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
