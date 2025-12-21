import React from "react";

const Select = ({ label = "", options = [], className = "" , ...props}) => {
  return (
    <select
      className={`select w-full bg-base-100 md:w-40 border border-base-300 ${className}`}
      {...props}
    >
      <option disabled selected>
        {label}
      </option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
