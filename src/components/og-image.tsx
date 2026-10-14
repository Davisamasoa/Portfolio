import { ImageResponse } from "next/og";
import { dictionaries, profile, type Locale } from "@/content";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage(locale: Locale) {
  const t = dictionaries[locale];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0e0e0f",
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,180,138,0.14), transparent 70%)",
          color: "#f1efea",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3a09a" }}>
          <span style={{ color: "#f1efea" }}>{profile.name}</span>
          <span>{t.hero.eyebrow}</span>
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 980 }}>{t.hero.title}</div>
        <div style={{ display: "flex", borderTop: "1px solid #29282a", paddingTop: 24, fontSize: 24, color: "#c9b48a" }}>
          {profile.email}
        </div>
      </div>
    ),
    ogSize,
  );
}
