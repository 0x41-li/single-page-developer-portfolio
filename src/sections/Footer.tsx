import React from "react";

// components
import IconLink from "../components/IconLink";

// data
import data from "../data/data.json";

const Footer: React.FC = () => {
  const { iconLinks } = data.footer;

  return (
    <footer className="bg-hard-gray">
      <div className="mx-auto flex max-w-[343px] flex-col items-center gap-5 border-t border-white pb-[60px] pt-[39px] md:max-w-[708px] md:flex-row md:justify-between md:pb-10 md:pt-[30px] xl:max-w-[1110px] xl:pb-[97px] xl:pt-[47px]">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold leading-8 tracking-[-0.33px] md:text-[32px] md:tracking-[-0.44px]"
          aria-label="Logo"
        >
          adamkeyes
        </a>

        {/* Icon links */}
        <div className="flex gap-[25px] md:gap-8">
          {/*  */}
          {iconLinks.map((currentLinkData) => {
            return (
              <IconLink
                key={currentLinkData.name}
                of={currentLinkData.name}
                link={currentLinkData.link}
                ariaLabel={currentLinkData.ariaLabel}
              />
            );
          })}
          {/*  */}
        </div>

        {/*  */}
      </div>
    </footer>
  );
};

export default Footer;
