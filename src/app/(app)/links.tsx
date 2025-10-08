// NB: Do not add "use client" to this file if you want to build links
// using server side session data like user roles or permissions
import { LuLayoutDashboard, LuFileText } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    url: "/admin",
    icon: <LuLayoutDashboard className="size-5 mr-2" />
  },
  {
    name: "Blog Posts",
    url: "/blog",
    icon: <LuFileText className="size-5 mr-2" />
  },
];

export type Links = (typeof links)[number];
