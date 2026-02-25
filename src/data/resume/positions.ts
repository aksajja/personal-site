export interface Position {
  company: string;
  position: string;
  link: string;
  daterange: string;
  points: string[];
}

const positions: Position[] = [
  {
    company: "Self-employed",
    position: "AI Consulting",
    link: "",
    daterange: "February 2025 – Present",
    points: [
      "Independent AI consulting, helping teams integrate LLMs and ML workflows into production systems.",
      "Building Doctor Dashboard — a full-stack healthcare platform (React, FastAPI, Supabase, Expo) with a local-first AI assistant that achieves 29x speedup over cloud-only approaches.",
    ],
  },
  {
    company: "Amazon",
    position: "Software Engineer",
    link: "https://www.amazon.com",
    daterange: "May 2022 – January 2025",
    points: [
      "Full-stack (Search Explore, May 2023 – Jan 2025): Built server-side rendering with Spring Boot and Amazon APIs to serve 5% of all Amazon.com traffic. Set up telemetry with AWS CDK for monitoring. Developed front-end widgets with TypeScript for a new shopping experience. Created end-to-end testing framework for UI/UX testing.",
      "Applied Science (Search Graph Mining, Nov 2023 – May 2024): Used Cohen-Lewis sampling for query de-duplication on Amazon Search Knowledge Graph (millions of nodes). Quantified query vagueness using eigenspace of attribute-knowledge graphs. Improved model generalization with Gaussian label smoothing.",
      "MLOps (Search M5 Foundational Tech, May 2022 – Jan 2023): Maintained infrastructure-as-code to train 10B-parameter BERT models on Amazon product datasets. Part of 10-member team optimizing $250M/year training budget. Created Docker containers for DeepSpeed on AWS P4DNs (NVIDIA A100s). Built configuration checker saving $10M annually in duplicate compute.",
    ],
  },
  {
    company: "Arizona State University",
    position: "Research Assistant",
    link: "https://scai.engineering.asu.edu/",
    daterange: "June 2020 – April 2022",
    points: [
      "Co-authored publication on graph regularized linear regression (Master's thesis). Advised by Dr. Gautam Dasarathy.",
      "Experimented with Laplacian constraints in GNNs for predicting Covid-19 outcomes. Comparative analysis of SIR models, Random Forests, VAR models, and Graph Neural Networks (STGCN).",
    ],
  },
  {
    company: "Adonmo",
    position: "Founding Engineer",
    link: "https://www.adonmo.com/",
    daterange: "March 2017 – December 2019",
    points: [
      "2nd employee at an ad-tech startup focused on out-of-home advertising using taxis. Saw it grow from $0 to $10M valuation.",
      "Built license plate recognition (OpenALPR) for targeted advertising — unique selling point in raising $100K pre-series funding.",
      "Classified cars using ResNet variant for near real-time targeted ads — key factor in $3M funding round led by Alibaba-backed BAce Capital.",
      "Optimized batch jobs using GPS logs (~2M/day) with PostGIS spatial indexing, achieving 50% speed-up across all analytics jobs.",
      "Full-stack development: maintained web portals and REST APIs for Sales, Operations, Customers, and master Crew portal.",
    ],
  },
  {
    company: "Hewlett Packard",
    position: "Software Developer",
    link: "https://www.hp.com",
    daterange: "August 2016 – February 2017",
    points: [
      "Feature additions to the unified I/O firmware used across all HP printers globally.",
    ],
  },
];

export default positions;
