export interface Publication {
  title: string;
  venue: string;
  year: number;
  link: string;
}

const publications: Publication[] = [
  {
    title:
      "Graph Regularized Linear Regression (Master's Thesis)",
    venue: "Arizona State University",
    year: 2022,
    link: "",
  },
  {
    title:
      "Just because you are right, doesn't mean I am wrong: Overcoming a Bottleneck in Open-Ended VQA",
    venue: "EACL 2021",
    year: 2021,
    link: "https://aclanthology.org/2021.eacl-main.240.pdf",
  },
  {
    title:
      "Understanding the Spatial Patchwork of Predictive Modeling of First Wave Pandemic Decisions by US Governors",
    venue: "Geographic Review",
    year: 2021,
    link: "https://www.tandfonline.com/doi/abs/10.1080/00167428.2021.1947139",
  },
];

export default publications;
