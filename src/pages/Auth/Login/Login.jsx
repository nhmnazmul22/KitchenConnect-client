import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Logo from "@/components/common/Logo/Logo";
import Input from "@/components/common/UI/Input";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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

          <form className="space-y-5">
            <div className="form-control">
              <label className="label mb-1">Email Address</label>
              <label
                className="input input-bordered flex items-center gap-2 w-full focus-within:outline-none
              focus-within:border-neutral-300 focus-within:shadow-md"
              >
                <Mail className="w-5 h-5 opacity-50" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="grow"
                />
              </label>
            </div>

            <div className="form-control mb-0">
              <label className="label mb-1">Password</label>
              <div
                className="input gap-2 w-full focus-within:outline-none
              focus-within:border-neutral-300 focus-within:shadow-sm flex items-center"
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  icon={<Lock className="w-5 h-5 opacity-50" />}
                  labelClassNames="border-0 bg-transparent p-0"
                ></Input>
                <button
                  type="button"
                  className="btn btn-ghost btn-xs btn-circle "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="mb-5">
              <Link
                to="/forgot-password"
                className="text-sm btn-link link-primary"
              >
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary w-full btn-shine">
              Sign In
            </button>
          </form>

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
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
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
