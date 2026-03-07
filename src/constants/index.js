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
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
      " Conducted requirements analysis for internal systems and tools.",
      "Participated in system design and development of internal workflow solutions.",
      "Developed reporting and automation tools using Microsoft Power Apps, Power Automate, and Power BI.",
    ],
  },
    {
    title: "B.Sc. in Computer Science",
    company_name: "Afeka College",
    icon: afeka,
    iconBg: "#383E56",
    date: "2020 - 2024",
    points: [
      "GPA: 85.",
    ],
  },
    {
    title: "Technical Data Projects Advisor",
    company_name: "Military Intelligence Directorate",
    icon: IDF,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Supported technological projects and contributed to data-related initiatives.",
      "Gained hands-on familiarity with Big Data tools including SQL, Hadoop, Spark, Impala, and Hive."


    ],
  },

   {
    title: "Military Service",
    company_name: "Intelligence Directorate",
     icon: IDF,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "Served in a technological role as the operational focal point, collaborating with system developers and contributing to system specification.",
      "Responsible for hands-on operational use, user training, and ensuring the system’s effective integration into daily operational workflows.",
      "Recipient of the President’s Excellence Award."
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
