import React from "react";

type TypographyProps = {
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  styles?: "xl" | "lg" | "sm" | "none";
  customClasses?: string;
  children: React.ReactNode;
};

// The default component
const Typography: React.FC<TypographyProps> = ({
  tagName = "p",
  styles = "sm",
  customClasses,
  children,
}) => {
  let className;

  switch (styles.toLowerCase()) {
    case "xl":
      className =
        "text-[40px] font-bold leading-none -tracking-[1.14px] md:text-7xl md:-tracking-[2px] xl:text-[88px] xl:-tracking-[2.5px]";
      break;

    case "lg":
      className =
        "text-[32px] font-bold leading-10 -tracking-[1px] md:text-5xl md:leading-[56px] md:-tracking-[1.5px]";
      break;

    case "sm":
      className =
        "text-base font-medium leading-[26px] text-soft-gray md:text-lg";
      break;

    case "none":
      className = "";
      break;

    default:
      className = "";
      break;
  }

  return React.createElement(
    tagName,
    { className: `${className} ${customClasses}` },
    children,
  );
};

export default Typography;
