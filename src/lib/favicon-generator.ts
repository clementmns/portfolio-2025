"use server";

import { getCurrentSeason } from "./current-season";
import { getCurrentTheme } from "./current-theme";

// Season and theme-based color mapping
const colorMap = {
  spring: {
    light: { primary: "oklch(55% 0.17 140)", bg: "oklch(1 0 0)" }, // Green
    dark: { primary: "oklch(75% 0.14 140)", bg: "oklch(0.145 0 0)" },
  },
  summer: {
    light: { primary: "oklch(50% 0.18 320)", bg: "oklch(1 0 0)" }, // Pink/Magenta
    dark: { primary: "oklch(72% 0.16 320)", bg: "oklch(0.145 0 0)" },
  },
  autumn: {
    light: { primary: "oklch(50% 0.18 60)", bg: "oklch(1 0 0)" }, // Orange/Yellow
    dark: { primary: "oklch(70% 0.15 60)", bg: "oklch(0.145 0 0)" },
  },
  winter: {
    light: { primary: "oklch(47% 0.15 200)", bg: "oklch(1 0 0)" }, // Blue
    dark: { primary: "oklch(78% 0.12 200)", bg: "oklch(0.145 0 0)" },
  },
} as const;

export async function generateFaviconSVG(): Promise<string> {
  const season = await getCurrentSeason();
  const theme = await getCurrentTheme();

  const resolvedTheme = theme === "system" ? "light" : theme;

  const resolvedSeason = season === "auto" ? "spring" : season;

  const colors =
    colorMap[resolvedSeason as keyof typeof colorMap][resolvedTheme];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <defs>
            <style>
                .bg { fill: ${colors.bg}; }
                .primary { fill: ${colors.primary}; }
                .text {
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 600;
                    font-size: 28px;
                    text-anchor: middle;
                    dominant-baseline: central;
                }
            </style>
        </defs>
        <rect class="bg" width="32" height="32" rx="8"/>
        <rect class="primary" width="32" height="32" rx="8" opacity="0.1"/>
        <text class="primary text" x="16" y="16">✱</text>
    </svg>
`.trim();

  return svg;
}

export async function generateFaviconDataURL(): Promise<string> {
  const svg = await generateFaviconSVG();
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

export async function generateFaviconHTML(): Promise<string> {
  const season = await getCurrentSeason();
  const theme = await getCurrentTheme();
  const resolvedTheme = theme === "system" ? "light" : theme;
  const resolvedSeason = season === "auto" ? "spring" : season;

  const colors =
    colorMap[resolvedSeason as keyof typeof colorMap][resolvedTheme];

  const generateSVG = (size: number) =>
    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
      <defs>
        <style>
          .bg { fill: ${colors.bg}; }
          .primary { fill: ${colors.primary}; }
          .text {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            font-size: ${Math.floor(size * 0.4)}px;
            text-anchor: middle;
            dominant-baseline: central;
          }
        </style>
      </defs>
      <rect class="bg" width="${size}" height="${size}" rx="${Math.floor(size * 0.2)}"/>
      <rect class="primary" x="${Math.floor(size * 0.05)}" y="${Math.floor(size * 0.05)}"
            width="${Math.floor(size * 0.9)}" height="${Math.floor(size * 0.9)}"
            rx="${Math.floor(size * 0.15)}" opacity="0.1"/>
      <text class="primary text" x="${size / 2}" y="${size / 2}">CO</text>
    </svg>
  `.trim();

  const favicon16 = Buffer.from(generateSVG(16)).toString("base64");
  const favicon32 = Buffer.from(generateSVG(32)).toString("base64");
  const favicon180 = Buffer.from(generateSVG(180)).toString("base64");
  const favicon192 = Buffer.from(generateSVG(192)).toString("base64");
  const favicon512 = Buffer.from(generateSVG(512)).toString("base64");

  return `
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${favicon32}" />
    <link rel="icon" type="image/svg+xml" sizes="16x16" href="data:image/svg+xml;base64,${favicon16}" />
    <link rel="icon" type="image/svg+xml" sizes="32x32" href="data:image/svg+xml;base64,${favicon32}" />
    <link rel="apple-touch-icon" sizes="180x180" href="data:image/svg+xml;base64,${favicon180}" />
    <link rel="icon" type="image/svg+xml" sizes="192x192" href="data:image/svg+xml;base64,${favicon192}" />
    <link rel="icon" type="image/svg+xml" sizes="512x512" href="data:image/svg+xml;base64,${favicon512}" />
  `.trim();
}
