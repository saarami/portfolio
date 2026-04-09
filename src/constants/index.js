import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  python,
  postgres,
  git,
  redis,
  docker,
  IDF,
  afeka,
  mosenson,
  proteinLogo,
  bitaxe,
  fastapi,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "projects",
    title: "Projects",
  },
    {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "React / React Native Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
   name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Fast Api",
    icon: fastapi,
  },
    {
    name: "postgres",
    icon: postgres,
  },
    {
    name: "redis",
    icon: redis,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Application Developer",
    company_name: "Military Intelligence Directorate",
    icon: IDF,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Took part in a large-scale military construction project",
      "Worked as part of a development team building an internal web application for data input, analysis, and reporting",
      "Designed to support tracking of project progress and milestones",
    ],
  },
    {
    title: "B.Sc. in Computer Science",
    company_name: "Afeka College",
    icon: afeka,
    iconBg: "#383E56",
    date: "2020 - 2024",
    points: [
      "GPA: 85",
    ],
  },
    {
    title: "Data Engineer",
    company_name: "Military Intelligence Directorate",
    icon: IDF,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Worked on internal technology projects dealing with large volumes of data",
      "Worked in an environment involving Big Data technologies such as Hadoop, Spark, Impala, and Hive"
    ],
  },

   {
    title: "Military Service",
    company_name: "Intelligence Directorate",
     icon: IDF,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
    "Served in a technological operational role, working between system users and developers",
    "Helped define requirements for a classified intelligence system and integrate it into daily workflows",
    "Recipient of the President Excellence Award"
    ],
  },

    {
    title: "Practical Engineer - Electronics & Computers",
    company_name: "Mosenson College",
    icon: mosenson,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "GPA: 95",
    ],
  },
  
];


const projects = [
  {
    name: "Protein Tracker",
    description:
      "A smart and simple nutrition tracker that allows users to enter free-text meals and instantly receive calorie and protein insights, track daily goals, and monitor long-term progress.",
    tags: [
      {name: "Python"},
      {name: "FastAPI"},
      {name: "REST API"},
      {name: "PostgreSQL"},
      {name: "Redis"},
      {name: "JWT Authentication"},
      {name: "Docker"},
      {name: "AWS"},
      {name: "Terraform"},

    ],
    image: proteinLogo,
    source_code_link: "https://github.com/saarami/protein-calorie-tracker-ai",
  },
  {
    name: "Bitaxe Miner Monitor",
    description:
      "Backend system for monitoring a home Bitcoin miner (Bitaxe Gamma 601), built as a personal project that started from a hobby and evolved into a full backend system.",
    tags: [
      {name: "Python"},
      {name: "FastAPI"},
      {name: "REST API"},
      {name: "PostgreSQL"},
      {name: "Docker"},
      {name: "Telemetry Monitoring"},
      {name: "Telegram Bot"},
     
    ],
    image: bitaxe,
    source_code_link: "https://github.com/saarami/bitaxe-monitor",
  },

];

export { services, technologies, experiences, projects };
