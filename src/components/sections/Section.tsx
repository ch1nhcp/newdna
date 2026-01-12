"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </motion.section>
  );
}
