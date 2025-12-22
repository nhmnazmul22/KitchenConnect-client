import { Link } from "react-router";
import { motion } from "motion/react";
import Logo from "@/components/common/Logo/Logo";
import { RegisterBanner } from "@/assets/meals";
import RegisterForm from "@/components/Forms/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex">
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-linear-to-br from-secondary/80 to-secondary" />
        <img
          src={RegisterBanner}
          alt="Fresh ingredients"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-secondary-content">
            <h2 className="font-display text-4xl font-bold mb-4">
              Join Our Foodie Community
            </h2>
            <p className="text-secondary-content/80 text-lg max-w-md">
              Whether you're a passionate home chef or a food lover, there's a
              place for you at LocalChefBazaar.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md py-8"
        >
          <div className="mb-3">
            <Logo></Logo>
          </div>

          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold">Create Account</h1>
            <p className="opacity-70 mt-2">
              Start your culinary journey with us today.
            </p>
          </div>

          <RegisterForm></RegisterForm>

          <p className="text-center text-sm opacity-70 mt-8">
            Already have an account?{" "}
            <Link to="/auth/login" className="link link-primary font-medium">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
