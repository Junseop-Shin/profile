type ProjectType = "personal" | "work";

export interface Project {
  type: ProjectType;
  title: string;
  subtitle: string;
  date: string;
  skills: string;
  link: string;
  git?: string;
  image: string;
  description?: string[];
  subProjects?: Project[];
}

export const projects: Project[] = [
  {
    type: "personal",
    title: "프로필",
    subtitle: "A web app for task management.",
    date: "2023.10",
    skills: "",
    link: "profile",
    image: "",
    description: [""],
  },
  {
    type: "personal",
    title: "BOLD 웹페이지",
    subtitle: "A portfolio website for designers.",
    date: "2025.03 ~ 2025.04",
    skills: "TypeScript, React, Next.js, Styled-Components",
    link: "bold",
    image: "/BOLD.png",
    description: [],
    subProjects: [
      {
        type: "personal",
        title: "BOLD 웹페이지",
        subtitle: "A portfolio website for designers.",
        date: "2025.03 ~ 2025.04",
        skills: "TypeScript, React, Next.js, Styled-Components",
        link: "https://boldgobynd.vercel.app/",
        git: "https://github.com/Junseop-Shin/boldgobynd",
        image: "/BOLD.png",
        description: ["1", "2"],
      },
    ],
  },
  {
    type: "work",
    title: "액스",
    subtitle: "A portfolio website for designers.",
    date: "2023.10",
    skills: "",
    link: "ax",
    image: "",
    description: [],
  },
  {
    type: "work",
    title: "웹오피스",
    subtitle: "A portfolio website for designers.",
    date: "2023.10",
    skills: "",
    link: "weboffice",
    image: "",
    description: [],
  },
  {
    type: "work",
    title: "오피스",
    subtitle: "A portfolio website for designers.",
    date: "2023.10",
    skills: "",
    link: "office",
    image: "",
    description: [],
  },
];
