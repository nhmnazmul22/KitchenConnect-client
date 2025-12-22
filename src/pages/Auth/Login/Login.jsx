import { Link } from "react-router";
import { motion } from "motion/react";

import Logo from "@/components/common/Logo/Logo";
import { LoginBanner } from "@/assets/meals";
import LoginForm from "@/components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex">
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Logo></Logo>
          <div className="mb-8 mt-5">
            <h1 className="font-display text-3xl font-bold">Welcome Back!</h1>
            <p className="opacity-70 mt-2">
              Sign in to continue ordering delicious home-cooked meals.
            </p>
          </div>

          <LoginForm></LoginForm>

          <p className="text-center text-sm opacity-70 mt-8">
            Don't have an account?{" "}
            <Link to="/auth/register" className="link link-primary font-medium">
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-linear-to-br from-primary/60 to-primary" />
        <img
          src={LoginBanner}
          alt="Chef cooking"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-primary-content">
            <h2 className="font-display text-4xl font-bold mb-4">
              Delicious meals await you
            </h2>
            <p className="text-primary-content/80 text-lg max-w-md">
              Join our community of food lovers and discover amazing home-cooked
              meals from talented local chefs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
