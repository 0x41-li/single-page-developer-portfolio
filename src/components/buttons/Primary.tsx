import React from "react";

type PrimaryProps = {
  type?: "button" | "anchor";
  href?: string;
  children: React.ReactNode;
};

const Primary: React.FC<PrimaryProps> = ({
  type = "button",
  href,
  children,
}) => {
  let TagName = "button";

  if ("anchor" === type) {
    TagName = "a";
  }

  const className =
    "relative mx-auto inline-block h-[38px] font-bold leading-7 tracking-[2.29px] md:leading-[26px] uppercase hover:text-green duration-200";

  return React.createElement(
    TagName,
    {
      className,
      ...(href && { href }),
    },
    <>
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-green" />
    </>,
  );
};

export { Primary };
