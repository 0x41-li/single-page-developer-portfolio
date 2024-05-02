import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// components
import IconLink from "../components/IconLink";

// data
import data from "../data/data.json";

// Global code
gsap.registerPlugin(useGSAP);

const Header: React.FC = () => {
  const { iconLinks } = data.header;

  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  return (
    <header
      ref={headerRef}
      className="absolute z-50 mt-5 w-full md:mt-[29px] xl:mt-[39px] "
    >
      <div className="mx-auto flex max-w-[153px] flex-col items-center gap-5 md:max-w-[708px] md:flex-row md:justify-between xl:max-w-[1110px] xl:pr-[29px]">
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
    </header>
  );
};

export default Header;
