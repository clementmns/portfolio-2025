import AboutCard from "@/components/cards/about";
import Certifications from "@/components/cards/certifications";
import HeroSection from "@/components/cards/hero";
import ExperiencesCard from "@/components/cards/experiences";
import TrainingsCard from "@/components/cards/trainings";
import CurrentCard from "@/components/cards/current";
import SkillsCard from "@/components/cards/skills/skills";
import HiringCard from "@/components/cards/hiring/hiring";
import ToolsCard from "@/components/cards/tools";
import ProjectsCard from "@/components/cards/projects";
// import FunCard from "@/components/cards/music"; // TODO: Create FunCard component

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-22 flex flex-col items-center gap-10">
      <HeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col gap-4">
          <CurrentCard />
          <ExperiencesCard />
          <Certifications />
        </div>
        <div className="flex flex-col gap-4">
          <ProjectsCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div>
              <SkillsCard />
            </div>
            <div>
              <ToolsCard />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <AboutCard />
          <TrainingsCard />
          <HiringCard />
          {/* <FunCard /> */}
        </div>
      </div>
    </div>
  );
}
