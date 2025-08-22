import AboutCard from "@/components/sections/about";
import Certifications from "@/components/sections/certifications";
import CurrentCard from "@/components/sections/current";
import HeroSection from "@/components/sections/hero";
import ExperiencesCard from "@/components/sections/experiences";
import TrainingsCard from "../../components/sections/trainings";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-22 flex flex-col items-center gap-10">
      <HeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col gap-4">
          <CurrentCard />
          <ExperiencesCard />
          <Certifications />
        </div>
        <div className="flex flex-col gap-4">
          <TrainingsCard />
        </div>
        <div className="flex flex-col gap-4">
          <AboutCard />
        </div>
      </div>
    </div>
  );
}
