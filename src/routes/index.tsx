import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { EcosystemGrid } from "@/components/EcosystemGrid";
import { CategoryView } from "@/components/CategoryView";
import { CapabilityView } from "@/components/CapabilityView";
import { TopNavBar } from "@/components/TopNavBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patient.com · Data Platform Strategy" },
      { name: "description", content: "Interactive ecosystem map of the Patient.com data architecture: five domains, their capabilities, and the datasets that power them." },
      { property: "og:title", content: "Patient.com · Data Platform Strategy" },
      { property: "og:description", content: "Explore the five domains of Patient.com's unified data platform and the capabilities that make it whole." },
    ],
  }),
  component: Index,
});

function Index() {
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [capabilityId, setCapabilityId] = useState<string | undefined>();

  const goHome = () => {
    setCategoryId(undefined);
    setCapabilityId(undefined);
  };
  const selectCategory = (id: string) => {
    setCategoryId(id);
    setCapabilityId(undefined);
  };
  const selectCapability = (id: string) => setCapabilityId(id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {categoryId && (
          <TopNavBar
            key="navbar"
            activeCategoryId={categoryId}
            activeCapabilityId={capabilityId}
            onSelectCategory={selectCategory}
            onSelectCapability={selectCapability}
            onHome={goHome}
          />
        )}
      </AnimatePresence>

      <LayoutGroup>
        <AnimatePresence mode="wait">
          {!categoryId && <EcosystemGrid key="eco" onSelect={selectCategory} />}
          {categoryId && !capabilityId && (
            <CategoryView key={`cat-${categoryId}`} categoryId={categoryId} onSelectCapability={selectCapability} />
          )}
          {categoryId && capabilityId && (
            <CapabilityView key={`cap-${capabilityId}`} categoryId={categoryId} capabilityId={capabilityId} />
          )}
        </AnimatePresence>
      </LayoutGroup>

      <footer className="border-t border-[var(--hairline)] mt-16 py-8 text-center text-xs text-muted-foreground">
        Patient.com · Strategic Data Outcomes · Interactive Visualization
      </footer>
    </div>
  );
}
