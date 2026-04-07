import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const size = parseInt(searchParams.get("size") ?? "1200", 10);
  const bg = searchParams.get("bg") ?? "dark"; // dark | light

  const isDark = bg === "dark";
  const background = isDark
    ? "linear-gradient(135deg, #0B0B0B 0%, #1a1a2e 100%)"
    : "#ffffff";
  const secondColor = isDark ? "#ffffff" : "#1C1917";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: size * 0.18,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: "#7C3AED",
              lineHeight: 1,
            }}
          >
            WEBS
          </span>
          <span
            style={{
              fontSize: size * 0.14,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: secondColor,
              lineHeight: 1,
            }}
          >
            CLÍNICAS
          </span>
        </div>
      </div>
    ),
    { width: size, height: size }
  );
}
