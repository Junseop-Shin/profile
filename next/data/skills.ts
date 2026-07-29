export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "JavaScript / TypeScript", level: "primary" },
      { name: "React / Next.js", level: "primary" },
      { name: "tanstack-query / Zustand", level: "primary" },
      { name: "MobX", level: "secondary" },
      { name: "HTML / CSS", level: "secondary" },
      { name: "Radix UI / shadcn/ui / TailwindCSS / CVA", level: "secondary" },
      { name: "Webpack / Vite", level: "secondary" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Java / Spring Boot", level: "primary" },
      { name: "MySQL / PostgreSQL", level: "primary" },
      { name: "MongoDB", level: "primary" },
      { name: "Python / FastAPI", level: "secondary" },
      { name: "Go", level: "secondary" },
    ],
  },
  {
    label: "Infra / DevOps",
    skills: [
      { name: "Azure / APIM", level: "primary" },
      { name: "Azure Storage Account / Table Storage", level: "secondary" },
      { name: "Docker / Nginx / pm2", level: "secondary" },
      { name: "GitHub Actions / Self-hosted Runner / OIDC", level: "secondary" },
      { name: "Key Vault / Entra ID", level: "secondary" },
      { name: "MQTT(EMQX) / Service Bus / Kafka(Event Hubs)", level: "secondary" },
    ],
  },
  {
    label: "Other",
    skills: [
      { name: "C++", level: "secondary" },
      { name: "Slack Bot / Webhook", level: "secondary" },
    ],
  },
] as const;

export type SkillLevel = "primary" | "secondary";
