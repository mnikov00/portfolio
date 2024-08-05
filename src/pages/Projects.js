import React, { useState } from "react";
import ProjectCard from "../assets/components/ProjectCard";
import gpt3 from "../assets/images/gpt3.png";
import aspire from "../assets/images/aspire.png";

const Projects = () => {
  const [activeFilters, setActiveFilters] = useState(["React"]);
  const [showFilters, setShowFilters] = useState(true);

  const projects = [
    {
      id: 1,
      imageSrc: gpt3,
      description: "Modern UI/UX GPT-3 single-page website",
      projectType: "gpt3-website",
      icon: "ri-reactjs-fill",
      tags: ["HTML", "CSS", "React"],
      link: "https://github.com/mnikov00/React-gpt3-website",
    },
    {
      id: 2,
      imageSrc: aspire,
      description: "Multipurpose website",
      projectType: "Aspire",
      icon: "ri-reactjs-fill",
      tags: ["HTML", "CSS", "Tailwind", "React"],
      link: "https://github.com/mnikov00/React-aspire-website",
    },
  ];

  const filters = [
    { name: "React", icon: "ri-reactjs-line" },
    { name: "HTML", icon: "ri-html5-fill" },
    { name: "CSS", icon: "ri-css3-fill" },
    { name: "Tailwind", icon: "ri-tailwind-css-fill" },
    { name: "Vue", icon: "ri-vuejs-fill" },
    { name: "Angular", icon: "ri-angularjs-fill" },
  ];

  const toggleFilter = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredProjects = activeFilters.length
    ? projects.filter((project) =>
        activeFilters.every((filter) => project.tags.includes(filter))
      )
    : projects;

  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="bg-[#011627] flex justify-center lg:border-[#1E2D3D] lg:border-x-[1px] lg:min-h-[834px] relative">
      <div className="flex max-lg:flex-col border-[#1E2D3D] border-[1px] w-full">
        <div className="lg:hidden">
          <p className="text-sm text-[#fff] px-[27px] py-[20px]">_projects</p>
        </div>
        {/* Left side */}
        <div className="text-[#607B96] hover:text-[#C4C4C4] text-nowrap min-w-[320px] border-[#1E2D3D] lg:border-r-[1px] lg:h-full">
          {/* Filter Header */}
          <div
            onClick={handleToggleFilters}
            className="flex items-center px-[14px] h-[40px] text-[#fff] gap-[8px] border-b-[#1E2D3D] border-b-[1px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] cursor-pointer"
          >
            <div className="flex items-center gap-[8px]">
              <i className={`ri-arrow-down-s-fill w-[20px] text-xl flex items-center justify-center transition-transform duration-300 ${showFilters ? "" : "-rotate-90"}`}></i>
              <i className="ri-equalizer-fill w-[20px] text-lg text-[#5464E7]"></i>
            </div>
            <p>filters</p>
          </div>

          {/* Filters */}
          <div className={`transition-all duration-300 ${showFilters ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
            {filters.map((filter) => (
              <span
                key={filter.name}
                className={`flex items-center px-[14px] h-[40px] text-[#607B96] gap-[10px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] cursor-pointer ${
                  activeFilters.includes(filter.name) ? "text-[#fff]" : ""
                }`}
                onClick={() => toggleFilter(filter.name)}
              >
                <div className="flex items-center gap-[24px]">
                  <i className={`ri-checkbox${activeFilters.includes(filter.name) ? "-fill" : "-blank-line"} w-[24px] text-2xl`}></i>
                  <i className={`${filter.icon} text-2xl flex items-center justify-center`}></i>
                </div>
                <p>{filter.name}</p>
              </span>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className="w-full">
          {/* Active tags */}
          <div className="flex w-full h-[40px] border-[#1E2D3D] border-b-[1px] max-lg:hidden">
            <div className="text-[#607B96] flex items-center text-nowrap">
              {activeFilters.length > 0 && (
                <span
                  className="flex justify-between items-center min-w-[150px] w-fit px-[14px] hover:bg-[#253A4F] border-[#1E2D3D] border-r-[1px] h-full cursor-pointer"
                >
                  <p className="pr-[7px]">{activeFilters.join("; ")}</p>
                  <i onClick={clearFilters} className="ri-close-line text-lg rounded-md w-[25px] text-center hover:bg-[#131e28]"></i>
                </span>
              )}
            </div>
          </div>

          {/* Projects tab */}
          <div className="flex lg:h-[796px] flex-wrap justify-center items-center gap-[40px] px-[38px] py-[18px] max-lg:px-[27px] overflow-y-auto max-h-[80vh] scrollable-container">
            {filteredProjects.length ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  projectNumber={index + 1}
                  projectType={project.projectType}
                  imageSrc={project.imageSrc}
                  description={project.description}
                  icon={project.icon}
                  link={project.link}
                />
              ))
            ) : (
              <div className="flex justify-center items-center text-center w-full h-full">
                <p className="text-[#607B96]">
                  Not any projects with these filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollable-container {
          overflow-y: auto;
        }

        .scrollable-container::-webkit-scrollbar {
          width: 18.5px;
        }

        .scrollable-container::-webkit-scrollbar-track {
          background: #011627;
        }

        .scrollable-container::-webkit-scrollbar-thumb {
          background: #607b96;
        }

        .scrollable-container::-webkit-scrollbar-thumb:hover {
          background: #1e2d3d;
        }

        .scrollable-container::-webkit-scrollbar-thumb:active {
          background: #607b96;
        }
      `}</style>
    </div>
  );
};

export default Projects;
