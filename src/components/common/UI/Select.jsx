import React from "react";

const Select = ({ label = "", options = [], className = "" }) => {
  return (
    <select
      className={`select w-full bg-white md:w-40 border border-base-300 focus-within:border-primary focus-within:outline-none
       focus-within:ring-2 ring-offset-2 ring-primary transition-all duration-300 px-2 rounded-lg focus-visible:outline-0 ${className}`}
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
