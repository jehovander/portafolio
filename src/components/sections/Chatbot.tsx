import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, AlertCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { ui } from "@/data/content";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const { t, lang } = useI18n();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const welcomeMessage: Message = {
    role: "assistant",
    content: t(ui.chat.welcome),
  };
  const visibleMessages = messages.length === 0 ? [welcomeMessage] : messages;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(false);
    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          lang,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!data.reply) throw new Error(data.error ?? "no reply");

      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <Section id="chat" subtitle="05" title={t(ui.chat.title)}>
      <p className="text-[var(--color-text-muted)] mb-8 -mt-8 max-w-2xl">
        {t(ui.chat.subtitle)}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden glow-violet"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Bot size={16} className="text-[var(--color-accent-hover)]" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[var(--color-bg-elevated)] rounded-full" />
            </div>
            <div>
              <p className="text-sm font-medium leading-tight">Jehovander AI</p>
              <p className="text-[10px] font-mono text-[var(--color-text-dim)] flex items-center gap-1">
                <Sparkles size={9} />
                {t(ui.chat.poweredBy)}
              </p>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="h-[420px] overflow-y-auto scrollbar-thin px-5 py-6 space-y-5"
        >
          <AnimatePresence initial={false}>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "flex-row-reverse" : "flex-row",
                )}
              >
                <div
                  className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                    msg.role === "user"
                      ? "bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)]"
                      : "bg-[var(--color-accent)]/10",
                  )}
                >
                  {msg.role === "user" ? (
                    <User size={14} className="text-[var(--color-text-muted)]" />
                  ) : (
                    <Bot size={14} className="text-[var(--color-accent-hover)]" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                    msg.role === "user"
                      ? "bg-[var(--color-accent)] text-white rounded-tr-sm"
                      : "bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-tl-sm",
                  )}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[var(--color-accent)]/10">
                <Bot size={14} className="text-[var(--color-accent-hover)]" />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
                <div className="flex items-center gap-1">
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)]" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)]" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)]" />
                </div>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-300"
            >
              <AlertCircle size={16} className="shrink-0" />
              <span>{t(ui.chat.error)}</span>
            </motion.div>
          )}
        </div>

        {messages.length === 0 && (
          <div className="px-5 py-3 border-t border-[var(--color-border)] flex flex-wrap gap-2">
            {ui.chat.suggestions[lang].map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={loading}
                className="px-3 py-1.5 text-xs rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)] transition-colors cursor-pointer disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="p-3 border-t border-[var(--color-border)] flex gap-2 items-end bg-[var(--color-bg-elevated)]"
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={t(ui.chat.placeholder)}
            rows={1}
            disabled={loading}
            className="flex-1 resize-none bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none transition-colors max-h-32 scrollbar-thin"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label={t(ui.chat.send)}
          >
            <Send size={16} />
          </button>
        </form>
      </motion.div>
    </Section>
  );
}
