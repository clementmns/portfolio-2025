"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Clément Omnès",
    jobTitle: "Software Engineer",
    description:
      "Passionate full-stack developer and Software Engineering student with 3+ years of experience specializing in React, Java, TypeScript, and modern technologies.",
    url: "https://clementomnes.dev",
    image: "https://clementomnes.dev/me.webp",
    email: "contact@clementomnes.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rouen",
      addressCountry: "France",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "CESI",
        description: "Software Engineering degree",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Rouen",
        description: "BUT in Multimedia and Internet Professions",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "R3mScore",
      url: "https://r3mscore.com",
    },
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Nest.js",
      "PHP",
      "Java",
      "C#",
      "Spring",
      "Tailwind CSS",
      "MySQL",
      "Git",
      "Docker",
      "SCRUM",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe XD",
      "Figma",
    ],
    sameAs: [
      "https://github.com/clementmns",
      "https://www.linkedin.com/in/clement-omnes",
    ],
    nationality: "French",
    knowsLanguage: [
      {
        "@type": "Language",
        name: "French",
        alternateName: "fr",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
