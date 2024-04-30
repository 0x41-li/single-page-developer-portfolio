import React from "react";

// The comp's props data types
type FormFieldProps = {
  name: string;
  value: string;
  tagname?: string;
  type?: string;
  placeholder?: string;
  customClasses?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

// The default comp
const FormField: React.FC<FormFieldProps> = ({
  name,
  value,
  tagname = "input",
  type = "text",
  placeholder = "",
  customClasses = "",
  handleChange,
}) => {
  const classname =
    "block h-[43px] w-full border-b border-white bg-transparent bg-opacity-0 pb-4 pl-6 font-medium placeholder:text-base placeholder:uppercase placeholder:leading-[26px] placeholder:-tracking-[0.2px] focus:border-green focus:outline-none";

  return React.createElement(tagname, {
    type,
    name,
    value,
    placeholder,
    className: `${classname} ${customClasses}`,
    onChange: handleChange,
  });
};

export default FormField;
