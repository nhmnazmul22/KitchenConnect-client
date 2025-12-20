import React from "react";

const DashboardPageHeader = ({ title = "", subTitle = "" }) => {
  return (
    <div className="mb-8">
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
        {title}
      </h1>
      <p className="text-muted-foreground mt-1">{subTitle}</p>
    </div>
  );
};

export default DashboardPageHeader;
