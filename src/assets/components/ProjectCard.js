import React from "react";

const ProjectCard = ({ projectNumber, projectType, imageSrc, description, icon, link }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <span className="text-[#5565E8] font-bold">Project {projectNumber} <span className="text-[#607B96] font-normal">{'//'} {projectType}</span></span>
      
      <div className="border-[1px] border-[#1E2D3D] w-fit h-fit rounded-[15px]">
        <div className="w-[370px] max-sm:w-[290px] h-[145px] bg-green-200 rounded-t-[15px] border-b-[1px] border-[#1E2D3D] relative">
          <i className={`${icon} bg-[#85E0F8] w-[28px] h-[28px] absolute flex justify-center items-center text-2xl rounded-[2px] right-[17px] top-[19px]`}></i>
          <img src={imageSrc} alt="project" className="object-top object-cover w-full h-full rounded-t-[15px]" />
        </div>
        <div className="w-[370px] max-sm:w-[290px] h-[169px] rounded-b-[15px] px-[31px] py-[24px] flex flex-col justify-between">
          <p className="text-lg text-[#607B96]">{description}</p>
          <button onClick={() => window.open(link, "_blank")} className="text-[#fff] text-sm bg-[#1B2A3A] px-[14px] py-[10px] rounded-[8px] w-fit hover:bg-[#253A4F] cursor-pointer">view-project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
