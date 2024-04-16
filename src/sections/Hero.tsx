import React from "react";
import developerProfileImage_PNG from "../assets/images/developer-profile-image.png";
import linesDonut_PNG from "../assets/graphics/lines-donut.png";
import unfilledWhiteBorderOval_PNG from "../assets/graphics/unfilled-white-bordered-oval.png";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-no-repeat [background-position:left_-342px_top_124px] md:[background-position:left_-265px_top_86px]"
      style={{
        backgroundImage: `url(${linesDonut_PNG})`,
      }}
    >
      <div className="flex flex-col items-center overflow-hidden px-4 md:mx-auto md:max-w-[768px] md:flex-row-reverse md:items-end md:pl-8 md:pr-0 xl:max-w-[1110px]">
        {/* Picture */}
        <div className="relative bg-gradient-to-b from-[rgba(36,36,36,0.0001)] to-[rgba(36,36,35,1)] pt-[141px] md:h-[600px] md:flex-shrink-0 md:flex-grow-0 md:basis-[322px] md:overflow-hidden md:pt-[127px]">
          {/* profile image pic */}
          <picture className="relative block max-w-[174px] md:-left-[13px] md:w-[349px] md:max-w-none">
            <img
              className="block w-full"
              src={developerProfileImage_PNG}
              alt="My profile image"
            />
          </picture>

          {/* graphic: white unfilled bordered circle */}
          <picture>
            <img
              className="absolute -right-[165px] bottom-0 md:-right-[63px]"
              src={unfilledWhiteBorderOval_PNG}
              alt="A white unfilled bordered circle for the website design purposes"
              aria-hidden
            />
          </picture>
        </div>

        {/* Text Part */}
        <div className="mx-auto mt-10 max-w-[343px] md:mb-[10px] md:flex md:max-w-none md:flex-1">
          {/*  */}
          <div className="md:flex-shrink-0 md:flex-grow-0 md:basis-[443px]">
            {/* Heading */}
            <div className="relative">
              <h1 className="text-center text-[40px] font-bold leading-[40px] -tracking-[1.14px] md:text-left md:text-7xl md:leading-[72px] md:-tracking-[2px]">
                Nice to <span className="hidden md:block" />
                meet you! I’m <span className="mt-[11px] hidden md:block" />
                Adam Keyes.
              </h1>
              <span className="absolute -bottom-[4px] right-8 h-[4px] w-[225px] bg-green md:-bottom-[6px] md:left-0 md:right-0 md:h-[6px] md:w-[402px]" />
            </div>

            {/* Paragraph */}
            <p className="mt-6 text-center font-medium leading-[26px] md:mt-[66px] md:text-left md:text-lg">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>

            {/* Button */}
            <div className="mt-6 text-center md:mt-[34px] md:text-left">
              <a
                className="relative mx-auto font-bold leading-7 tracking-[2.29px] md:leading-[26px]"
                href="#contactme"
              >
                CONTACT ME
                <span className="absolute -bottom-[14px] left-0 h-[2px] w-full bg-green md:-bottom-[12px]" />
              </a>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
