import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n";
import { ui, profile } from "@/data/content";

export function Hero() {
  const { t } = useI18n();

  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative max-w-4xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] text-xs font-mono"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {t(ui.hero.badge)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] mb-6"
        >
          <span className="block text-gradient">{t(ui.hero.titleA)}</span>
          <span className="block">
            {t(ui.hero.titleB)}{" "}
            <Sparkles
              className="inline-block text-[var(--color-accent)]"
              size={48}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {t(ui.hero.description)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm font-mono text-[var(--color-text-dim)] mb-10"
        >
          <MapPin size={14} />
          {t(profile.location)}
          <span className="mx-1">·</span>
          <span className="text-[var(--color-accent-hover)]">{t(profile.role)}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" onClick={() => goTo("chat")}>
            <Sparkles size={18} />
            {t(ui.hero.ctaPrimary)}
          </Button>
          <Button size="lg" variant="secondary" onClick={() => goTo("projects")}>
            {t(ui.hero.ctaSecondary)}
          </Button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => goTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-dim)] hover:text-[var(--color-accent-hover)] cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
