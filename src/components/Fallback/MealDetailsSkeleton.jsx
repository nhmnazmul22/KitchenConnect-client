import { motion } from "motion/react";

const MealDetailsSkeleton = () => {
  return (
    <div className="bg-background pt-20 pb-10">
      <div className="main-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 py-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative max-lg:max-w-md w-full "
          >
            <div className="flex w-full flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </motion.div>
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MealDetailsSkeleton;
