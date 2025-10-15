"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  name: string;
  className?: string;
}

export function SidebarItem ({
  href,
  name,
  icon,
  className,
  ...props
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "w-full !justify-start transition-colors",
        buttonVariants({ variant: "ghost" }),
        isActive 
          ? "bg-orange-100 text-orange-700 border-r-2 border-orange-600" 
          : "hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: cn(
          (icon as React.ReactElement).props.className,
          isActive ? "text-orange-700" : undefined
        )
      })}
      {name}
    </Link>

  );
}
