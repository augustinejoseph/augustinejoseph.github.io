"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROFILE } from "@/data/portfolio";
import { MailIcon } from "@/components/icons";

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
        gap: 12,
        padding: "16px clamp(16px,7vw,90px)",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}
      >
        <span
          className="nav-brand-name"
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            whiteSpace: "nowrap",
          }}
        >
          <span className="nav-brand-full">{PROFILE.name}</span>
          <span className="nav-brand-short">{PROFILE.name.split(" ")[0]}</span>
        </span>
      </Link>

      <div
        className="nav-links"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(14px,2.4vw,30px)",
          flexShrink: 0,
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-item"
            style={{
              position: "relative",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text)",
              padding: "4px 0",
              whiteSpace: "nowrap",
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
          className="hover-accent-bg nav-cta"
          aria-label="Get in touch"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            padding: "9px 16px",
            borderRadius: 999,
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <span className="nav-cta-label">Get in touch</span>
          <span className="nav-cta-icon" style={{ display: "none" }} aria-hidden="true">
            <MailIcon width={16} height={16} fill="currentColor" />
          </span>
        </a>
      </div>
    </nav>
  );
}
