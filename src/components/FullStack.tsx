import React from "react";
import { BsCodeSlash, BsServer, BsDatabase, BsTools } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const roadmapData = [
  {
    title: "Frontend",
    icon: <BsCodeSlash />,
    skills: [
      "Vanilla JavaScript",
      "React",
      "Vue.js",
      "Angular",
      "Svelte",
      "Solid JS",
    ],
  },
  {
    title: "Backend",
    icon: <BsServer />,
    skills: ["Express", "Django", "Next.js", "Spring Boot", "ASP.NET"],
  },
  {
    title: "Database",
    icon: <BsDatabase />,
    skills: ["SQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "DevOps",
    icon: <BsTools />,
    skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
  },
];

const RoadmapCard = ({ title, icon, skills }: any) => (
  <div className="rounded-lg p-6 transition-all duration-300">
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill: any, index: any) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-neutral-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const FullStackRoadmap = () => {
  return (
    <div className="py-12 px-4 sm:px-6 border-b border-b-neutral-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center mb-12 ">Full Stack Developer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapData.map((section, index) => (
            <RoadmapCard key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullStackRoadmap;
