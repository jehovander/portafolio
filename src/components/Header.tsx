import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useI18n } from "@/i18n";
import { ui } from "@/data/content";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: ui.nav.about },
  { id: "skills", label: ui.nav.skills },
  { id: "projects", label: ui.nav.projects },
  { id: "experience", label: ui.nav.experience },
  { id: "chat", label: ui.nav.chat },
  { id: "contact", label: ui.nav.contact },
];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(10,10,10,0.8)] backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm font-medium hover:text-[var(--color-accent-hover)] transition-colors cursor-pointer"
        >
          jehovander<span className="text-[var(--color-accent)]">.dev</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-3 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-1.5 px-3 h-9 rounded-md text-xs font-mono uppercase border border-[var(--color-border-strong)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {lang}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[var(--color-bg-elevated)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-[var(--color-border)] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl"
        >
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-3 py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)] rounded-md cursor-pointer"
              >
                {t(item.label)}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
