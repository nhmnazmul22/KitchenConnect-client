import React from "react";

const Textarea = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`textarea mt-2 min-h-30 w-full focus-within:outline-0 focus-within:border-neutral-300 ${className}`}
      {...props}
    />
  );
};

export default Textarea;
