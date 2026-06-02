import { motion } from "framer-motion";
import { categories, accentToken } from "@/content/strategy";
import { Tile } from "./Tile";

type Props = {
  categoryId: string;
  onSelectCapability: (id: string) => void;
};

export function CategoryView({ categoryId, onSelectCapability }: Props) {
  const category = categories.find((c) => c.id === categoryId)!;
  const tok = accentToken[category.accent];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <motion.div
        layoutId={`cat-${category.id}`}
        className={`relative rounded-2xl border border-[var(--hairline)] ${tok.soft} p-8 md:p-10 mb-10`}
      >
        <span className={`absolute left-8 top-8 inline-block h-2 w-2 rounded-full ${tok.bg}`} />
        <div className={`pl-5 text-[11px] uppercase tracking-[0.22em] font-medium ${tok.text}`}>
          Domain
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-3 text-foreground">
          {category.name}
        </h2>
        <p className="mt-4 text-base text-foreground/75 leading-relaxed max-w-3xl">
          {category.outcome}
        </p>
        <div className="mt-4 text-xs text-muted-foreground">
          {category.capabilities.length} capabilities · click any to explore
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {category.capabilities.map((cap, idx) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 * idx }}
            className="h-full"
          >
            <Tile
              layoutId={`cap-${cap.id}`}
              accent={category.accent as never}
              eyebrow={cap.code ? `[${cap.code}]` : `Capability 0${idx + 1}`}
              title={cap.name}
              summary={cap.summary}
              footer={`${cap.steps.length} step${cap.steps.length === 1 ? "" : "s"} · ${cap.internalDatasets.length + cap.externalDatasets.length} datasets`}
              onClick={() => onSelectCapability(cap.id)}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}