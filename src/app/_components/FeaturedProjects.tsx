// components/FeaturedProjects.tsx
"use client";
import ProjectCard from "./ProjectCard";
import { FEATURED_PROJECTS } from "@/constant";

const FeaturedProjects = () => (
  <section className="py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="mt-4 text-lg">
        Here are some of the projects I’ve worked on recently:
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
