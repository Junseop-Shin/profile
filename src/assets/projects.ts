type ProjectType = "personal" | "work";

export interface Project {
  title: string;
  link: string;
  type: ProjectType;
  image: string;
  skills: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "프로필",
    link: "profile",
    type: "personal",
    image: "",
    skills: "",
    description: "A web app for task management.",
  },
  {
    title: "BOLD 웹페이지",
    link: "bold",
    type: "personal",
    image: "/BOLD.png",
    skills: "TypeScript, React, Next.js, Styled-Components",
    description: "A portfolio website for designers.",
  },
  {
    title: "액스",
    link: "ax",
    type: "work",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
  {
    title: "웹오피스",
    link: "weboffice",
    type: "work",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
  {
    title: "오피스",
    link: "office",
    type: "work",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
];
