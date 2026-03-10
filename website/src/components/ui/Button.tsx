"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "gradient-primary text-white shadow-[0_4px_20px_rgba(92,124,250,0.3)] hover:shadow-[0_6px_28px_rgba(92,124,250,0.4)]",
  secondary:
    "glass text-text-primary hover:bg-white/80",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-white/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={baseClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
