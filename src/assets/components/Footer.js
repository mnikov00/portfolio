import React from "react";

const Footer = () => {
  return (
    <div class="bg-[#011627] rounded-b-[8px] border-[#1E2D3D] border-[1px] flex items-center justify-between h-[50px] py-[22px]">
      <span class="text-[#607B96] px-[18px] text-nowrap w-[146px]">
        find me in:
      </span>

      {/* Icons */}
      <div className="flex w-full justify-end lg:justify-between">
        <a
          href="https://www.linkedin.com/in/martin-nikov-384384298/"
          rel="noreferrer"
          target="_blank"
        >
          <i class="ri-linkedin-fill text-[#607B96] hover:text-[#C4C4C4] h-[50px] border-[#1E2D3D] border-x-[1px] px-[14px] text-[24px] flex items-center justify-center"></i>
        </a>

        <a href="https://github.com/mnikov00" rel="noreferrer" target="_blank">
          <span className="flex items-center h-[50px] border-[#1E2D3D] border-l-[1px] max-lg:px-[14px] px-[22px] text-[#607B96] hover:text-[#C4C4C4] gap-[5px]">
            <p className="max-lg:hidden">@mnikov00</p>
            <i className="ri-github-fill text-[24px] flex items-center justify-center"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
