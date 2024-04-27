import React from "react";
import IconLink from "../components/IconLink";

const myLinksData = [
  { name: "github", link: "#", ariaLabel: "My Github" },
  { name: "frontendmentor", link: "#", ariaLabel: "My Frontendmentor" },
  { name: "linkedin", link: "#", ariaLabel: "My Linkedin" },
  { name: "twitter", link: "#", ariaLabel: "My Twitter" },
];

const Header: React.FC = () => {
  return (
    <header className="absolute z-50 mt-5 w-full md:mt-[29px] xl:mt-[39px] ">
      <div className="mx-auto flex max-w-[153px] flex-col items-center gap-5 md:max-w-[708px] md:flex-row md:justify-between xl:max-w-[1110px] xl:pr-[29px]">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold leading-8 tracking-[-0.33px] md:text-[32px] md:tracking-[-0.44px]"
          aria-label="Logo"
        >
          adamkeyes
        </a>

        {/* My links */}
        <div className="flex gap-[25px] md:gap-8">
          {myLinksData.map((currentLinkData) => {
            return (
              <IconLink
                of={currentLinkData.name}
                link={currentLinkData.link}
                ariaLabel={currentLinkData.ariaLabel}
              />
            );
          })}
        </div>

        {/*  */}
      </div>
    </header>
  );
};

export default Header;
