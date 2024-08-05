import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Bio from "../assets/components/Bio";
import Job from "../assets/components/Job";

const About = () => {
  const [openFiles, setOpenFiles] = useState(["professional-experience"]);
  const [activeFile, setActiveFile] = useState("professional-experience");
  const [openFolders, setOpenFolders] = useState({
    personalInfo: true,
    professionalInfo: true,
    contacts: true,
  });

  const toggleFile = (fileName) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles((prevOpenFiles) => [...prevOpenFiles, fileName]);
      setActiveFile(fileName);
    } else {
      setActiveFile(fileName);
    }
  };

  const closeFile = (fileName) => {
    setOpenFiles((prevOpenFiles) =>
      prevOpenFiles.filter((file) => file !== fileName)
    );
    if (activeFile === fileName) {
      setActiveFile(openFiles[0] || "");
    }
  };

  const toggleFolder = (folderName) => {
    setOpenFolders((prevFolders) => ({
      ...prevFolders,
      [folderName]: !prevFolders[folderName],
    }));
  };

  const renderFileTab = (fileName) => (
    <div
      className={`flex items-center text-nowrap h-[40px] ${
        activeFile === fileName ? "text-[#fff]" : "text-[#607B96]"
      } cursor-pointer`}
      key={fileName}
    >
      <span
        className="flex justify-between items-center min-w-[150px] w-fit px-[14px] hover:bg-[#253A4F] border-[#1E2D3D] border-r-[1px] h-full"
        onClick={() => setActiveFile(fileName)}
      >
        <p className="pr-[7px]">{fileName}</p>
        <i
          className="ri-close-line text-lg rounded-md w-[25px] text-center hover:bg-[#131e28]"
          onClick={(e) => {
            e.stopPropagation();
            closeFile(fileName);
          }}
        ></i>
      </span>
    </div>
  );

  const jobs = [
    {
      id: 1,
      date: "Apr, 2024 - Jun, 2024",
      position: "Software developer",
      industry: "Information technology",
      company: "Fundamental",
      location: "Sofia, Bulgaria",
      description:
        "Development and maintenance of websites, mobile applications and other kinds of software.",
    },
    {
      id: 2,
      date: "Jun, 2023 - Sep, 2023",
      position: "Server",
      industry: "Food and Beverage",
      company: "Hearth 'n Kettle",
      location: "Hyannis, Massachusetts",
    },
    {
      id: 3,
      date: "Jun, 2022 - Sep, 2022",
      position: "Runner",
      industry: "Food and Beverage",
      company: "Añejo Mexican Bistro",
      location: "Hyannis, Massachusetts",
    },
    {
      id: 4,
      date: "Oct, 2022 - May, 2023",
      position: "Warehouse Worker",
      industry: "Logistics and Transportation",
      company: "LOBBI Ltd",
      location: "Sofia, Bulgaria",
    },
    {
      id: 5,
      date: "Jun, 2022 - Sep, 2022",
      position: "Order Picker",
      industry: "Logistics and Transportation",
      company: "DSV",
      location: "Roosendaal, Netherlands",
    },
  ];

  const featuredJob = jobs.find((job) => job.id === 1);
  const otherJobs = jobs.filter((job) => job.id !== 1);

  return (
    <div className="bg-[#011627] flex justify-center lg:border-[#1E2D3D] lg:border-x-[1px] min-h-[834px] relative">
      <div className="flex max-lg:flex-col border-[#1E2D3D] border-[1px] w-full">
        <div className="lg:hidden">
          <p className="text-sm text-[#fff] px-[27px] py-[20px]">_about-me</p>
        </div>

        {/* Left side */}
        <div className="text-[#607B96] hover:text-[#C4C4C4] text-nowrap min-w-[320px] border-[#1E2D3D] lg:border-r-[1px] lg:h-full">
          {/* Personal info folder */}
          <div>
            <span
              className="flex items-center px-[14px] h-[40px] text-[#fff] gap-[8px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] border-[#1E2D3D] border-b-[1px] cursor-pointer"
              onClick={() => toggleFolder("personalInfo")}
            >
              <div className="flex items-center gap-[8px]">
                <i
                  className={`ri-arrow-down-s-fill w-[20px] text-xl flex items-center justify-center transition-transform duration-300 ${
                    openFolders.personalInfo ? "" : "-rotate-90"
                  }`}
                ></i>
                <i className="ri-folder-3-fill w-[20px] text-lg text-[#E99287]"></i>
              </div>
              <p>personal-info</p>
            </span>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openFolders.personalInfo ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <span
                className={`flex items-center px-[14px] h-[40px] gap-[8px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] ${
                  openFiles.includes("bio") ? "text-[#fff]" : "text-[#607B96]"
                } cursor-pointer`}
                onClick={() => toggleFile("bio")}
              >
                <div className="flex items-center gap-[6px] pl-[28px]">
                  <i className="ri-profile-fill w-[20px] text-lg text-[#81A1C1]"></i>
                </div>
                <p>bio</p>
              </span>
            </div>
          </div>

          {/* Professional info folder */}
          <div>
            <span
              className="flex items-center px-[14px] h-[40px] text-[#fff] gap-[8px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] border-[#1E2D3D] border-y-[1px] cursor-pointer"
              onClick={() => toggleFolder("professionalInfo")}
            >
              <i
                className={`ri-arrow-down-s-fill w-[20px] text-xl flex items-center justify-center transition-transform duration-300 ${
                  openFolders.professionalInfo ? "" : "-rotate-90"
                }`}
              ></i>
              <i className="ri-folder-3-fill w-[20px] text-lg text-[#43D9AD]"></i>
              <p>professional-info</p>
            </span>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openFolders.professionalInfo ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <span
                className={`flex items-center px-[14px] h-[40px] gap-[8px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] ${
                  openFiles.includes("professional-experience")
                    ? "text-[#fff]"
                    : "text-[#607B96]"
                } cursor-pointer`}
                onClick={() => toggleFile("professional-experience")}
              >
                <div className="flex items-center gap-[10px] pl-[28px]">
                  <i className="ri-bar-chart-box-fill w-[20px] text-lg text-[#81A1C1]"></i>
                </div>
                <p>professional-experience</p>
              </span>
              <span
                className={`flex items-center px-[14px] h-[40px] gap-[8px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] ${
                  openFiles.includes("experience")
                    ? "text-[#fff]"
                    : "text-[#607B96]"
                } cursor-pointer`}
                onClick={() => toggleFile("experience")}
              >
                <div className="flex items-center gap-[10px] pl-[28px]">
                  <i className="ri-bar-chart-box-fill w-[20px] text-lg text-[#81A1C1]"></i>
                </div>
                <p>experience</p>
              </span>
            </div>
          </div>

          {/* Contacts folder */}
          <div>
            <span
              className="flex items-center px-[14px] h-[40px] text-[#fff] gap-[8px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] border-[#1E2D3D] border-y-[1px] cursor-pointer"
              onClick={() => toggleFolder("contacts")}
            >
              <i
                className={`ri-arrow-down-s-fill w-[20px] text-xl flex items-center justify-center transition-transform duration-300 ${
                  openFolders.contacts ? "" : "-rotate-90"
                }`}
              ></i>
              <i className="ri-folder-3-fill w-[20px] text-lg text-[#3A49A4]"></i>
              <p>contacts</p>
            </span>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openFolders.contacts ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="lg:space-y-[10px] lg:pt-[12px]">
                <span
                  className={`flex items-center px-[14px] h-[40px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] ${
                    openFiles.includes("professional-experience")
                      ? "text-[#fff]"
                      : "text-[#607B96]"
                  }`}
                >
                  <span className="flex gap-[8px] items-center">
                    <i className="ri-mail-fill w-[20px] text-xl text-[#81A1C1]"></i>
                    <p className="text-[#607B96]">mnikovwork@gmail.com</p>
                  </span>
                </span>
                <span
                  className={`flex px-[14px] h-[40px] max-lg:bg-[#1E2D3D] max-lg:border-[#011627] max-lg:border-b-[3px] ${
                    openFiles.includes("professional-experience")
                      ? "text-[#fff]"
                      : "text-[#607B96]"
                  }`}
                >
                  <span className="flex gap-[8px] items-center">
                    <i className="ri-phone-fill w-[20px] text-xl text-[#81A1C1]"></i>
                    <p className="text-[#607B96]">+359893912311</p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full">
          {/* Active tabs */}
          <div className="flex w-full h-[40px] border-[#1E2D3D] border-b-[1px]">
            <div className="flex overflow-x-auto overflow-y-hidden">
              {openFiles.map((file) => renderFileTab(file))}
            </div>
          </div>

          {/* File contents */}
          <div className="flex lg:h-[796px]">
            {openFiles.length === 0 ? (
              <div className="flex justify-center items-center text-center w-full h-full max-lg:py-[18px] max-lg:px-[27px]">
                <p className="text-[#607B96]">
                  You don't have any opened files.
                </p>
              </div>
            ) : (
              <>
                {activeFile === "bio" && (
                  <div className="max-w-[700px] px-[38px] py-[18px] max-lg:px-[27px]">
                    <div className="lg:hidden py-[20px]">
                      <span className="text-sm text-[#fff]">
                        {"//"} personal-info {"/"}{" "}
                        <span className="text-[#607B96]">bio</span>
                      </span>
                    </div>
                    <div className="lg:hidden">
                      <p className="text-[#607B96] pb-[18px]">
                        I am 24 years old, I have always enjoyed working on
                        website development. Over time, my interest and desire
                        to grow in this field have only increased, and I am now
                        focused on pursuing a career as a Front-End Developer.
                      </p>
                      <p className="text-[#607B96] py-[18px]">
                        I love transforming designs from Figma into functional
                        and interactive websites, mobile applications, and
                        various other types of software. I always strive to
                        improve and pay close attention to detail, with the goal
                        of delivering high-quality products that achieve
                        excellent results.
                      </p>
                      <p className="text-[#607B96] pt-[18px]">
                        In my personal life, I engage in fitness, healthy
                        eating, and enjoy spending time with friends.
                      </p>
                    </div>
                    <Bio />
                  </div>
                )}
                {activeFile === "professional-experience" && (
                  <div className="max-w-[700px] px-[38px] py-[18px] max-lg:px-[27px]">
                    <div className="lg:hidden py-[20px]">
                      <span className="text-sm text-[#fff]">
                        {"//"} personal-info {"/"}{" "}
                        <span className="text-[#607B96]">professional-experience</span>
                      </span>
                    </div>
                    <div className="featured-job">
                      {featuredJob && <Job {...featuredJob} showTechStack />}
                    </div>
                  </div>
                )}
                {activeFile === "experience" && (
                  <div className="max-w-[700px] px-[38px] py-[18px] max-lg:px-[27px]">
                    <div className="lg:hidden py-[20px]">
                      <span className="text-sm text-[#fff]">
                        {"//"} personal-info {"/"}{" "}
                        <span className="text-[#607B96]">experience</span>
                      </span>
                    </div>
                    <div className="other-jobs">
                      {otherJobs.map((job, index) => (
                        <div
                          key={job.id}
                          className={`${
                            index === otherJobs.length - 1
                              ? ""
                              : "border-[#1E2D3D] border-b-[1px] pb-[10px]"
                          }`}
                        >
                          <Job {...job} showTechStack={false} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
