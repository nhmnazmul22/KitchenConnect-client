import React from "react";

const Input = ({
  icon,
  placeholder = "",
  type = "text",
  inputClassNames,
  ...props
}) => {
  return (
    <div
      className="flex items-center bg-white border border-base-300 focus-within:border-primary focus-within:ring-2
            ring-offset-2 ring-primary transition-all duration-300 px-2 rounded-lg"
    >
      {icon && <span className="">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full border-0 bg-transparent focus-within:outline-0 shadow-none ${inputClassNames}`}
        {...props}
      />
    </div>
  );
};

export default Input;
