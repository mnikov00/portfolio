/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import code from "../assets/images/code.svg";

const Home = () => {
  return (
    <div class="bg-[#011627] flex max-xl:flex-col justify-center border-[#1E2D3D] border-x-[1px] space-x-[79px] max-xl:py-[90px] xl:h-[834px] relative max-sm:px-[27px]">
      <div class="flex flex-col justify-center max-xl:items-center">
        <div class="z-20">
          <p class="text-lg text-[#E5E9F0]">Hi all. I am</p>
          <h2 class="text-[62px] text-[#E5E9F0] font-light leading-[70px]">
            Martin Nikov
          </h2>
          <p class="text-[32px] max-sm:text-xl max-sm:text-[#43D9AD] text-[#4D5BCE]">
            {'>'} Software Developer
          </p>
        </div>
        <div class="pt-[80px] max-xl:pt-[195px] space-y-[9px]">
          <p class="text-[#607B96]">
            // focused on Front-End Development
          </p>
          <p class="text-[#607B96]">// find my profile on Github:</p>
          <p class="font-medium">
            <span class="text-[#4D5BCE]">const</span>{" "}
            <span class="text-[#43D9AD]">githubLink</span>{" "}
            <span class="text-[#fff]">=</span>{" "}
            <span class="text-[#E99287]">
              <a
                href="https://github.com/mnikov00"
                rel="noreferrer"
                target="_blank"
              >
                “<span class="underline">https://github.com/mnikov00</span>”
              </a>
            </span>
          </p>
        </div>
      </div>
      <div class="items-left flex flex-col justify-center space-y-[18px] max-xl:hidden overflow-hidden">
        <img src={code} alt="code" class="opacity-10" />
        <img src={code} alt="code" class="opacity-70" />
        <img src={code} alt="code" class="z-10" />
        <img src={code} alt="code" class="opacity-70" />
        <img src={code} alt="code" class="opacity-10" />
      </div>

      <svg
        class="absolute top-0 right-[280px] max-xl:right-0 "
        width="652"
        height="592"
        viewBox="0 0 864 784"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_74_1521)">
          <path
            d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.597L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
            fill="#43D9AD"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_74_1521"
            x="0"
            y="0.827515"
            width="863.983"
            height="782.77"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="87"
              result="effect1_foregroundBlur_74_1521"
            />
          </filter>
        </defs>
      </svg>
      <svg
        class="absolute bottom-0 right-0"
        width="652"
        height="592"
        viewBox="0 0 882 831"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_74_1520)">
          <path
            d="M477.947 656.519L264.032 605.132L174.664 540.469L201.227 369.957L376.649 350.391L375.041 228.647L577.309 174.392L707.603 205.691L625.166 471.797L497.893 504.987L477.947 656.519Z"
            fill="#4D5BCE"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_74_1520"
            x="0.664062"
            y="0.391846"
            width="880.938"
            height="830.128"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="87"
              result="effect1_foregroundBlur_74_1520"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
