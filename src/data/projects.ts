export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Doctor Dashboard",
    description:
      "Full-stack healthcare platform with web dashboard, iOS mobile app, and local-first AI assistant. Features clinical workflows, appointment scheduling, medication management, and ambient visit recording with speech-to-text.",
    tech: [
      "React",
      "Expo / React Native",
      "FastAPI",
      "Supabase",
      "TypeScript",
      "OpenAI",
    ],
    link: "https://github.com/aksajja/doctor-dashboard",
    featured: true,
  },
  {
    title:
      "Overcoming a Bottleneck in Open-Ended VQA (EACL 2021)",
    description:
      "Proposed a new evaluation metric for Visual Question Answering tasks. Trained VilBERT and LXMERT models with an 'Alternative Answer Set' metric on GQA and VQA datasets.",
    tech: ["PyTorch", "VilBERT", "LXMERT", "Python"],
    link: "https://aclanthology.org/2021.eacl-main.240.pdf",
  },
  {
    title: "Pandemic Predictive Modeling (Geographic Review)",
    description:
      "Experiments using Random Forest and VARIMA models to support the patchwork nature of first-wave pandemic governance decisions by US governors.",
    tech: ["Python", "Random Forest", "VARIMA", "GeoPandas"],
    link: "https://www.tandfonline.com/doi/abs/10.1080/00167428.2021.1947139",
  },
  {
    title: "High-Speed Autonomous Drifting with Deep RL",
    description:
      "Used soft actor-critic (off-policy deep RL) for autonomous car drifting in the TORCS simulator.",
    tech: ["PyTorch", "SAC", "TORCS", "Reinforcement Learning"],
    link: "https://github.com/karthikv792/TORCS_SAC_PYTORCH",
  },
];

export default projects;
