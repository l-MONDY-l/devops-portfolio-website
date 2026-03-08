import { Hero } from "@/components/home/hero";
import { Metrics } from "@/components/home/metrics";
import { SkillsSection } from "@/components/home/skills-section";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { BlogPreview } from "@/components/home/blog-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Metrics />
      <SkillsSection />
      <ProjectsPreview />
      <BlogPreview />
    </main>
  );
}
