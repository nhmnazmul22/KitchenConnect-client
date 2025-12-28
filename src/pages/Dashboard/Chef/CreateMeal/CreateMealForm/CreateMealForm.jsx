import React from "react";
import { ImagePlus, Clock, MapPin, DollarSign } from "lucide-react";
import Textarea from "@/components/common/UI/Textarea";
import Input from "@/components/common/UI/Input";
import Select from "@/components/common/UI/Select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { uploadFile } from "@/lib/fileUploadHelper";
import { createMeal } from "@/services/MealService";
import Swal from "sweetalert2";

const CreateMealForm = () => {
  const { userProfile } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("imageFile", file, { shouldDirty: true, shouldValidate: true });
    const url = URL.createObjectURL(file);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });

    setValue("mealImage", "");
  };

  const handleCreateMeal = async (data) => {
    if (userProfile.status === "fraud") {
      Swal.fire({
        title: "Sorry, You can't create new meal.",
        text: "Your account status is fraud. Please contact system administration fro this issue. Thank you!",
        icon: "error",
      });
      return;
    }

    try {
      let mealImage = data.mealImage;

      if (data.imageFile) {
        const upload = await uploadFile(data.imageFile);
        if (!upload.success) {
          toast.error(upload.message || "Image upload failed");
          return;
        }
        mealImage = upload.url;
      }

      const mealData = {
        foodName: data.foodName,
        foodImage: mealImage,
        price: Number(data.price),
        estimatedDeliveryTime: data.deliveryTime,
        deliveryArea: data.deliveryArea,
        ingredients: data.ingredients.split(",").map((i) => i.trim()),
        chefExperience: data.experience,
      };

      const result = await createMeal(mealData);
      if (result.success) {
        toast.success(result.message || "Meal published successfully!");
        reset();
        setPreviewUrl("");
        return;
      } else {
        toast.error(result.message || "Meal create failed!");
        return;
      }
    } catch (err) {
      toast.error(err?.message || "Failed to create meal");
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(handleCreateMeal)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
          <label className="label text-base font-semibold mb-4 block">
            Meal Image
          </label>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="relative w-40 h-40 bg-muted rounded-xl border-2 border-dashed border-base-300 flex items-center justify-center">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <ImagePlus className="w-10 h-10 opacity-50" />
              )}
              <input
                className="w-full h-full absolute opacity-0"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Input
                placeholder="Enter image URL"
                {...register("mealImage", {
                  onChange: (e) => {
                    setPreviewUrl(e.target.value);
                    setValue("imageFile", null);
                  },
                  validate: () => {
                    const file = getValues("imageFile");
                    if (!file && !getValues("mealImage")) {
                      return "Image URL or file is required";
                    }
                    return true;
                  },
                })}
              />

              {errors.mealImage ? (
                <p className="text-sm text-red-500 mt-1">
                  {errors.mealImage.message}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Upload a high-quality image of your meal. Recommended size:
                  800x600px.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
          <label className="label text-base font-semibold mb-4 block">
            Basic Information
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="foodName" className="label">
                Meal Name
              </label>
              <Input
                id="foodName"
                placeholder="e.g., Homemade Butter Chicken"
                className="mt-1.5"
                {...register("foodName", { required: "Meal name is required" })}
              />
              {errors.foodName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.foodName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="chefName" className="label">
                Chef Name
              </label>
              <Input
                id="chefName"
                value={userProfile?.name || ""}
                readOnly
                className="mt-1.5"
                labelClassNames="bg-base-300"
              />
            </div>

            <div>
              <label htmlFor="chefId" className="label">
                Chef ID
              </label>
              <Input
                id="chefId"
                value={userProfile?.chefId || ""}
                readOnly
                className="mt-1.5"
                labelClassNames="bg-base-300"
              />
            </div>

            <div>
              <label htmlFor="userEmail" className="label">
                Email
              </label>
              <Input
                id="userEmail"
                value={userProfile?.email || ""}
                readOnly
                className="mt-1.5"
                labelClassNames="bg-base-300"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="experience">Experience</label>
              <Select
                id="experience"
                label="Select Experience"
                options={[
                  { label: "1-3 years", value: "1-3 years" },
                  { label: "4-7 years", value: "4-7 years" },
                  { label: "8-15 years", value: "8-15 years" },
                  { label: "15+ years", value: "15+ years" },
                ]}
                {...register("chefExperience", {
                  required: "Experience required",
                })}
              />
              {errors.chefExperience && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.chefExperience.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
          <label className="label text-base font-semibold mb-4 block">
            Pricing & Delivery
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="label">
                Price ($)
              </label>
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="15.99"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="deliveryTime" className="label">
                Delivery Time
              </label>
              <Input
                id="deliveryTime"
                placeholder="30-45 mins"
                {...register("deliveryTime", {
                  required: "Delivery time is required",
                })}
              />
              {errors.deliveryTime && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.deliveryTime.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="deliveryArea" className="label">
                Delivery Area
              </label>
              <Input
                id="deliveryArea"
                placeholder="Downtown, Midtown"
                {...register("deliveryArea", {
                  required: "Delivery area is required",
                })}
              />
              {errors.deliveryArea && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.deliveryTime.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
          <label className="label font-semibold mb-4 block">Details</label>
          <div className="space-y-4">
            <div>
              <label htmlFor="ingredients" className="label">
                Ingredients (comma-separated)
              </label>
              <Input
                id="ingredients"
                placeholder="Chicken, Butter, Tomatoes, Cream, Spices"
                className="mt-1.5"
                {...register("ingredients", {
                  required: "Ingredients is required",
                })}
              />
              {errors.ingredients && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.ingredients.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-auto mt-5 w-fit">
        <button
          disabled={isSubmitting}
          className="btn btn-primary flex-1 btn-shine disabled:btn-disabled"
        >
          {isSubmitting ? "Publishing..." : "Publish Meal"}
        </button>
      </div>
    </form>
  );
};

export default CreateMealForm;
