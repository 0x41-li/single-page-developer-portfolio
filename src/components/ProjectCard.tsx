import React from "react";
import { Primary as AnchorPrimary } from "./buttons/Primary";

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  technologies: Array<string>;
  sourceCodeLink: string;
  previewProjectLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  technologies,
  sourceCodeLink,
  previewProjectLink,
}) => {
  return (
    <div className="group md:basis-[342px] xl:basis-[540px]">
      {/* project picture */}
      <div className="relative">
        {/* Project buttons */}
        <div className="absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center gap-12 bg-[rgba(0,0,0,0.75)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 xl:flex">
          <AnchorPrimary type="anchor" href={previewProjectLink}>
            view project
          </AnchorPrimary>

          <AnchorPrimary type="anchor" href={sourceCodeLink}>
            view code
          </AnchorPrimary>
        </div>

        <picture>
          <img
            height="253px"
            width="345px"
            src={imageSrc}
            alt="Design Portfolio Project"
            className="w-full max-w-full object-cover md:h-[253px] xl:h-[400px]"
          />
        </picture>
      </div>

      {/* Project Info */}
      <div className="mt-5">
        {/* Project Title and technologies used */}
        <div className="flex flex-col gap-[7px]">
          <h3 className="text-2xl font-bold uppercase">{title}</h3>

          <div className="flex gap-[18px] font-medium">
            {technologies.map((technology) => (
              <span key={technology} className="text-lg text-soft-gray">
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project buttons */}
        <div className="mt-5 flex gap-[30px] xl:hidden">
          <AnchorPrimary type="anchor" href={previewProjectLink}>
            view project
          </AnchorPrimary>

          <AnchorPrimary type="anchor" href={sourceCodeLink}>
            view code
          </AnchorPrimary>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ProjectCard;
