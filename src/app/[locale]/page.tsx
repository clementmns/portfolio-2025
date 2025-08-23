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
import { Metadata } from "next";
// import FunCard from "@/components/cards/music"; // TODO: Create FunCard component

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://clementomnes.dev";

  if (locale === "fr") {
    return {
      title: "Clément Omnès - Ingénieur Logiciel & Développeur Full-Stack",
      description:
        "Développeur full-stack passionné et étudiant en génie logiciel avec plus de 3 ans d'expérience. Spécialisé en React, Java, TypeScript et technologies modernes.",
      alternates: {
        canonical: `${baseUrl}/fr`,
        languages: {
          en: `${baseUrl}/en`,
          fr: `${baseUrl}/fr`,
        },
      },
      openGraph: {
        title: "Clément Omnès - Ingénieur Logiciel & Développeur Full-Stack",
        description:
          "Développeur full-stack passionné et étudiant en génie logiciel avec plus de 3 ans d'expérience.",
        url: `${baseUrl}/fr`,
        locale: "fr_FR",
        images: [
          {
            url: "/opengraph-image-fr.png",
            width: 1200,
            height: 630,
            alt: "Clément Omnès - Ingénieur Logiciel & Développeur Full-Stack",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Clément Omnès - Ingénieur Logiciel & Développeur Full-Stack",
        description:
          "Développeur full-stack passionné et étudiant en génie logiciel avec plus de 3 ans d'expérience.",
        images: ["/opengraph-image-fr.png"],
      },
    };
  }

  return {
    title: "Clément Omnès - Software Engineer & Full-Stack Developer",
    description:
      "Passionate full-stack developer and Software Engineering student with 3+ years of experience. Specializing in React, Java, TypeScript, and modern technologies.",
    alternates: {
      canonical: `${baseUrl}/en`,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title: "Clément Omnès - Software Engineer & Full-Stack Developer",
      description:
        "Passionate full-stack developer and Software Engineering student with 3+ years of experience.",
      url: `${baseUrl}/en`,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image-en.png",
          width: 1200,
          height: 630,
          alt: "Clément Omnès - Software Engineer & Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Clément Omnès - Software Engineer & Full-Stack Developer",
      description:
        "Passionate full-stack developer and Software Engineering student with 3+ years of experience.",
      images: ["/opengraph-image-en.png"],
    },
  };
}

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
