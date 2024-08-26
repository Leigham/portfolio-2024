// components/ProjectCard.tsx
"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  link,
  image,
}) => (
  <motion.div
    className="relative overflow-hidden rounded-lg bg-white shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    <img src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

export default ProjectCard;
