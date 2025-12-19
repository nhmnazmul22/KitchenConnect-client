import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Mail,
  Lock,
  User,
  ChefHat,
  Eye,
  EyeOff,
  ImagePlus,
} from "lucide-react";
import { useState } from "react";
import Logo from "../../../components/common/Logo/Logo";
import Input from "../../../components/common/UI/Input";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-base-100 flex">
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-linear-to-br from-secondary/80 to-secondary" />
        <img
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800"
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

          <form className="space-y-5">
            <div className="form-control">
              <label className="label mb-1">Profile Image</label>
              <div className="flex sm:items-center max-sm:flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center border-2 border-dashed border-base-300">
                  <ImagePlus className="w-6 h-6 opacity-50" />
                </div>
                <div className="flex-1">
                  <Input type="text" placeholder="Enter image URL"></Input>
                  <p className="text-xs opacity-60 mt-3">
                    JPG, PNG or GIF, max 2MB
                  </p>
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                icon={<User className="w-5 h-5 opacity-50" />}
              ></Input>
            </div>

            <div className="form-control">
              <label className="label">Email Address</label>
              <Input
                type="email"
                placeholder="you@example.com"
                icon={<Mail className="w-5 h-5 opacity-50" />}
              ></Input>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div
                className="input gap-2 w-full focus-within:outline-none
              focus-within:border-neutral-300 focus-within:shadow-sm flex items-center"
              >
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  icon={<Lock className="w-5 h-5 opacity-50" />}
                  labelClassNames="border-0 bg-transparent p-0"
                ></Input>
                <button
                  type="button"
                  className="btn btn-ghost btn-xs btn-circle "
                  onClick={() => setShowConfirmPassword(!showPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="form-control">
              <label className="label">Address</label>
              <textarea
                placeholder="Enter your delivery address"
                className="textarea mt-2 min-h-30 w-full focus-within:outline-0 focus-within:border-neutral-300"
              />
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="text-xs sm:text-sm">
                  I agree to the{" "}
                  <Link to="/terms" className="link link-primary">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="link link-primary">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-shine">
              Create Account
            </button>
          </form>

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
