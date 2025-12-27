import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Input from "@/components/common/UI/Input";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signinUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = async (data) => {
    try {
      await signinUser(data.email, data.password);
      reset();
      navigate(location.state || "/");
    } catch (err) {
      toast.error(err?.message || "Login failed");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleLoginSubmit)}>
      <div className="form-control">
        <label className="label mb-1">Email Address</label>
        <Input
          type="email"
          placeholder="you@example.com"
          className="grow"
          icon={<Mail className="w-5 h-5 opacity-50" />}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors?.email && (
          <span className="text-sm text-red-500 mt-1 block">
            {errors?.email?.message}
          </span>
        )}
      </div>

      <div className="form-control mb-0">
        <label className="label mb-1">Password</label>
        <div
          className="input gap-2 w-full focus-within:outline-none focus-within:border-neutral-300
          focus-within:shadow-none flex items-center"
        >
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5 opacity-50" />}
            labelClassNames="border-0 bg-transparent p-0"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
                message:
                  "Must contain 8 chars, upper, lower, number & special character",
              },
            })}
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
        {errors?.password && (
          <span className="text-sm text-red-500 mt-1 block">
            {errors?.password?.message}
          </span>
        )}
      </div>
      <div className="mb-5">
        <Link to="#" className="text-sm btn-link link-primary">
          Forgot password?
        </Link>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="btn btn-primary w-full btn-shine disabled:cursor-not-allowed disabled:btn-disabled"
      >
        {isSubmitting ? "Sign In..." : " Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
