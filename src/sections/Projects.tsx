// Utilities
import React from "react";

// components
import ProjectCard from "../components/ProjectCard";

// images
import designPortfolioPNG2x from "../assets/images/projects/design-portfolio-2x.png";
import eLearningLandingPagePNG2x from "../assets/images/projects/e-learning-landing-page-2x.png";
import todoWebAppPNG2x from "../assets/images/projects/todo-web-app-2x.png";
import entertainmentWebAppPNG2x from "../assets/images/projects/entertainment-web-app-2x.png";
import memoryGamePNG2x from "../assets/images/projects/memory-game-2x.png";
import artGalleryShowcasePNG2x from "../assets/images/projects/art-gallery-showcase-2x.png";

const Projects: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-[343px]">
        {/* section head */}
        <div className="flex items-center justify-between">
          {/* heading */}
          <h2 className="text-[40px] font-bold leading-none -tracking-[1.14px]">
            Projects
          </h2>

          {/* contact us button */}
          <a
            className="relative inline-block h-[38px] font-bold leading-7 tracking-[2.29px] md:leading-[26px]"
            href="#contactme"
          >
            CONTACT ME
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-green" />
          </a>
        </div>

        {/* projects grid */}
        <div className="mt-10 flex flex-col gap-10">
          {/* project */}
          <ProjectCard
            title="Design Portfolio"
            imageSrc={designPortfolioPNG2x}
            technologies={["HTML", "CSS"]}
            previewProject="#"
            sourceCodeLink="#"
          />

          <ProjectCard
            title="E-LEARNING LANDING PAGE"
            imageSrc={eLearningLandingPagePNG2x}
            technologies={["HTML", "CSS"]}
            previewProject="#"
            sourceCodeLink="#"
          />

          <ProjectCard
            title="Todo Web App"
            imageSrc={todoWebAppPNG2x}
            technologies={["HTML", "CSS", "JAVASCRIPT"]}
            previewProject="#"
            sourceCodeLink="#"
          />

          <ProjectCard
            title="Entertainment Web App"
            imageSrc={entertainmentWebAppPNG2x}
            technologies={["HTML", "CSS", "JAVASCRIPT"]}
            previewProject="#"
            sourceCodeLink="#"
          />

          <ProjectCard
            title="Memory Game"
            imageSrc={memoryGamePNG2x}
            technologies={["HTML", "CSS", "JAVASCRIPT"]}
            previewProject="#"
            sourceCodeLink="#"
          />

          <ProjectCard
            title="Art Gallery Showcase"
            imageSrc={artGalleryShowcasePNG2x}
            technologies={["HTML", "CSS", "JAVASCRIPT"]}
            previewProject="#"
            sourceCodeLink="#"
          />
          {/*  */}
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Projects;
