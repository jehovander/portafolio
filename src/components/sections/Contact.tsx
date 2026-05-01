import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui, profile } from "@/data/content";

export function Contact() {
  const { t } = useI18n();

  const cards = [
    {
      icon: Mail,
      label: t(ui.contact.emailLabel),
      value: profile.email,
      href: `mailto:${profile.email}`,
      primary: true,
    },
    {
      icon: MessageCircle,
      label: t(ui.contact.whatsappLabel),
      value: profile.whatsappDisplay,
      href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`,
      primary: true,
    },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Twitter, label: "Twitter", href: profile.twitter },
    { icon: Instagram, label: "Instagram", href: profile.instagram },
  ];

  return (
    <Section id="contact" subtitle="06" title={t(ui.contact.title)}>
      <p className="text-[var(--color-text-muted)] mb-10 -mt-8 text-lg">
        {t(ui.contact.subtitle)}
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-hover)] group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Icon size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--color-text-dim)] group-hover:text-[var(--color-accent-hover)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-dim)] mb-1">
                {card.label}
              </p>
              <p className="font-medium break-all">{card.value}</p>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-4 pt-6 border-t border-[var(--color-border)]"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-dim)]">
          {t(ui.contact.socialsLabel)}
        </span>
        <div className="flex gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                aria-label={s.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
