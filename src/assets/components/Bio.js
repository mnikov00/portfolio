import React from 'react';

const LineNumberedParagraph = ({ text }) => {
  return (
    <div className="max-lg:hidden">
      <ol className="list-decimal pl-5">
        {text.map((line, index) => (
          <li key={index} className="before:content-['*'] text-[#607B96]">
            {line}
          </li>
        ))}
      </ol>
    </div>
  );
};

const Bio = () => {
  const paragraphs = [
    [
      ``,
      ` I am 24 years old, I have always enjoyed working on`,
      ` website development. Over time, my interest and desire`,
      ` to grow in this field have only increased, and I am now`,
      ` focused on pursuing a career as a Front-End Developer.`,
      ``,
      ` I love transforming designs from Figma into functional`,
      ` and interactive websites, mobile applications, and`,
      ` various other types of software. I always strive to`,
      ` improve and pay close attention to detail, with the goal`,
      ` of delivering high-quality products that achieve`,
      ` excellent results.`,
      ``,
      ` In my personal life, I engage in fitness, healthy`,
      ` eating, and enjoy spending time with friends.`,
      ``,
    ]
  ];

  return (
    <div>
      {paragraphs.map((text, index) => (
        <LineNumberedParagraph key={index} text={text} />
      ))}
    </div>
  );
};

export default Bio;
