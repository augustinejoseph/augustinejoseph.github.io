import { MONO } from "@/components/portfolio/styles";
import { PROFILE, SOCIALS } from "@/data/portfolio";
import { SocialIcon } from "@/components/portfolio/social-icon";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div
        className="footer-inner"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "54px clamp(20px,7vw,90px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(24px,3vw,34px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              margin: "0 0 12px",
              maxWidth: "18ch",
            }}
          >
            Have a project in mind? Let&apos;s build it.
          </h2>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline-accent"
            style={{
              ...MONO,
              fontSize: 15,
              color: "var(--accent-2)",
            }}
          >
            {PROFILE.email}
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 9,
            ...MONO,
            fontSize: 13.5,
          }}
        >
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-accent-text social-link"
              style={{ color: "var(--soft)" }}
            >
              <SocialIcon label={social.label} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 clamp(20px,7vw,90px) 30px",
          ...MONO,
          fontSize: 12,
          color: "var(--soft)",
        }}
      >
        © 2026 {PROFILE.name}
      </div>
    </footer>
  );
}
