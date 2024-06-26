// Utilities
import React from "react";

// Components
import ProjectCard from "../components/ProjectCard";
import PrimaryButton from "../components/PrimaryButton";

// Assets
import designPortfolioPNG2x from "../assets/images/projects/design-portfolio-2x.png";
import eLearningLandingPagePNG2x from "../assets/images/projects/e-learning-landing-page-2x.png";
import todoWebAppPNG2x from "../assets/images/projects/todo-web-app-2x.png";
import entertainmentWebAppPNG2x from "../assets/images/projects/entertainment-web-app-2x.png";
import memoryGamePNG2x from "../assets/images/projects/memory-game-2x.png";
import artGalleryShowcasePNG2x from "../assets/images/projects/art-gallery-showcase-2x.png";
import Typography from "../components/Typography";

// Data
const data = [
  {
    imageSrc: designPortfolioPNG2x,
    title: "Design Portfolio",
    technologies: ["HTML", "CSS"],
    sourceCodeLink: "#",
    previewProjectLink: "#",
  },
  {
    imageSrc: eLearningLandingPagePNG2x,
    title: "E-LEARNING LANDING PAGE",
    technologies: ["HTML", "CSS"],
    sourceCodeLink: "#",
    previewProjectLink: "#",
  },
  {
    imageSrc: todoWebAppPNG2x,
    title: "Todo Web App",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    sourceCodeLink: "#",
    previewProjectLink: "#",
  },
  {
    imageSrc: entertainmentWebAppPNG2x,
    title: "Entertainment Web App",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    sourceCodeLink: "#",
    previewProjectLink: "#",
  },
  {
    imageSrc: memoryGamePNG2x,
    title: "Memory Game",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    sourceCodeLink: "#",
    previewProjectLink: "#",
  },
  {
    imageSrc: artGalleryShowcasePNG2x,
    title: "Art Gallery Showcase",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    sourceCodeLink: "#",
    previewProjectLink: "#",
  },
];

// The default component
const Projects: React.FC = () => {
  return (
    <section className="mt-20 md:mt-[100px] xl:mt-[140px]">
      <div className="mx-auto max-w-[343px] md:max-w-[708px] xl:max-w-[1110px]">
        {/* section's head */}
        <div className="flex items-center justify-between md:mx-auto md:max-w-[706px] xl:max-w-[1110px]">
          {/* heading */}
          <Typography tagName="h2" styles="xl">
            Projects
          </Typography>

          {/* contact us button */}
          <PrimaryButton type="anchor" href="#contact-form">
            contact me
          </PrimaryButton>
        </div>

        {/* projects grid */}
        <div className="mt-10 flex flex-col gap-10 md:mt-[60px] md:flex-row md:flex-wrap md:justify-between md:gap-0 md:gap-y-[60px] xl:mt-[80px] xl:gap-y-[69px]">
          {/* Looping over the data array and rendering the ProjectCard component for each project */}

          {data.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}

          {/*  */}
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default Projects;
