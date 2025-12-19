import React from "react";
import { motion } from "motion/react";

const PageHeader = ({ title, gradientTitle, subTitle }) => {
  return (
    <section className="hero-section py-12 md:pt-28 md:pb-16">
      <div className="main-container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
            {gradientTitle && (
              <span className="text-gradient">{` ${gradientTitle}`}</span>
            )}
          </h1>
          <p className="opacity-70 text-lg">{subTitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
