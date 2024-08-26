import { FC } from "react";

interface SkillCardProps {
  skill: string;
  image: string; // Add an image prop
}

const SkillCard: FC<SkillCardProps> = ({ skill, image }) => (
  <li className="flex items-center rounded-lg bg-white px-4 py-2 shadow-md">
    <img src={image} alt={skill} className="mr-2 h-8 w-8 object-contain" />{" "}
    {/* Display the skill icon */}
    {skill}
  </li>
);

export default SkillCard;
