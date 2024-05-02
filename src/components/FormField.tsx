import React from "react";

// The comp's props data types
type FormFieldProps = {
  name: string;
  value: string;
  tagname?: string;
  type?: string;
  placeholder?: string;
  customClasses?: string;
  error?: string;
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
  error,
  handleChange,
}) => {
  const classname = `uppercase block h-[43px] w-full border-b border-white bg-transparent bg-opacity-0 pb-4 pl-6 font-medium placeholder:text-base placeholder:uppercase placeholder:leading-[26px] placeholder:-tracking-[0.2px] focus:border-green focus:outline-none ${error && "border-[#FF6F5B] focus:border-[#FF6F5B]"}`;

  return (
    <div className="">
      {React.createElement(tagname, {
        key: name,
        type,
        name,
        value,
        placeholder,
        className: `${classname} ${customClasses}`,
        onChange: handleChange,
      })}
      {error && (
        <p
          key={error}
          className="mt-[5px] text-right text-[12px] text-[#FF6F5B]"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
