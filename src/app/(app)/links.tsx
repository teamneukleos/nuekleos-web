// NB: Do not add "use client" to this file if you want to build links
// using server side session data like user roles or permissions
import { LuLayoutDashboard, LuBackpack, LuLayers, LuTestTubes } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    url: "/app",
    icon: <LuLayoutDashboard className="size-5 mr-2" />
  },
  {
    name: "Product",
    url: "/product",
    icon: <LuBackpack className="size-5 mr-2" />
  },
  {
    name: "Batch",
    url: "/batch",
    icon: <LuLayers className="size-5 mr-2" />
  },
  {
    name: "Test",
    url: "/test",
    icon: <LuTestTubes className="size-5 mr-2" />
  },
];

export type Links = (typeof links)[number];
