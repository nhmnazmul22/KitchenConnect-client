// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { benefits } from "../../../constants";

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            The LocalChefBazaar Difference
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card bg-base-100 shadow-md card-elevated border border-base-300 hover:border-primary/30 group"
            >
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-primary transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-content" />
                </div>
                <h3 className="card-title font-display text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm opacity-70">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
