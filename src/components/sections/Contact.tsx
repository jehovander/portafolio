import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui, profile } from "@/data/content";

// Workana version: replaces all direct contact channels (email, WhatsApp,
// socials) with a single CTA card linking to the Workana profile. The whole
// card is clickable → opens Workana in a new tab so the visitor lands
// directly on Jehovander's profile to start a conversation through escrow.

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact" subtitle="06" title={t(ui.contact.workanaTitle)}>
      <p className="text-[var(--color-text-muted)] mb-10 -mt-8 text-lg">
        {t(ui.contact.workanaSubtitle)}
      </p>

      <motion.a
        href={profile.workana}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group block p-8 md:p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent-hover)] group-hover:bg-[var(--color-accent)]/20 transition-colors">
            <Briefcase size={28} />
          </div>
          <ArrowUpRight
            size={22}
            className="text-[var(--color-text-dim)] group-hover:text-[var(--color-accent-hover)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-dim)] mb-2">
          Workana
        </p>
        <p className="text-2xl font-semibold mb-4">
          {t(ui.contact.workanaCta)}
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-md">
          {t(ui.contact.workanaSubtitle)}
        </p>
      </motion.a>
    </Section>
  );
}
