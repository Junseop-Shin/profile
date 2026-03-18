export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "JavaScript / TypeScript", level: "primary" },
      { name: "React / Next.js", level: "primary" },
      { name: "HTML / CSS / TailwindCSS", level: "secondary" },
      { name: "MobX / tanstack-query", level: "primary" },
      { name: "Webpack / Vite", level: "secondary" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Java / Spring Boot", level: "primary" },
      { name: "SQL / PostgreSQL", level: "primary" },
      { name: "Python / FastAPI", level: "secondary" },
      { name: "MongoDB / Azure TableStorage", level: "secondary" },
    ],
  },
  {
    label: "Infra / DevOps",
    skills: [
      { name: "Azure", level: "primary" },
      { name: "Docker / Nginx", level: "secondary" },
      { name: "GitHub Actions / pm2", level: "secondary" },
      { name: "MQTT / Azure Servicebus", level: "secondary" },
    ],
  },
  {
    label: "Other",
    skills: [
      { name: "C++", level: "secondary" },
      { name: "Git / Jira / Slack", level: "secondary" },
    ],
  },
] as const;

export type SkillLevel = "primary" | "secondary";
