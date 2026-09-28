import { BookOpen, Map, Package, Settings, Swords, TrendingUp, Users, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Settings, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
