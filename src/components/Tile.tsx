import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type ReactNode } from "react";
import { accentToken } from "@/content/strategy";

type Props = {
  layoutId: string;
  accent: keyof typeof accentToken;
  eyebrow?: string;
  title: string;
  summary: string;
  footer?: ReactNode;
  className?: string;
  onClick: () => void;
};

export function Tile({ layoutId, accent, eyebrow, title, summary, footer, className, onClick }: Props) {
  const tok = accentToken[accent];
  return (
    <motion.button
      layoutId={layoutId}
      onClick={onClick}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
      className={`group relative flex flex-col text-left rounded-2xl border border-[var(--hairline)] bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.02),0_8px_24px_-12px_rgba(15,23,42,0.08)] hover:shadow-[0_2px_0_rgba(15,23,42,0.03),0_18px_40px_-16px_rgba(15,23,42,0.18)] hover:border-[var(--accent-brand)]/30 transition-shadow ${className ?? ""}`}
    >
      <span className={`absolute left-6 top-6 inline-block h-2 w-2 rounded-full ${tok.bg}`} />
      {eyebrow && (
        <div className={`pl-5 text-[11px] uppercase tracking-[0.18em] font-medium ${tok.text}`}>{eyebrow}</div>
      )}
      <h3 className="font-serif text-2xl md:text-[28px] leading-tight mt-3 text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{summary}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>{footer}</span>
        <span className="inline-flex items-center gap-1 text-foreground/70 group-hover:text-[var(--accent-brand)] transition-colors">
          Explore
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.button>
  );
}