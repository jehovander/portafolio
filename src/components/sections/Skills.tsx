import { motion } from "framer-motion";
import { Brain, Code2, Layout, Server, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui, skills } from "@/data/content";

const groups: { key: keyof typeof skills; icon: LucideIcon; labelKey: keyof typeof ui.skills.groups }[] = [
  { key: "ai", icon: Brain, labelKey: "ai" },
  { key: "languages", icon: Code2, labelKey: "languages" },
  { key: "frontend", icon: Layout, labelKey: "frontend" },
  { key: "backend", icon: Server, labelKey: "backend" },
  { key: "database", icon: Database, labelKey: "database" },
  { key: "tools", icon: Wrench, labelKey: "tools" },
];

export function Skills() {
  const { t } = useI18n();

  return (
    <Section id="skills" subtitle="02" title={t(ui.skills.title)}>
      <p className="text-[var(--color-text-muted)] mb-10 -mt-8">{t(ui.skills.subtitle)}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group, i) => {
          const Icon = group.icon;
          const items = skills[group.key];
          return (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-hover)] group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-sm tracking-wide">
                  {t(ui.skills.groups[group.labelKey])}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
