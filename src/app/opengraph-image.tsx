import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

// Dynamic social share image (used by LinkedIn, X, WhatsApp, etc.).
// Mirrors the site's dark terminal aesthetic.
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          backgroundImage:
            "linear-gradient(#17171b 1px, transparent 1px), linear-gradient(90deg, #17171b 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          padding: 64,
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            borderRadius: 24,
            border: "1px solid #26262c",
            backgroundColor: "#111114",
            overflow: "hidden",
          }}
        >
          {/* Terminal title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "20px 28px",
              borderBottom: "1px solid #26262c",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 9999, backgroundColor: "#ff5f56" }} />
            <div style={{ width: 14, height: 14, borderRadius: 9999, backgroundColor: "#ffbd2e" }} />
            <div style={{ width: 14, height: 14, borderRadius: 9999, backgroundColor: "#27c93f" }} />
            <div style={{ marginLeft: 16, fontSize: 22, color: "#8b8b94" }}>
              ~/robertcoder — zsh
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              padding: "0 56px",
            }}
          >
            <div style={{ fontSize: 28, color: "#34d399", marginBottom: 16 }}>
              {profile.handle}
            </div>
            <div
              style={{
                fontSize: 76,
                fontWeight: 700,
                color: "#ededf0",
                lineHeight: 1.05,
                letterSpacing: -1,
              }}
            >
              {profile.name}
            </div>
            <div style={{ fontSize: 40, color: "#34d399", marginTop: 20 }}>
              {profile.role}
            </div>
          </div>

          {/* Footer prompt */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "24px 56px",
              borderTop: "1px solid #26262c",
              fontSize: 26,
              color: "#8b8b94",
            }}
          >
            <span style={{ color: "#34d399" }}>$</span>
            <span>robertcoder.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
