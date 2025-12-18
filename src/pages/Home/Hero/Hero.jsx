// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { stats } from "../../../constants";
import { ArrowRight, Star, Clock } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 hero-section overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge badge-primary badge-lg gap-2"
            >
              <Star className="w-4 h-4 fill-current" />
              #1 Home-Cooked Meal Marketplace
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Taste the Love in
              <span className="text-gradient block">Every Homemade Bite</span>
            </h1>

            <p className="text-lg opacity-70 max-w-xl">
              Connect with passionate local chefs and enjoy authentic,
              home-cooked meals delivered fresh to your doorstep. Experience the
              warmth of homemade food, made just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/meals"
                className="btn btn-primary btn-lg btn-shine group"
              >
                Explore Meals
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/register" className="btn btn-outline btn-lg">
                Become a Chef
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-base-300">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 mx-auto text-primary mb-1" />
                  <p className="font-bold text-xl">{stat.value}</p>
                  <p className="text-xs opacity-60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform rotate-6" />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
                alt="Delicious home-cooked meals"
                className="relative rounded-3xl shadow-2xl animate-float"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fast Delivery</p>
                    <p className="text-xs opacity-60">30-45 min average</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-300"
              >
                <div className="flex items-center gap-2">
                  <div className="avatar-group -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="avatar">
                        <div className="w-8">
                          <img
                            src={`https://i.pravatar.cc/40?img=${i + 10}`}
                            alt="Chef"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">500+ Chefs</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-warning fill-warning" />
                      <span className="text-xs opacity-60">4.9 rated</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
