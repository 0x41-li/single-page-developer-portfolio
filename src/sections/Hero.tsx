import React from "react";
import developerProfileImage from "../assets/images/developer-profile-image.png";
import linesDonut from "../assets/graphics/lines-donut.png";
import unfilledWhiteBorderOval from "../assets/graphics/unfilled-white-bordered-oval.png";

const Hero: React.FC = () => {
  return (
    <div
      className="bg-no-repeat"
      style={{
        backgroundImage: `url(${linesDonut}), url(${unfilledWhiteBorderOval})`,
        backgroundPosition: "left top 124px, right top 254px",
      }}
    >
      <div className="flex flex-col items-center px-4 xl:max-w-[1110px]">
        {/* Picture */}
        <div className="bg-gradient-to-b from-[rgba(36,36,36,0.0001)] to-[rgba(36,36,35,1)] pt-[141px]">
          <picture>
            <img src={developerProfileImage} alt="" />
          </picture>
        </div>

        {/* Text Part */}
        <div className="mx-auto mt-10 max-w-[343px]">
          <div className="relative">
            <h1 className="text-center text-[40px] font-bold leading-[40px] tracking-[-1.14px]">
              Nice to meet you! I’m Adam Keyes.
            </h1>
            <span className="absolute -bottom-[4px] right-8 h-[4px] w-[225px] bg-green" />
          </div>

          <p className="mt-6 text-center font-medium leading-[26px]">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>

          <div className="mt-6 text-center">
            <a
              className="relative mx-auto font-bold leading-7 tracking-[2.29px]"
              href="#contactme"
            >
              CONTACT ME
              <span className="absolute bottom-[-14px] left-0 h-[2px] w-full bg-green" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
