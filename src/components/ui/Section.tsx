import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 px-6 md:px-12 max-w-6xl mx-auto", className)}
    >
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          {subtitle && (
            <p className="text-sm font-mono text-[var(--color-accent-hover)] mb-2 tracking-wider uppercase">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
