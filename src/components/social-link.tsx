import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface Props {
  className?: string;
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
}

export function SocialLink({ className, href, children, icon: Icon }: Props) {
  return (
    <div className={cn(className, "group relative flex flex-col items-center")}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium transition"
      >
        <Icon className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 transition hover:fill-zinc-200" />
      </Link>
      {children && (
        <span className="absolute top-[-10px] rounded-full bg-black px-3 py-1 text-xs text-white opacity-0 transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-100 dark:bg-white dark:text-black">
          {children}
        </span>
      )}
    </div>
  );
}
