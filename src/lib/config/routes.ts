import type { IconComponent } from "$lib/types";
import {
  IconUser,
  IconPalette,
  IconReadList,
  IconRss,
  IconInbox,
  IconBarChart,
  IconInfo,
  IconSettings6,
} from "$lib/assets/icons";

export type Route = {
  id: string;
  name: string;
  icon: IconComponent;
  isDefault?: boolean;
};

export const settings: Route[] = [
  { id: "general", name: "General", icon: IconSettings6, isDefault: true },
  { id: "account", name: "Account", icon: IconUser },
  { id: "appearance", name: "Appearance", icon: IconPalette },
  { id: "later", name: "Read Later", icon: IconReadList },
  { id: "feed", name: "Feed", icon: IconRss },
  { id: "newsletter", name: "Newsletter", icon: IconInbox },
  { id: "stats", name: "Stats", icon: IconBarChart },
  { id: "about", name: "About", icon: IconInfo },
];
