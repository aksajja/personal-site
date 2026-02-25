export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: "Arizona State University",
    degree: "M.S. Computer Science (Thesis); GPA: 4.00",
    link: "https://scai.engineering.asu.edu/",
    year: 2022,
  },
  {
    school: "Birla Institute of Technology and Science, Pilani",
    degree: "B.E. Computer Science (Minor in Finance)",
    link: "https://www.bits-pilani.ac.in",
    year: 2016,
  },
];

export default degrees;
