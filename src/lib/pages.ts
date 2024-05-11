import {
  Users,
  Settings,
  LayoutGrid,
  Presentation,
  Backpack,
  Calendar,
  Rss,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getPages(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname === "/dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/dashboard/feed",
          label: "Feed",
          active: pathname.includes("/dashboard/feed"),
          icon: Rss,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Classes",
      menus: [
        {
          href: "",
          label: "Teach",
          active: pathname.includes("/teach"),
          icon: Presentation,
          submenus: [
            {
              href: "/dashboard/teach",
              label: "All Classes",
              active: pathname === "/dashboard/teach",
            },
            {
              href: "/dashboard/new",
              label: "New Class",
              active: pathname === "/dashboard/teach/new",
            },
          ],
        },
        {
          href: "",
          label: "Study",
          active: pathname.includes("/posts"),
          icon: Backpack,
          submenus: [
            {
              href: "/dashboard/study",
              label: "All Classes",
              active: pathname === "/study",
            },
            {
              href: "/dashboard/study/enroll",
              label: "Enroll",
              active: pathname === "/dashboard/study/enroll",
            },
          ],
        },
        {
          href: "/dashboard/calender",
          label: "Calender",
          active: pathname.includes("/dashboard/calender"),
          icon: Calendar,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashboard/account",
          label: "Account",
          active: pathname.includes("/dashboard/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
