export interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Java", "C++", "GoLang", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native / Expo", "Tailwind CSS"],
  },
  {
    category: "Backend & Infra",
    items: [
      "Spring Boot",
      "FastAPI / Flask",
      "Node.js",
      "Docker",
      "gRPC",
      "MQTT",
    ],
  },
  {
    category: "AWS",
    items: [
      "CDK",
      "EMR / Hadoop",
      "Lambda",
      "DynamoDB",
      "FSx",
      "MWAA (Airflow)",
      "Athena",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "PostGIS", "DynamoDB", "PineCone"],
  },
  {
    category: "ML / AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "DeepSpeed (ZeRO)",
      "LangChain",
      "Transformers (BERT, GPT, ViT)",
      "CNN",
      "LSTM",
      "GNN",
      "VAR",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Selenium", "Playwright", "Grafana", "Arch Linux"],
  },
];

export default skills;
