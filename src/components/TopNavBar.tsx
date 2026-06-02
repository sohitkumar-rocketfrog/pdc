import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { categories, accentToken } from "@/content/strategy";

type Props = {
  activeCategoryId: string;
  activeCapabilityId?: string;
  onSelectCategory: (id: string) => void;
  onSelectCapability: (id: string) => void;
  onHome: () => void;
};

export function TopNavBar({ activeCategoryId, activeCapabilityId, onSelectCategory, onSelectCapability, onHome }: Props) {
  const activeCategory = categories.find((c) => c.id === activeCategoryId)!;

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.985_0.005_90/0.85)] border-b border-[var(--hairline)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <button onClick={onHome} className="hover:text-foreground transition-colors font-serif text-base text-foreground">
            Patient.com Data Strategy
          </button>
          <ChevronRight className="h-3 w-3" />
          <span>Ecosystem</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const tok = accentToken[c.accent];
            const isActive = c.id === activeCategoryId;
            return (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`relative inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-foreground/80 bg-foreground text-background"
                    : "border-[var(--hairline)] bg-white text-foreground/70 hover:text-foreground hover:border-foreground/30"
                }`}
              >
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${tok.bg}`} />
                {c.shortName}
              </button>
            );
          })}
        </div>

        {activeCapabilityId && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex flex-wrap gap-1.5 pl-1 border-l-2 border-[var(--hairline)] ml-1"
          >
            {activeCategory.capabilities.map((cap) => {
              const isActive = cap.id === activeCapabilityId;
              return (
                <button
                  key={cap.id}
                  onClick={() => onSelectCapability(cap.id)}
                  className={`rounded-md px-2.5 py-1 text-[11px] transition-colors ${
                    isActive
                      ? "bg-[var(--accent-brand)]/10 text-[var(--accent-brand)] font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {cap.name}
                </button>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}