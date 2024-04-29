import React from "react";

type TypographyProps = {
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  customClasses?: string;
  children: React.ReactNode;
};

// The default component
const Typography: React.FC<TypographyProps> = ({
  tagName = "p",
  customClasses,
  children,
}) => {
  let className;
  switch (tagName.toLowerCase()) {
    case "h1":
      className =
        "text-center text-[40px] font-bold leading-none -tracking-[1.14px] md:text-left md:text-7xl md:-tracking-[2px] xl:whitespace-nowrap xl:text-[88px] xl:-tracking-[2.5px]";
      break;

    case "p":
      className =
        "text-base mt-6 text-center font-medium leading-[26px] text-soft-gray md:mt-[66px] md:text-left md:text-lg xl:mt-[43px] xl:max-w-[445px]";
      break;

    default:
      break;
  }

  return React.createElement(
    tagName,
    { className: `${className} ${customClasses}` },
    children,
  );
};

export default Typography;
