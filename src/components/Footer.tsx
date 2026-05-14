import { useI18n } from "@/i18n";
import { profile, ui } from "@/data/content";

// Workana variant: no external contact channels in the footer either.
// Visitors that come from Workana go back through Workana to message.

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
        <a
          href={profile.workana}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent-hover)] transition-colors text-center md:text-right"
        >
          {t(ui.contact.workanaCta)} →
        </a>
      </div>
    </footer>
  );
}
