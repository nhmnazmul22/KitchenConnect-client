import React from "react";

const MealCardSkeleton = ({ limit = 6 }) => {
  return Array.from({ length: limit }).map((_, idx) => (
    <div key={idx} className="flex w-full flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  ));
};

export default MealCardSkeleton;
