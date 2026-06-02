import { motion } from "framer-motion";
import { categories, platformOutcome } from "@/content/strategy";
import { Tile } from "./Tile";

type Props = { onSelect: (id: string) => void };

// Bento layout: 5 tiles tessellating into a "whole"
const spans: Record<string, string> = {
  "consumer-portal": "md:col-span-3 md:row-span-2",
  "product-team": "md:col-span-3 md:row-span-1",
  "business-team": "md:col-span-2 md:row-span-1",
  "revenue-finance": "md:col-span-2 md:row-span-1",
  "support-team": "md:col-span-2 md:row-span-1",
};

export function EcosystemGrid({ onSelect }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14 max-w-3xl"
      >
        <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent-brand)] font-medium">
          Patient.com · Data Architecture
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] mt-4 text-foreground">
          The Data Platform Ecosystem
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {platformOutcome} Five interlocking domains — together they make the whole.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(180px,auto)] gap-4">
        {categories.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * idx }}
            className={spans[c.id]}
          >
            <Tile
              layoutId={`cat-${c.id}`}
              accent={c.accent as never}
              eyebrow={`0${idx + 1} · Domain`}
              title={c.name}
              summary={c.outcome}
              footer={`${c.capabilities.length} capabilities`}
              onClick={() => onSelect(c.id)}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-4 gap-6 text-xs text-muted-foreground border-t border-[var(--hairline)] pt-8">
        <div>
          <div className="font-medium text-foreground mb-1">Immediate Answers</div>
          Pre-processed, curated datasets in the lakehouse.
        </div>
        <div>
          <div className="font-medium text-foreground mb-1">Request-Based Intelligence</div>
          Batch, queue, workflow, or AI-driven processing.
        </div>
        <div>
          <div className="font-medium text-foreground mb-1">Real-Time Operational</div>
          Streaming and event-driven orchestration.
        </div>
        <div>
          <div className="font-medium text-foreground mb-1">AI-Driven Inference</div>
          Recommendation, prediction, optimization, decision support.
        </div>
      </div>
    </div>
  );
}