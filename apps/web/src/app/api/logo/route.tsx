import { ImageResponse } from "next/og";

export const runtime = "edge";

const TOOTH_PATH =
  "M256 48c-55 0-88 18-104 36-10 11-18 28-20 48-3 25 2 50 8 74 8 32 18 63 22 96 4 32 6 68 14 96 4 14 10 26 20 34 8 6 17 8 26 4 10-5 17-18 22-36 8-28 14-64 26-92 8-18 18-32 34-32s26 14 34 32c12 28 18 64 26 92 5 18 12 31 22 36 9 4 18 2 26-4 10-8 16-20 20-34 8-28 10-64 14-96 4-33 14-64 22-96 6-24 11-49 8-74-2-20-10-37-20-48C344 66 311 48 256 48z";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const size = parseInt(searchParams.get("size") ?? "1200", 10);
  const bg = searchParams.get("bg") ?? "dark"; // dark | light
  const variant = searchParams.get("v") ?? "full"; // full | icon

  const isDark = bg === "dark";
  const background = isDark
    ? "linear-gradient(135deg, #0B0B0B 0%, #1a1a2e 100%)"
    : "#ffffff";
  const secondColor = isDark ? "#ffffff" : "#1C1917";

  // Icon-only variant (just the tooth)
  if (variant === "icon") {
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
            padding: `${size * 0.12}px`,
          }}
        >
          <svg
            viewBox="60 20 392 472"
            width={size * 0.76}
            height={size * 0.76}
          >
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <path fill="url(#g)" d={TOOTH_PATH} />
          </svg>
        </div>
      ),
      { width: size, height: size }
    );
  }

  // Full logo: tooth + text
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
            gap: `${size * 0.03}px`,
          }}
        >
          <svg
            viewBox="60 20 392 472"
            width={size * 0.3}
            height={size * 0.3}
          >
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <path fill="url(#g)" d={TOOTH_PATH} />
          </svg>
          <span
            style={{
              fontSize: size * 0.12,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#7C3AED",
              lineHeight: 1,
            }}
          >
            WEBS
          </span>
          <span
            style={{
              fontSize: size * 0.09,
              fontWeight: 700,
              letterSpacing: "-0.025em",
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
