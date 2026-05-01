import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui, profile } from "@/data/content";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about" subtitle="01" title={t(ui.about.title)}>
      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-[var(--color-accent)] blur-2xl opacity-20 rounded-full" />
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed"
        >
          <p>{t(ui.about.p1)}</p>
          <p>{t(ui.about.p2)}</p>
          <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] text-[var(--color-text)]">
              {t({ es: "Freelance disponible", en: "Freelance available" })}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] text-[var(--color-text)]">
              {t({ es: "Remoto · Worldwide", en: "Remote · Worldwide" })}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] text-[var(--color-text)]">
              {t({ es: "Foco en IA & Full Stack", en: "AI & Full Stack focus" })}
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
