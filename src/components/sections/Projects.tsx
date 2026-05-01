import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, Briefcase, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui, projects, type Project } from "@/data/content";

function StatusBadge({ status }: { status: Project["status"] }) {
  const { t } = useI18n();
  if (status === "private") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent-hover)] border border-[var(--color-accent)]/30">
        <Lock size={10} />
        {t(ui.projects.confidential)}
      </span>
    );
  }
  if (status === "freelance") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
        <Briefcase size={10} />
        Freelance
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      Live
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useI18n();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          {project.featured && (
            <Sparkles size={14} className="text-[var(--color-accent-hover)]" />
          )}
          <h3 className="text-lg font-semibold">{t(project.title)}</h3>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed min-h-[60px]">
        {t(project.description)}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent-hover)] hover:text-[var(--color-accent)] transition-colors"
          >
            <ExternalLink size={14} />
            {t(ui.projects.viewLive)}
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <Github size={14} />
            {t(ui.projects.viewCode)}
          </a>
        )}
        {!project.liveUrl && !project.codeUrl && (
          <span className="text-xs text-[var(--color-text-dim)] font-mono">
            {t({ es: "Privado por NDA", en: "NDA-protected" })}
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="projects" subtitle="03" title={t(ui.projects.title)}>
      <p className="text-[var(--color-text-muted)] mb-10 -mt-8">
        {t(ui.projects.subtitle)}
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
