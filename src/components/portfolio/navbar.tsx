"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROFILE } from "@/data/portfolio";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "/";

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px clamp(20px,7vw,90px)",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 11 }}
      >
        <Image
          src={PROFILE.avatar}
          alt={PROFILE.name}
          width={34}
          height={34}
          unoptimized
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid var(--border)",
          }}
        />
        <span
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "-0.01em",
            color: "var(--text)",
          }}
        >
          {PROFILE.name}
        </span>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(14px,2.4vw,30px)",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              position: "relative",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text)",
              padding: "4px 0",
            }}
          >
            {item.label}
            {isActive(pathname, item.href) && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -2,
                  height: 2,
                  background: "var(--accent)",
                  borderRadius: 2,
                }}
              />
            )}
          </Link>
        ))}
        <a
          href={`mailto:${PROFILE.email}`}
          className="hover-accent-bg"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            padding: "9px 16px",
            borderRadius: 999,
          }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
