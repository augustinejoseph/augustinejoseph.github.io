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
  slug: string;
  industry?: string;
  businessImpact?: string;
  additionalInfo?: string;
  companyName?: string;
  location?: string;
  year?: string;
  isPortraitImages?: boolean;
}

export interface BlogCardProps {
  guid: string;
  pubDate: string;
  content: HTMLAllCollection;
  title: string;
  description: any;
  link: string;
}

export interface WorkExperience {
  companyName: string;
  url: string;
  startingYear: number;
  endingYear: null;
  currentCompany: boolean;
  logoUrl: string;
  posistion: string;
}
