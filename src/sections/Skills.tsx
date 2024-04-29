import React from "react";

// Graphics
import linesDonut_PNG from "../assets/graphics/lines-donut.png";
import Typography from "../components/Typography";

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
const Skills: React.FC = () => {
  return (
    <section className="mt-20  md:mt-[60px] xl:mt-[104px]">
      <div className="relative mx-auto max-w-[1100px]">
        {/*  linesDonut */}
        <div className="absolute -right-[344px] top-[540px] md:-right-[332px] md:top-[387px] xl:-right-[404px] xl:top-[253px]">
          <picture>
            <img
              aria-hidden
              src={linesDonut_PNG}
              alt="Graphics for the website design"
            />
          </picture>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto flex max-w-[345px] flex-col gap-6 border-y py-10 text-center md:max-w-[708px] md:flex-row md:flex-wrap md:gap-0 md:gap-x-[7px] md:gap-y-[52px] md:border-b-0 md:pb-0 md:pt-[52px] xl:max-w-none xl:gap-x-[30px] xl:gap-y-[58px] xl:pt-[72px]">
          {/* Looping over the skills data and rendering */}
          {data.map(([skill, yearsOfExperience]) => (
            <div
              key={skill}
              className="text-center md:shrink-0 md:grow-0 md:basis-[345px] md:text-left "
            >
              <Typography tagName="h2">{skill}</Typography>

              <Typography customClasses="mt-px">
                {yearsOfExperience} Years Experience
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
