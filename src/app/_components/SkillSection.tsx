// components/SkillsSection.tsx
"use client";
import SkillCard from "./Skillcard";
import { SKILLS } from "@/constant";

const SkillsSection = () => (
  <section className="bg-gray-200 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      <p className="mt-4 text-lg">
        I’m proficient in a variety of technologies and tools used for web
        development and design.
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-4">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} skill={skill.skill} image={skill.image} />
        ))}
      </ul>
    </div>
  </section>
);

export default SkillsSection;
