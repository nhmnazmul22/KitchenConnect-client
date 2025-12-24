import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Input from "@/components/common/UI/Input";
import Textarea from "@/components/common/UI/Textarea";
import { Mail, Lock, User, Eye, EyeOff, ImagePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { uploadFile } from "@/lib/fileUploadHelper";
import toast from "react-hot-toast";
import { saveUser } from "@/services/UserService";
import useAuth from "@/hooks/useAuth";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [previewUrl, setPreviewUrl] = useState("");
  const { createUser, updateUser, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("imageFile", file, { shouldDirty: true, shouldValidate: true });
      const url = URL.createObjectURL(file);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
      setValue("profileImage", "", {
        shouldDirty: true,
        shouldValidate: true,
      });
    } else {
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return "";
      });
    }
  };

  const handleRegisterSubmit = async (data) => {
    let profileImage = data.profileImage;
    try {
      if (data.imageFile) {
        const result = await uploadFile(data.imageFile);
        if (!result.success) {
          toast.error(
            result?.message || "Registration failed, Please try again."
          );
          return;
        }
        profileImage = result.url;
      }

      const registrationData = {
        name: data.name,
        email: data.email,
        address: data.address,
        profileImage: profileImage,
      };

      const response = await createUser(data.email, data.password);

      if (!response.user) {
        throw new Error(
          response?.message || "Registration failed, Please try again."
        );
      }

      await updateUser({
        displayName: data.name,
        photoURL: profileImage,
      });

      const result = await saveUser(registrationData);

      if (!result.success) {
        throw new Error(
          result?.message || "Registration failed, Please try again."
        );
      }

      reset();
      setPreviewUrl("");
      signOutUser();
      toast.success("Registration successful!");
      navigate("/auth/login");
    } catch (err) {
      toast.error(err?.message || "Registration failed, Please try again.");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="form-control">
        <label className="label mb-1">Profile Image</label>
        <div className="flex sm:items-center max-sm:flex-col gap-4">
          <div
            className="relative w-16 h-16 rounded-full bg-base-200 flex items-center justify-center border-2
           border-dashed border-base-300"
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <ImagePlus className="w-6 h-6 opacity-50" />
            )}
            <input
              type="file"
              className="absolute w-16 h-16 rounded-full opacity-0"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter image URL"
              {...register("profileImage", {
                onChange: (e) => {
                  setPreviewUrl(e.target.value);
                  setValue("imageFile", null, {
                    shouldDirty: true,
                    shouldValidate: true,
                  });
                },
                validate: {
                  notEmpty: (profileImage) => {
                    const file = getValues("imageFile");
                    if (!profileImage && !file) {
                      return "Please provide an image URL or upload a file";
                    }
                    return true;
                  },
                },
              })}
            ></Input>
            {errors?.profileImage ? (
              <span className="text-sm text-red-500 mt-1 block">
                {errors?.profileImage?.message}
              </span>
            ) : (
              <p className="text-xs opacity-60 mt-3">
                JPG, PNG or GIF, max 2MB
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="form-control">
        <label className="label">Full Name</label>
        <Input
          type="text"
          placeholder="John Doe"
          icon={<User className="w-5 h-5 opacity-50" />}
          {...register("name", { required: "Full name is required" })}
        ></Input>
        {errors?.name && (
          <span className="text-sm text-red-500 mt-1 block">
            {errors?.name?.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Email Address</label>
        <Input
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-5 h-5 opacity-50" />}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        ></Input>
        {errors?.email && (
          <span className="text-sm text-red-500 mt-1 block">
            {errors?.email?.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Password</label>
        <div
          className="input gap-2 w-full focus-within:outline-none
              focus-within:border-neutral-300 focus-within:shadow-smflex items-center"
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

      <div className="form-control">
        <label className="label">Confirm Password</label>
        <div
          className="input gap-2 w-full focus-within:outline-none
              focus-within:border-neutral-300 focus-within:shadow-sm flex items-center"
        >
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5 opacity-50" />}
            labelClassNames="border-0 bg-transparent p-0"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: {
                isPasswordMatch: async (value) => {
                  const password = getValues("password");
                  return value === password || "Passwords do not match";
                },
              },
            })}
          ></Input>
          <button
            type="button"
            className="btn btn-ghost btn-xs btn-circle "
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {errors?.confirmPassword && (
          <span className="text-sm text-red-500 mt-1 block">
            {errors?.confirmPassword?.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label">Address</label>
        <Textarea
          placeholder="Enter your delivery address"
          {...register("address")}
        ></Textarea>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            {...register("terms", { required: "You must agree to the terms" })}
          />
          <span className="text-xs sm:text-sm">
            I agree to the{" "}
            <Link to="#" className="link link-primary">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="#" className="link link-primary">
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors?.terms && (
          <span className="text-sm text-red-500 mt-1 block">
            {errors?.terms?.message}
          </span>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="btn btn-primary w-full btn-shine disabled:btn-disabled"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;
