import React from "react";

// Graphics
import linesDonut_PNG from "../assets/graphics/lines-donut.png";

const Skills: React.FC = () => {
  // skills array
  // [skill, yearsOfExperience]
  const data = [
    ["HTML", 4],
    ["CSS", 4],
    ["Javascript", 4],
    ["Accessibility", 4],
    ["React", 3],
    ["Sass", 3],
  ];

  return (
    <section className="relative mt-20  md:mt-[60px]">
      <div className="absolute -right-[344px] top-[540px] md:-right-[332px] md:top-[387px]">
        <picture>
          <img
            aria-hidden
            src={linesDonut_PNG}
            alt="Graphics for the website design"
          />
        </picture>
      </div>

      <div className="mx-auto flex max-w-[345px] flex-col gap-6 border-y py-10 text-center md:max-w-[708px] md:flex-row md:flex-wrap md:gap-0 md:gap-x-[7px] md:gap-y-[52px] md:border-b-0 md:py-[52px]">
        {/* Looping over the data and rendering */}
        {data.map(([skill, yearsOfExperience]) => (
          <div
            key={skill}
            className="text-center md:shrink-0 md:grow-0 md:basis-[345px] md:text-left "
          >
            <h3 className="text-[32px] font-bold leading-10 -tracking-[1px] md:text-5xl md:leading-[56px] md:-tracking-[1.5px]">
              {skill}
            </h3>

            <p className="mt-px font-medium leading-[26px] text-soft-gray md:mt-[14px] md:text-lg">
              {yearsOfExperience} Years Experience
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;