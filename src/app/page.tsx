import { Hero } from "@/components/portfolio/sections/hero";
import { TechStack } from "@/components/portfolio/sections/tech-stack";
import { Experience } from "@/components/portfolio/sections/experience";
import { FeaturedProjects } from "@/components/portfolio/sections/featured-projects";
import { RecentWriting } from "@/components/portfolio/sections/recent-writing";

export default function Home() {
  return (
    <div className="animate-fade-up">
      <Hero />
      <TechStack />
      <Experience />
      <FeaturedProjects />
      <RecentWriting />
    </div>
  );
}
