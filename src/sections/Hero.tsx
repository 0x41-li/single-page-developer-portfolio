import React from "react";

// comps
import { Primary as AnchorPrimary } from "../components/buttons/Primary";

// Assets
import developerProfileImage_PNG from "../assets/images/developer-profile-image.png";
import linesDonut_PNG from "../assets/graphics/lines-donut.png";
import unfilledWhiteBorderOval_PNG from "../assets/graphics/unfilled-white-bordered-oval.png";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-no-repeat [background-position:left_-342px_top_124px] md:[background-position:left_-265px_top_86px] xl:[background-position:left_-100px_top_133px]"
      style={{
        backgroundImage: `url(${linesDonut_PNG})`,
      }}
    >
      <div className="flex flex-col items-center overflow-hidden px-4 md:mx-auto md:max-w-[768px] md:flex-row md:items-end md:pl-8 md:pr-0 xl:max-w-[1110px] xl:items-start xl:pl-0">
        {/* Picture part */}
        <div className="relative bg-gradient-to-b from-[rgba(36,36,36,0.0001)] to-[rgba(36,36,35,1)] pt-[141px] md:order-2 md:h-[600px] md:shrink-0 md:grow-0 md:basis-[322px] md:overflow-hidden md:pt-[127px] xl:h-[720px] xl:basis-[445px] xl:overflow-visible xl:pt-[141px]">
          {/* Profile image pic */}
          <picture className="relative block max-w-[174px] md:-left-[13px] md:w-[349px] md:max-w-none xl:left-0 xl:w-[444px]">
            <img
              className="block w-full"
              src={developerProfileImage_PNG}
              alt="My profile image"
            />
          </picture>

          {/* Graphic: white unfilled bordered circle */}
          <picture>
            <img
              className="absolute -right-[165px] bottom-0 md:-right-[63px] xl:-left-[64px] xl:bottom-[70px] xl:right-0"
              src={unfilledWhiteBorderOval_PNG}
              alt="A white unfilled bordered circle for the website design purposes"
              aria-hidden
            />
          </picture>
        </div>

        {/* Text part */}
        <div className="mx-auto mt-10 md:max-w-none xl:mt-[198px] xl:basis-[665px]">
          {/* Wrapper to overflow it and not affect the parent flex child */}
          <div className="md:max-w-[413px] xl:max-w-[665px]">
            {/*  */}

            <div className="w-[343px] md:w-[443px] xl:w-[706px]">
              {/* A wrapper to achieve the same underline effect as the design */}
              <div className="relative">
                {/* Heading */}
                <h1 className="text-center text-[40px] font-bold leading-none -tracking-[1.14px] md:text-left md:text-7xl md:-tracking-[2px] xl:whitespace-nowrap xl:text-[88px] xl:-tracking-[2.5px]">
                  Nice to{" "}
                  <span className="hidden md:block xl:hidden" aria-hidden />
                  meet you! <span className="hidden xl:block" aria-hidden />
                  I’m{" "}
                  <span
                    className="mt-[11px] hidden md:block xl:hidden"
                    aria-hidden
                  />
                  Adam Keyes.
                </h1>

                {/* The underline */}
                <span
                  aria-hidden
                  className="absolute -bottom-1 right-8 h-[4px] w-[225px] bg-green md:-bottom-[6px] md:left-0 md:right-0 md:h-[6px] md:w-[402px] xl:left-[unset] xl:right-[80px] xl:w-[492px]"
                />
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-center font-medium leading-[26px] text-soft-gray md:mt-[66px] md:text-left md:text-lg xl:mt-[43px] xl:max-w-[445px]">
                Based in the UK, I’m a front-end developer passionate about
                building accessible web apps that users love.
              </p>

              {/* Button */}
              <div className="mt-6 text-center md:mt-[34px] md:text-left xl:mt-[66px]">
                <AnchorPrimary type="anchor" href="#contact-form">
                  Contact Me
                </AnchorPrimary>
              </div>

              {/*  */}
            </div>

            {/*  */}
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
