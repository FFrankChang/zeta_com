"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 shadow-[0_4px_24px_var(--color-glass-shadow)] ${className}`}
      whileHover={
        hover
          ? { y: -4, boxShadow: "0 8px 40px rgba(140, 149, 255, 0.12)" }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
