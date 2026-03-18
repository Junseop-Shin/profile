import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#09090b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#71717a",
          fontSize: 32,
        }}
      >
        Not Found
      </div>,
      { ...size }
    );
  }

  const typeLabel =
    project.company ?? (project.type === "work" ? "WORK" : "PERSONAL");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #09090b 0%, #18181b 55%, #1e1b4b 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top: type badge */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "rgba(99,102,241,0.2)",
            border: "1px solid rgba(99,102,241,0.5)",
            borderRadius: 24,
            padding: "8px 22px",
            color: "#818cf8",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          {typeLabel.toUpperCase()}
        </div>
      </div>

      {/* Middle: title + subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            color: "#ffffff",
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {project.title}
        </div>
        <div style={{ color: "#a1a1aa", fontSize: 28 }}>
          {project.subtitle}
        </div>
      </div>

      {/* Bottom: stack tags + author/period */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.stack.slice(0, 5).map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "6px 18px",
                color: "#d4d4d8",
                fontSize: 16,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          <div style={{ color: "#ffffff", fontSize: 22, fontWeight: 700 }}>
            Junseop Shin
          </div>
          <div style={{ color: "#71717a", fontSize: 16 }}>
            {project.period}
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
