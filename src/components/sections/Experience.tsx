import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui, experience } from "@/data/content";

export function Experience() {
  const { t } = useI18n();

  return (
    <Section id="experience" subtitle="04" title={t(ui.experience.title)}>
      <p className="text-[var(--color-text-muted)] mb-12 -mt-8">
        {t(ui.experience.subtitle)}
      </p>

      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[var(--color-border)]" />

        <div className="space-y-8">
          {experience.map((item, i) => {
            const Icon = item.type === "education" ? GraduationCap : Briefcase;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-strong)] flex items-center justify-center">
                  <Icon size={14} className="text-[var(--color-accent-hover)]" />
                </div>

                <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="font-semibold">{t(item.role)}</h3>
                    <span className="text-xs font-mono text-[var(--color-text-dim)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-accent-hover)] mb-2">
                    {t(item.org)}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
