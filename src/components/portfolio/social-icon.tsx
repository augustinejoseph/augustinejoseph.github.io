import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  MailIcon,
  WhatsAppIcon,
  LinkIcon,
} from "@/components/icons";

const SOCIAL_ICONS: Record<string, (props: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Medium: MediumIcon,
  Email: MailIcon,
  WhatsApp: WhatsAppIcon,
};

/** Icon matching a social link's label, falling back to a generic link glyph. */
export function SocialIcon({ label }: { label: string }) {
  const Icon = SOCIAL_ICONS[label] ?? LinkIcon;
  return <Icon />;
}
