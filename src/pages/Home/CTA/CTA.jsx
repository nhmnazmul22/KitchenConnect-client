// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHptLTgtMGgtMlYxNmgydjE4em0tOCAwSDEyVjE2aDJ2MTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-content mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="text-primary-content/80 mb-8 max-w-xl mx-auto">
              Join thousands of food lovers who've discovered the joy of
              authentic, home-cooked meals from local chefs in their community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/meals" className="btn btn-secondary btn-lg group">
                Order Your First Meal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
              >
                Start Cooking & Earning
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
