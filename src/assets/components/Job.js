import React from "react";

const Job = ({ date, position, industry, company, location, description, showTechStack }) => {
  return (
    <div className="text-[#607B96] flex flex-col gap-[10px] py-[20px]">
      <div className="flex max-lg:flex-col justify-between gap-[10px] lg:gap-[50px]">
        <div className="flex flex-col text-nowrap min-w-[250px]">
          <p>{date}</p>
          <p className="font-semibold text-lg text-[#fff]">{position}</p>
          <p className="font-semibold">{industry}</p>
          <ol className="list-disc list-inside pl-[4px]">
            <li>{company}</li>
            <li>{location}</li>
          </ol>
        </div>

        <div className="flex items-center">
          <p className="font-medium">{description}</p>
        </div>
      </div>

      {showTechStack && (
        <div className="flex flex-col lg:w-[250px]">
          <p className="text-[#fff] font-bold">Tech Stack</p>
          <p className="font-semibold">
            HTML, CSS, JavaScript, Vue, React Native, PHP, MySQL, Wordpress,
            Figma, Jira
          </p>
        </div>
      )}
    </div>
  );
};

export default Job;
