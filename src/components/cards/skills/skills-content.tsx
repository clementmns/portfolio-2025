import { useTranslations } from "next-intl";

export function SkillsFullContent() {
  const t = useTranslations("Skills");
  return (
    <div id="skills-full-content">
      <section aria-labelledby="skills-languages">
        <h3 id="skills-languages" className="sr-only">
          {t("languages")}
        </h3>
        <p className="text-xs text-muted-foreground">
          TypeScript, JavaScript, PHP, Java, C#.
        </p>
      </section>
      <section aria-labelledby="skills-frameworks" className="mt-2">
        <h3 id="skills-frameworks" className="sr-only">
          {t("frameworks")}
        </h3>
        <p className="text-xs text-muted-foreground">
          React, Next.js, Nest.js, Spring Boot, Tailwind CSS.
        </p>
      </section>
      <section aria-labelledby="skills-technical" className="mt-2">
        <h3 id="skills-technical" className="sr-only">
          {t("technical")}
        </h3>
        <p className="text-xs text-muted-foreground">
          MySQL, Git, Docker, SCRUM.
        </p>
      </section>
      <section aria-labelledby="skills-design" className="mt-2">
        <h3 id="skills-design" className="sr-only">
          {t("designSkills")}
        </h3>
        <p className="text-xs text-muted-foreground">
          Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma.
        </p>
      </section>
    </div>
  );
}
