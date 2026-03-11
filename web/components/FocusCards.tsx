"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  subtitle: string;
  src: string;
  objectPosition?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-2xl relative overflow-hidden aspect-square cursor-pointer transition-all duration-300 ring-2 ring-cream-dark",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <Image
            src={card.src}
            alt={card.title}
            fill
            className={cn(
              "object-cover transition-all duration-300",
              card.objectPosition || "object-center"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-charcoal/0 flex items-end justify-center p-6 transition-all duration-300",
              hovered === index ? "bg-charcoal/70" : "bg-charcoal/0"
            )}
          >
            <div
              className={cn(
                "text-center transition-all duration-300 transform",
                hovered === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <h4 className="font-semibold text-white mb-2 text-lg">
                {card.title}
              </h4>
              <p className="text-white/80 text-sm">{card.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
