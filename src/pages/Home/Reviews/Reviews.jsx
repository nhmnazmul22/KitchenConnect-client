// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { reviews } from "../../../constants";
import ReviewCard from "../../../components/Reviews/ReviewCard";

const Reviews = () => {
  const featuredReviews = reviews.slice(0, 3);

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
            Customer Love
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard review={review} showMealName />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
