export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Apocalypse Rising 2 Wiki",
  shortName: "Apocalypse Rising 2",
  logoText: "A",
  tagline: "Weapons, Maps, Loot & Survival Guides",
  description: "Fan-made Apocalypse Rising 2 wiki with weapons, maps, loot locations, vehicles, cosmetics and survival guides for Roblox players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apocalypterwiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://apocalypterwiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/863266079/Apocalypse-Rising-2",
  heroVideoId: "952xVTWVGKU", // Apocalypse Rising 2 ultimate beginner guide (gameplay/tutorial)
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
