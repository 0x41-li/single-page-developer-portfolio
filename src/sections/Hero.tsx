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
      <div className="flex flex-col items-center xl:max-w-[1110px]">
        {/* Picture */}
        <div className="bg-gradient-to-b from-[rgba(36,36,36,0.0001)] to-[rgba(36,36,35,1)] pt-[141px]">
          <picture>
            <img src={developerProfileImage} alt="" />
          </picture>
        </div>

        {/* Text Part */}
      </div>
    </div>
  );
};

export default Hero;
