"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Aakhah : Nepal Lipi Text Recognition System",
    description:
      "A system for recognizing handwritten as well as typed texts in Nepal Lipi and converting physical documents into a digital version using the CRNN CTC architecture",
    image: "/images/projects/aakhah.png",
    tag: ["All"],
    gitUrl: "https://aakhah.vercel.app/demo",
  },
  {
    id: 2,
    title: "HeritageKunja Mobile Application",
    description:
      " A cross-platform mobile application built using Flutter and Firebase that provides a medium to learn and share information related to cultural heritage.",
    image: "",
    tag: ["All", "Mobile"],
    gitUrl: "#projects",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description:
      "A food delivery website built using MongoDB, Expressjs, and NodeJS for viewing and ordering food, along with an admin panel to manage orders.",
    image: "/images/projects/laptey.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ashutoshbr/Laptey",
  },
  {
    id: 4,
    title: "eLedger",
    description:
      "A transaction management system built using Qt for a graphical user interface and SQLite as a database that allows users to store and view their transactions.",
    image: "/images/projects/eledger.png",
    tag: ["All"],
    gitUrl: "https://github.com/ashutoshbr/e-Ledger",
  },
  {
    id: 5,
    title: "Financial Calculator",
    description:
      "A mobile application built using Flutter that can be used to calculate taxes such as income taxes and vehicle taxes, and interest payments (EMI).",
    image: "",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SarinSthapit/Financial-Calculator",
  },
  {
    id: 6,
    title: "Text Summarization System",
    description:
      "An abstractive text summarization system built using the encoder-decoder Transformer model to generate a concise summary of lengthy texts.",
    image: "",
    tag: ["All"],
    gitUrl: "https://github.com/SarinSthapit/Text-Summarization-System",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        id="projects"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
