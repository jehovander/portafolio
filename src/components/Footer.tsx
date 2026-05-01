import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { profile, ui } from "@/data/content";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-[var(--color-text-muted)]">
            © {year} {profile.name}. {t(ui.footer.rights)}.
          </p>
          <p className="font-mono text-xs text-[var(--color-text-dim)] mt-1">
            {t(ui.footer.builtWith)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
