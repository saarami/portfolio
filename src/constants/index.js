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
    title: "Knowledge Management Developer",
    company_name: "Military Intelligence Directorate",
    icon: IDF,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Worked with users to understand requirements for internal systems and tools",
      "Took part in designing internal workflow solutions",
      "Built internal workflow and reporting tools using Microsoft Power Apps, Power Automate, and Power BI",
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
    title: "Technical Data Projects Advisor",
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
    "Helped define system requirements and supported the integration of the system into daily operational workflows",
    "Trained users and assisted teams during system rollout and adoption"
    ],
  },

    {
    title: "Practical Engineer - Electronics & Computers",
    company_name: "Mosenson College",
    icon: mosenson,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "GPA: 95.",
    ],
  },
  
];


const projects = [
  {
    name: "Protein Tracker",
    description:
      "A smart and simple nutrition tracker that allows users to enter free-text meals and instantly receive calorie and protein insights, track daily goals, and monitor long-term progress.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: proteinLogo,
    source_code_link: "https://github.com/saarami/protein-calorie-tracker-ai",
  },
  {
    name: "Bitaxe Miner Monitor",
    description:
      "Backend system for monitoring a home Bitcoin miner (Bitaxe Gamma 601), built as a personal project that started from a hobby and evolved into a full backend system.",
    tags: [
      {
        name: "RestAPI",
        color: "blue-text-gradient",
      },
      {
        name: "webhook",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: bitaxe,
    source_code_link: "https://github.com/saarami/bitaxe-monitor",
  },

];

export { services, technologies, experiences, projects };
