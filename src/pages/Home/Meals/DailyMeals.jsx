// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { meals } from "@/constants";
import MealCard from "@/components/Meals/MealCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const DailyMeals = () => {
  const dailyMeals = meals.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Fresh & Hot
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Today's Featured Meals
          </h2>
          <p className="opacity-70 mt-3 max-w-2xl mx-auto">
            Discover today's selection of delicious home-cooked meals from our
            talented local chefs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyMeals.map((meal, index) => (
            <motion.div
              key={meal._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MealCard meal={meal} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/meals" className="btn btn-outline btn-lg group">
            View All Meals
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DailyMeals;
