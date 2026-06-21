import { EYEBROW, MONO } from "@/components/portfolio/styles";
import { PROFILE, SOCIALS } from "@/data/portfolio";
import { SocialIcon } from "@/components/portfolio/social-icon";

export function Hero() {
  return (
    <section
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "clamp(56px,8vw,104px) clamp(20px,7vw,90px) 30px",
      }}
    >
      <div style={EYEBROW}>{PROFILE.role}</div>

      <h1
        style={{
          fontSize: "clamp(33px,5.4vw,64px)",
          lineHeight: 1.06,
          letterSpacing: "-0.025em",
          fontWeight: 800,
          maxWidth: "17ch",
          margin: "20px 0 0",
          textWrap: "balance",
        }}
      >
        I build <span style={{ color: "var(--accent)" }}>intelligent, scalable</span> apps that
        blend clean code, smart AI &amp; seamless experiences.
      </h1>

      <p
        style={{
          fontSize: "clamp(16px,1.5vw,18.5px)",
          lineHeight: 1.65,
          color: "var(--soft)",
          maxWidth: "62ch",
          margin: "28px 0 0",
        }}
      >
        {PROFILE.intro}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 34 }}>
        <a
          href={PROFILE.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-accent-bg"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            padding: "13px 22px",
            borderRadius: 999,
          }}
        >
          Download my story (CV)
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="hover-accent-border"
          style={{
            background: "var(--surface)",
            color: "var(--text)",
            fontWeight: 600,
            fontSize: 15,
            padding: "13px 22px",
            borderRadius: 999,
            border: "1px solid var(--border)",
          }}
        >
          Let&apos;s work together
        </a>
      </div>

      <div
        className="social-row"
        style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 30, ...MONO, fontSize: 13 }}
      >
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline social-link"
          >
            <SocialIcon label={social.label} />
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
