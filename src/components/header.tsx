"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./theme-toggle";
import React from "react";
import { LINKS } from "@/lib/constants";

const navItems = {
  "/": {
    name: "Home",
  },
  [LINKS.BLOG_SECTION]: {
    name: "Blog",
  },
  [LINKS.PROJECTS_SECTION]: {
    name: "Projects",
  },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }

  return (
    <header className="mb-10 mt-10 tracking-tight">
      <div className=" lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative scroll-pr-6  px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex flex-row justify-between">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                        !isActive && "text-neutral-500",
                      )}
                    >
                      <span className="relative px-2 py-1">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-neutral-200 from-transparent to-neutral-900 dark:bg-neutral-800 dark:bg-gradient-to-r"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div>
                <ThemeToggler />
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}
