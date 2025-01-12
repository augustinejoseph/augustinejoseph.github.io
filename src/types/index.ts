export interface Project {
  title: string;
  description: string;
  repo: string;
  liveLink: string;
  repoLinkExpired: boolean;
  liveLinkExpired: boolean;
  features: string[];
  thumbnail: string;
  tags: [];
  project_slug: string;
}

export interface BlogCardProps {
  guid: string;
  pubDate: string;
  content: HTMLAllCollection;
  title: string;
  description: any;
  link: string;
}
