export type DatasetRef = {
  label: string;
  url: string;
};

export type Capability = {
  id: string;
  code?: string;
  name: string;
  summary: string;
  description: string;
  steps: string[];
  internalDatasets: string[];
  externalDatasets: string[];
  questions?: string[];
  references: DatasetRef[];
};

export type Category = {
  id: string;
  name: string;
  shortName: string;
  outcome: string;
  accent: string; // tailwind class fragment for accent
  capabilities: Capability[];
};

export const platformOutcome =
  "A unified data platform that transforms raw, multi-source healthcare data into intelligent, personalized experiences across every team.";

export const categories: Category[] = [
  {
    id: "consumer-portal",
    name: "Patient.com Consumer Portal",
    shortName: "Consumer Portal",
    outcome:
      "A unified data platform serves as the intelligent backend that transforms raw data and inputs to provide personalized user experience and guidance.",
    accent: "teal",
    capabilities: [
      {
        id: "cost-guidance",
        code: "4.x",
        name: "Cost Guidance",
        summary:
          "Move patients from confusion to clarity on their out-of-pocket financial responsibility.",
        description:
          "We help patients understand expected healthcare costs by providing estimated pricing guidance grounded in negotiated payer-provider rates.",
        steps: [
          "Bulk Data ingestion.",
          "Dataset orchestration from multiple sources, followed by additional processing.",
          "API-based direct data access (e.g. IMO Health) — data is typically incomplete and still requires enrichment from additional sources.",
        ],
        internalDatasets: [],
        externalDatasets: [
          "Translating user query to medical procedure",
          "Matching medical procedure to CPT / HCPCS codes",
          "Mapping CPT / HCPCS codes to Payer–Provider negotiated cost",
        ],
        references: [
          { label: "Core Procedure Resolution Data Sources", url: "https://drive.google.com/drive/folders/1yCO4h8JvMUdiHLZ4nOreicrcOgug4OzK?usp=drive_link" },
          { label: "Pricing Market Sources — Mobile, Alabama", url: "https://drive.google.com/drive/folders/1AMZgbbWwwzBGpgsphTojyqaVOrfYwh-j?usp=drive_link" },
        ],
      },
      {
        id: "eligibility-benefits",
        code: "4.x",
        name: "Interpret Eligibility Benefits",
        summary:
          "Help users understand their insurance coverage and uncover lesser-known plan benefits.",
        description:
          "Answer inference-based questions using eligibility and plan-document intelligence. 271 transactions and Plan PDFs are ingested and enriched with EDI data to generate a unified benefits understanding layer.",
        steps: [
          "Ingest 271 transactions and Plan PDF documents.",
          "Enrich together with EDI data to produce a unified benefits layer.",
        ],
        internalDatasets: ["271 & Plan PDF documents", "EDI Data"],
        externalDatasets: [],
        references: [],
      },
      {
        id: "preventive-care",
        code: "4.x",
        name: "Preventive Care",
        summary:
          "Move patients from reactive to proactive by surfacing timely care opportunities.",
        description:
          "Combine crawled regulatory and clinical sources with plan benefits and personal health records to recommend timely preventive actions.",
        steps: [
          "Crawl & ingest mostly-static data sources into the data platform.",
          "Enrich together with Plan PDF documents.",
          "Layer in the user's personal health records.",
        ],
        internalDatasets: [
          "271 & Plan PDF documents",
          "EDI Data",
          "Claim settlement data",
        ],
        externalDatasets: [
          "Web sources (Government & Regulatory sources, medical journals)",
        ],
        references: [{ label: "Preventive Care — Data v1.xlsx", url: "https://docs.google.com/spreadsheets/d/1OD6tDk5tmbRwlaf6-sVWl5Hjw3s7gNin/edit?usp=drive_link&ouid=109222184301780375049&rtpof=true&sd=true" }],
      },
      {
        id: "affordability-pathways",
        code: "4.x",
        name: "Junction Box: Affordability Pathways",
        summary:
          "Redirect users to sponsors, FQHCs, and assistance programs to lessen out-of-pocket burden.",
        description:
          "Users often understand their coverage and see the cost but cannot move forward. This capability surfaces available programs to reduce the patient's financial burden.",
        steps: [
          "Periodically crawl & ingest data sources into the data platform.",
          "Enrich together with 271, Plan PDF documents and EDI Data.",
        ],
        internalDatasets: [
          "271 & Plan PDF documents",
          "EDI Data",
          "Claim settlement data",
        ],
        externalDatasets: [
          "Web sources (Provider websites, medical journals)",
          "Assistance Program datasets",
          "Community Healthcare datasets",
        ],
        references: [
          { label: "Junction Box: Affordability Pathways data references", url: "https://docs.google.com/document/d/1qvaVh71eNIC4kBbfObwp79PvE5fqWpWh9X-c_95hi1c/edit?usp=sharing" },
        ],
      },
      {
        id: "payer-advisor",
        code: "4.x",
        name: "Junction Box: Payer Advisor",
        summary:
          "Personalized insurance plan comparison and break-even guidance from claims data.",
        description:
          "Convert plan variables into personalized guidance — e.g. \"Plan 2 costs less in premiums but more per visit; at X visits, the total cost is Y\" — to help users choose the most appropriate plan.",
        steps: [
          "Periodically crawl & ingest data sources into the data platform.",
          "Orchestrate datasets from multiple sources with further processing.",
          "Enrich together with Plan PDF documents.",
        ],
        internalDatasets: [
          "271 & Plan PDF documents",
          "EDI Data",
          "Claim settlement data",
        ],
        externalDatasets: [
          "Web sources (Payer websites)",
          "Plan Master datasets",
          "Benefit Structure datasets",
        ],
        references: [
          { label: "Junction Box: Payer Advisor data references", url: "https://docs.google.com/document/d/1gpLpbNCxlmy2Cu2Cbe-fNk86rIw8MmgYP0tfj-J8Bq4/edit?usp=sharing" },
        ],
      },
      {
        id: "provider-selection",
        code: "5.x",
        name: "Junction Box: Provider Selection",
        summary:
          "Validate in-network status against the user's exact insurance tier in real time.",
        description:
          "Patients waste hours calling listed 'in-network' providers only to find they are retired or not accepting new patients. Phase 2 of this feature eliminates out-of-network surprises and lowers overall cost.",
        steps: [
          "Periodically crawl & ingest data sources into the data platform.",
          "Enrich together with Plan PDF documents.",
        ],
        internalDatasets: [
          "271 & Plan PDF documents",
          "EDI Data",
          "Claim settlement data",
        ],
        externalDatasets: [
          "Web sources (Provider websites, medical journals)",
        ],
        references: [
          { label: "Junction Box: Provider Selection data references", url: "https://docs.google.com/document/d/1P5GUzPGJR0mBkoADKslnfL3ZFwAKrnzeQmzK9hH0P-c/edit?usp=sharing" },
        ],
      },
      {
        id: "clinical-sponsored",
        code: "5.x",
        name: "Junction Box: Clinical Sponsored Opportunities",
        summary:
          "Surface provider-funded discounts such as discounted imaging or after-hours slots.",
        description:
          "Patients often miss the discounts run by providers due to lack of discoverability. Patient.com surfaces clinical opportunities funded by providers or systems.",
        steps: [
          "Periodically crawl & ingest data sources into the data platform.",
          "API-based data access from a 3rd-party aggregator, enriched together with crawled data.",
        ],
        internalDatasets: ["User behavioral data ingested in the data platform"],
        externalDatasets: [
          "Web sources (Provider websites, medical journals)",
        ],
        references: [
          { label: "Junction Box: Clinical Sponsored Opportunities data references", url: "https://docs.google.com/document/d/12XOp6YgNgHTx0q2hC5xOCdH4CIHzliL08RcDEr8BlMA/edit?usp=sharing" },
        ],
      },
    ],
  },
  {
    id: "product-team",
    name: "Product Team",
    shortName: "Product",
    outcome:
      "Unified behavioral, operational, and healthcare intelligence to continuously improve user journeys, launch new capabilities, and optimize engagement, conversion, and retention.",
    accent: "indigo",
    capabilities: [
      {
        id: "consumer-journey",
        name: "Consumer Journey Intelligence",
        summary:
          "Understand navigation behavior, abandonment points, and decision friction.",
        description:
          "Optimize medical search journeys and affordability guidance flows, and identify which experiences drive higher engagement and trust.",
        steps: [
          "Behavioral event ingestion into the data platform.",
          "Real-time event stream orchestration.",
        ],
        questions: [
          "Where do users abandon a journey (e.g. during cost guidance)?",
          "Which journeys convert users toward affordability pathways?",
          "Which feature category generates the highest repeat engagement?",
        ],
        internalDatasets: [
          "Application interaction events",
          "Session telemetry",
          "User engagement metrics",
          "Search and clickstream data",
          "AI interaction logs",
          "Pendo",
        ],
        externalDatasets: [],
        references: [],
      },
      {
        id: "feature-performance",
        name: "Feature Performance Intelligence",
        summary:
          "Measure feature adoption, retention impact, and engagement quality.",
        description:
          "Evaluate performance of affordability, payer advisory, and preventive care features, and prioritize roadmap investments using data-backed insights.",
        steps: ["Centralized product analytics layer for feature-level data."],
        questions: [
          "Which feature drives the highest retention uplift?",
          "Which cost guidance modules have low completion rates?",
          "Which recommendation flows increase conversion to providers?",
        ],
        internalDatasets: [
          "Feature usage telemetry",
          "Funnel analytics datasets",
          "Retention cohorts",
          "User segmentation datasets",
          "Pendo",
        ],
        externalDatasets: [],
        references: [],
      },
      {
        id: "voc-sentiment",
        name: "Voice of Customer & Sentiment Intelligence",
        summary:
          "Harvest structured and unstructured feedback to feed roadmap prioritization.",
        description:
          "Identify trust gaps, usability issues, and emerging consumer concerns using user sentiment intelligence.",
        steps: [
          "VOC / feedback ingestion and classification.",
          "Market demand intelligence pipelines — curated healthcare category demand datasets.",
        ],
        questions: [
          "What are the most common frustrations in medical billing guidance?",
          "Which healthcare journeys create confusion?",
          "Which medical procedures most often cause user frustration?",
        ],
        internalDatasets: [
          "Survey responses",
          "Session replay metadata",
          "Medical taxonomy datasets",
        ],
        externalDatasets: ["Geographic demand indicators"],
        references: [
          { label: "Voice of Customer & Sentiment Intelligence data references", url: "#" },
        ],
      },
    ],
  },
  {
    id: "business-team",
    name: "Business Team (MIS / Strategy)",
    shortName: "Business",
    outcome:
      "Integrated ecosystem intelligence and monetization visibility to drive growth, partnerships, expansion strategy, and sustainable revenue.",
    accent: "amber",
    capabilities: [
      {
        id: "ecosystem-performance",
        name: "Ecosystem Performance Intelligence",
        summary:
          "Evaluate platform-wide ecosystem health across providers, payers, financing, and partners.",
        description:
          "Measure strategic effectiveness of marketplace interactions through a unified partner intelligence layer.",
        steps: [
          "Unified partner intelligence layer: provider and payer operational datasets enriched with periodically crawled external sources.",
        ],
        questions: [
          "Which provider partnerships generate highest engagement?",
          "Which payer pathways convert most effectively?",
          "Which regions demonstrate the strongest growth?",
          "Which sponsorship opportunities improve ecosystem value?",
          "Which financing programs generate the highest referral revenue?",
        ],
        internalDatasets: [
          "Provider engagement datasets",
          "Payer referral datasets",
          "Marketplace transaction datasets",
          "Partnership performance metrics",
          "Regional growth metrics",
          "Clinical sponsorship datasets",
        ],
        externalDatasets: ["Trusted healthcare sources / reports"],
        references: [
          { label: "Ecosystem Performance Intelligence data references", url: "#" },
        ],
      },
      {
        id: "operational-mis",
        name: "Operational MIS & Executive Intelligence",
        summary:
          "Near real-time operational visibility for leadership and cross-functional KPI monitoring.",
        description:
          "Centralized executive reporting layer that surfaces curated business KPIs and dashboards to support strategic planning and forecasting.",
        steps: [
          "Centralized executive reporting layer for curated business KPIs.",
        ],
        questions: [
          "What are the current platform growth trends?",
          "Which product areas underperform operationally?",
          "Which business units require intervention?",
        ],
        internalDatasets: [
          "Executive KPI datasets",
          "Operational metrics",
          "Growth analytics",
          "Customer acquisition datasets",
          "Platform performance metrics",
        ],
        externalDatasets: [],
        references: [],
      },
    ],
  },
  {
    id: "revenue-finance",
    name: "Revenue & Finance Team",
    shortName: "Revenue & Finance",
    outcome:
      "Financial intelligence, revenue visibility, operational cost, and predictive forecasting to support scalable, sustainable platform growth.",
    accent: "emerald",
    capabilities: [
      {
        id: "financial-planning",
        name: "Financial Planning — Show me the money",
        summary:
          "Simulate revenue scenarios, break-even outcomes, and identify underserved regions.",
        description:
          "Align revenue goals with budget planning and identify key drivers impacting profitability and risk. Centralized revenue intelligence pipelines with RevOps events and attribution datasets in the data platform.",
        steps: [
          "Centralized revenue intelligence pipelines.",
          "RevOps events and attribution datasets managed in the data platform.",
        ],
        questions: [
          "Which revenue stream has the fastest path to meaningful contribution?",
          "What sales & marketing budget is required to reach a revenue target?",
          "Which customer demographic is more likely to pay?",
          "Which assumptions should Patient.com validate first in the market?",
          "Which regions should be prioritized for launch?",
        ],
        internalDatasets: [
          "Provider Partner Revenue",
          "Insurance / Coverage Partner Revenue",
          "Affordability & Financing Revenue",
          "Direct Acquisition Revenue",
          "Referral payout datasets",
          "Product Adoption metrics",
          "Acquisition Channel metrics",
        ],
        externalDatasets: [
          "HRSA Health Professional Shortage Areas — Health Workforce Shortage Areas",
        ],
        references: [
          { label: "HRSA — Health Workforce Shortage Areas", url: "#" },
        ],
      },
      {
        id: "compliance-audit",
        name: "Compliance, Audit & Governance Ready",
        summary:
          "Improve financial transparency, reporting readiness, and auditability.",
        description:
          "Governance metrics and financial audit datasets exposed internally, with audit-ready financial lineage and reconciliation datasets established.",
        steps: [
          "Expose governance metrics and financial audit datasets internally.",
          "Establish audit-ready financial lineage and reconciliation datasets.",
        ],
        internalDatasets: [
          "Financial audit logs",
          "Revenue lineage datasets",
          "Partner payout records",
        ],
        externalDatasets: [],
        references: [],
      },
    ],
  },
  {
    id: "support-team",
    name: "Support Team",
    shortName: "Support",
    outcome:
      "Unified consumer context, AI-assisted resolution, and operational intelligence to deliver faster, more accurate, and personalized support.",
    accent: "rose",
    capabilities: [
      {
        id: "consumer-support",
        name: "Consumer Support Intelligence",
        summary:
          "Give agents a unified view of the consumer's details, interactions, and support history.",
        description:
          "Eliminate the need for consumers to repeatedly explain their situation across channels. Assist support teams with contextual recommendations and next-best actions to enable faster resolution.",
        steps: [
          "Consolidate profile, insurance, product interaction, and support activity data into a unified support view.",
        ],
        questions: [
          "What eligibility or cost-guidance interactions has the user recently performed?",
          "Has the user experienced previous issues with coverage, claims, or affordability?",
          "What recommendations were previously shown to the user?",
          "Which support issues are recurring for this consumer?",
        ],
        internalDatasets: [
          "Consumer profile datasets",
          "Eligibility & benefits datasets",
          "Product interaction history",
          "AI chatbot interaction logs",
          "User activity timeline",
          "Support case history",
          "Claims guidance history",
          "Affordability pathway recommendations",
        ],
        externalDatasets: [],
        references: [],
      },
      {
        id: "support-ops",
        name: "Support Operations Intelligence",
        summary:
          "Monitor support effectiveness, recurring navigation challenges, and CSAT.",
        description:
          "Continuously process customer interaction and operational data to surface insights and trends that improve support processes.",
        steps: [
          "Continuously process customer interaction and operational data to enable insights and trends.",
        ],
        questions: [
          "What are the most common support issues?",
          "Which user journeys generate the highest number of support tickets?",
          "Which issue categories have the longest resolution times?",
          "Which chatbot conversations frequently lead to agent escalation?",
        ],
        internalDatasets: [
          "Ticket volumes",
          "Resolution TAT",
          "First-contact resolution metrics",
          "Customer satisfaction scores (CSAT)",
          "Support interaction logs",
          "Chatbot-to-agent handoff data",
          "Consumer journey abandonment data",
        ],
        externalDatasets: [],
        references: [],
      },
    ],
  },
];

export const accentToken: Record<string, { bg: string; ring: string; text: string; soft: string }> = {
  teal: { bg: "bg-[oklch(0.72_0.10_195)]", ring: "ring-[oklch(0.72_0.10_195)]", text: "text-[oklch(0.40_0.08_195)]", soft: "bg-[oklch(0.96_0.025_195)]" },
  indigo: { bg: "bg-[oklch(0.62_0.13_270)]", ring: "ring-[oklch(0.62_0.13_270)]", text: "text-[oklch(0.38_0.10_270)]", soft: "bg-[oklch(0.96_0.025_270)]" },
  amber: { bg: "bg-[oklch(0.78_0.13_75)]", ring: "ring-[oklch(0.78_0.13_75)]", text: "text-[oklch(0.42_0.09_60)]", soft: "bg-[oklch(0.97_0.03_80)]" },
  emerald: { bg: "bg-[oklch(0.68_0.12_160)]", ring: "ring-[oklch(0.68_0.12_160)]", text: "text-[oklch(0.38_0.09_160)]", soft: "bg-[oklch(0.96_0.03_160)]" },
  rose: { bg: "bg-[oklch(0.72_0.12_15)]", ring: "ring-[oklch(0.72_0.12_15)]", text: "text-[oklch(0.42_0.10_15)]", soft: "bg-[oklch(0.97_0.025_15)]" },
};