// NB: Do not add "use client" to this file if you want to build links
// using server side session data like user roles or permissions
import { LuLayoutDashboard, LuFileText, LuUsers } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    url: "/admin",
    icon: <LuLayoutDashboard className="size-5 mr-2 text-orange-600" />
  },
  {
    name: "Blog Posts",
    url: "/blog",
    icon: <LuFileText className="size-5 mr-2 text-orange-600" />
  },
  {
    name: "Users",
    url: "/users",
    icon: <LuUsers className="size-5 mr-2 text-orange-600" />
  },
];

export type Links = (typeof links)[number];
