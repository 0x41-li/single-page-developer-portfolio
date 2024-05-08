import React, { useEffect, useRef } from "react";
import anime from "animejs";


// components
import IconLink from "../components/IconLink";

// data
import data from "../data/data.json";

const Header: React.FC = () => {
  const { iconLinks } = data.header;

  // refs
  const logoRef = useRef<HTMLAnchorElement>(null)
  const headerLinksParentRef = useRef<HTMLDivElement>(null)

  // animating the refs
  useEffect(() => {
    // animating the logo
    if (logoRef.current) {
      anime({
        targets: logoRef.current,
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInOutExpo",
      })
    }

    // animationg the header links using stagging 
    if (headerLinksParentRef.current) {
      anime({
        targets: headerLinksParentRef.current.children,
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100),
        easing: "easeInOutExpo",
      })
    }

  })

  return (
    <header
      className="absolute z-50 mt-5 w-full md:mt-[29px] xl:mt-[39px] "
    >
      <div
        className="mx-auto flex max-w-[153px] flex-col items-center gap-5 md:max-w-[708px] md:flex-row md:justify-between xl:max-w-[1110px] xl:pr-[29px]"
      >
        {/* Logo */}
        <a
          ref={logoRef}
          href="/"
          className="text-2xl font-bold leading-8 tracking-[-0.33px] md:text-[32px] md:tracking-[-0.44px]"
          aria-label="Logo"
        >
          adamkeyes
        </a>

        {/* Icon links */}
        <div ref={headerLinksParentRef} className="flex gap-[25px] md:gap-8">
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
