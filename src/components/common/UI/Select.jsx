import React from "react";

const Select = ({ label = "", options = [], className = "", ...props }) => {
  return (
    <select
      className={`select w-full! bg-base-100 md:w-40 border border-base-300 ${className}`}
      {...props}
    >
      <option disabled>{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
