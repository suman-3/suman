import { History, Home, Settings, WalletMinimal } from "lucide-react";

export const MenuList = [
  {
    id: 1,
    label: "dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    id: 2,
    label: "history",
    href: "/dashboard/history",
    icon: History,
  },
  {
    id: 3,
    label: "billing",
    href: "/dashboard/billing",
    icon: WalletMinimal,
  },
  {
    id: 4,
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
