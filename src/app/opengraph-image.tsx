import { ImageResponse } from "next/og";
export const alt = "Lucas Fernando Santos Sousa — Psicólogo, CRP 22/05509";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 70, background: "linear-gradient(130deg, #0f2445, #49386c)", color: "white" }}>
      <div style={{ display: "flex", fontSize: 28, color: "#d8cffa" }}>PSICOLOGIA ORGANIZACIONAL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>Lucas Fernando Santos Sousa</div>
        <div style={{ display: "flex", fontSize: 32 }}>Pessoas, carreira e organizações.</div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#dbeafe" }}>Psicólogo · CRP 22/05509</div>
    </div>, size,
  );
}
