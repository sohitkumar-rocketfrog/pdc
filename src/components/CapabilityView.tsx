import { motion } from "framer-motion";
import { ArrowUpRight, Database, Globe2, ListChecks, HelpCircle, Link as LinkIcon } from "lucide-react";
import { categories, accentToken } from "@/content/strategy";

type Props = { categoryId: string; capabilityId: string };

export function CapabilityView({ categoryId, capabilityId }: Props) {
  const category = categories.find((c) => c.id === categoryId)!;
  const cap = category.capabilities.find((x) => x.id === capabilityId)!;
  const tok = accentToken[category.accent];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <motion.div
        layoutId={`cap-${cap.id}`}
        className={`relative rounded-2xl border border-[var(--hairline)] ${tok.soft} p-8 md:p-10 mb-8`}
      >
        <span className={`absolute left-8 top-8 inline-block h-2 w-2 rounded-full ${tok.bg}`} />
        <div className={`pl-5 text-[11px] uppercase tracking-[0.22em] font-medium ${tok.text}`}>
          {category.shortName} {cap.code && `· [${cap.code}]`}
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-3 text-foreground">
          {cap.name}
        </h1>
        <p className="mt-4 text-lg text-foreground/80 leading-relaxed">{cap.summary}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="grid gap-6"
      >
        <Section icon={<ListChecks className="h-4 w-4" />} title="Steps to achieve the outcome">
          <ol className="space-y-3">
            {cap.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className={`flex-none mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full ${tok.soft} ${tok.text} text-[11px] font-semibold ring-1 ring-inset ring-current/15`}>
                  {i + 1}
                </span>
                <span className="text-foreground/85">{s}</span>
              </li>
            ))}
          </ol>
        </Section>

        {cap.questions && cap.questions.length > 0 && (
          <Section icon={<HelpCircle className="h-4 w-4" />} title="Questions this answers">
            <ul className="space-y-2">
              {cap.questions.map((q, i) => (
                <li key={i} className="text-sm text-foreground/80 leading-relaxed before:content-['→'] before:mr-2 before:text-muted-foreground">
                  {q}
                </li>
              ))}
            </ul>
          </Section>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <Section icon={<Database className="h-4 w-4" />} title="Internal datasets" muted={cap.internalDatasets.length === 0}>
            {cap.internalDatasets.length === 0 ? (
              <p className="text-xs text-muted-foreground">None specified.</p>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {cap.internalDatasets.map((d) => (
                  <span key={d} className="text-xs rounded-md border border-[var(--hairline)] bg-white px-2 py-1 text-foreground/80">
                    {d}
                  </span>
                ))}
              </div>
            )}
          </Section>

          <Section icon={<Globe2 className="h-4 w-4" />} title="External datasets" muted={cap.externalDatasets.length === 0}>
            {cap.externalDatasets.length === 0 ? (
              <p className="text-xs text-muted-foreground">None specified.</p>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {cap.externalDatasets.map((d) => (
                  <span key={d} className="text-xs rounded-md border border-[var(--hairline)] bg-white px-2 py-1 text-foreground/80">
                    {d}
                  </span>
                ))}
              </div>
            )}
          </Section>
        </div>

        <Section icon={<LinkIcon className="h-4 w-4" />} title="Dataset references" muted={cap.references.length === 0}>
          {cap.references.length === 0 ? (
            <p className="text-xs text-muted-foreground">No external references attached.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-2">
              {cap.references.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-lg border border-[var(--hairline)] bg-white px-3 py-2.5 text-sm text-foreground/85 hover:border-[var(--accent-brand)]/40 hover:text-[var(--accent-brand)] transition-colors"
                >
                  <span className="truncate">{r.label}</span>
                  <ArrowUpRight className="h-4 w-4 flex-none opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          )}
        </Section>
      </motion.div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
  muted,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={`rounded-xl border border-[var(--hairline)] bg-white p-5 ${muted ? "opacity-80" : ""}`}>
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground mb-3">
        <span className="text-foreground/60">{icon}</span>
        {title}
      </div>
      {children}
    </section>
  );
}