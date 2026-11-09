"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props for the InteractiveTravelCard component.
 */
export interface InteractiveTravelCardProps {
  /** The main title for the card, e.g., "Sapa Valley" */
  title: string;
  /** A subtitle or location, e.g., "Vietnam" */
  subtitle: string;
  /** The URL for the background image. */
  imageUrl: string;
  /** The text for the primary action button, e.g., "Book your trip" */
  actionText: string;
  /** The destination URL for the top-right link. */
  href?: string;
  /** Callback function when the primary action button is clicked. */
  onActionClick?: () => void;
  /** Optional additional class names for custom styling. */
  className?: string;
  /** Optional badge number (e.g., "01", "02") */
  number?: string;
  /** Optional detailed explanation or description */
  description?: string;
  /** Optional Lucide icon component */
  icon?: React.ComponentType<{ className?: string }>;
  /** Optional accent color key (cyan, amber, rose, emerald) */
  accentColor?: string;
}

/**
 * A responsive and theme-adaptive card with an interactive 3D tilt and parallax depth effect on hover.
 */
export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    {
      title,
      subtitle,
      imageUrl,
      actionText,
      href = "#contact",
      onActionClick,
      className,
      number,
      description,
      icon: Icon,
      accentColor = "cyan"
    },
    ref
  ) => {
    // --- 3D Tilt Animation Logic ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseXVal = e.clientX - left;
      const mouseYVal = e.clientY - top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <div style={{ perspective: "1000px" }} className="w-full flex justify-center">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn(
            // Base styles for the card container, using theme variables for border
            "relative h-[28rem] w-full max-w-sm rounded-2xl bg-[#0e121a]/80 shadow-2xl border border-white/10 group select-none transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]",
            className
          )}
        >
          <div
            style={{
              transform: "translateZ(45px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-3 grid h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] grid-rows-[1fr_auto] rounded-xl overflow-hidden shadow-lg border border-white/10"
          >
            {/* Background Image */}
            <img
              src={imageUrl}
              alt={`${title}, ${subtitle}`}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
            />
            
            {/* Darkening gradient overlay for high contrast and readability */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />

            {/* Subtle Top Accent Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Card Content (Header, Body & Footer) */}
            <div className="relative flex flex-col justify-between rounded-xl p-5 text-white z-10">
              
              {/* Header section with Number / Icon and Action Link */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    {number && (
                      <motion.span
                        style={{ transform: "translateZ(55px)" }}
                        className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-white/90"
                      >
                        {number}
                      </motion.span>
                    )}
                    {Icon && (
                      <motion.div
                        style={{ transform: "translateZ(55px)" }}
                        className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>

                  <motion.a
                    href={href}
                    target={href.startsWith("#") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: "4deg" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Learn more about ${title}`}
                    style={{ transform: "translateZ(60px)" }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-inset ring-white/30 transition-all hover:bg-white/30 cursor-pointer shadow-lg"
                  >
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </motion.a>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <motion.h2 
                    style={{ transform: "translateZ(50px)" }}
                    className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md"
                  >
                    {title}
                  </motion.h2>
                  <motion.p 
                    style={{ transform: "translateZ(40px)" }}
                    className="text-xs font-mono font-medium text-cyan-300 mt-1 drop-shadow"
                  >
                    {subtitle}
                  </motion.p>
                </div>

                {/* Optional Detailed Description */}
                {description && (
                  <motion.p
                    style={{ transform: "translateZ(35px)" }}
                    className="text-xs text-gray-200/90 leading-relaxed mt-3 line-clamp-3 font-sans drop-shadow-sm"
                  >
                    {description}
                  </motion.p>
                )}
              </div>

              {/* Footer Button */}
              <div className="pt-4">
                <motion.button
                  onClick={onActionClick}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ transform: "translateZ(45px)" }}
                  className={cn(
                    "w-full rounded-xl py-2.5 text-center text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer shadow-lg",
                    "bg-white/15 backdrop-blur-md ring-1 ring-inset ring-white/25 hover:bg-white/25 hover:ring-white/40 active:bg-white/30"
                  )}
                >
                  {actionText}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

InteractiveTravelCard.displayName = "InteractiveTravelCard";

// Export both standard and alias name for flexibility
export const Card3D = InteractiveTravelCard;
