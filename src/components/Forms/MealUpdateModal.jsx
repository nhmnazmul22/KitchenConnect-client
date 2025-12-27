/* eslint-disable react-hooks/refs */
import { ImagePlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../common/UI/Input";
import Select from "../common/UI/Select";
import { uploadFile } from "@/lib/fileUploadHelper";
import toast from "react-hot-toast";
import { updateMeal } from "@/services/MealService";

const MealUpdateModal = ({ modalRef, meal, refetch }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      foodName: "",
      foodImage: "",
      price: 0,
      estimatedDeliveryTime: "",
      deliveryArea: "",
      ingredients: "",
      chefExperience: "",
    },
  });
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

    setValue("foodImage", "");
  };

  const handleUpdateMeal = async (data) => {
    let foodImage = data.foodImage;
    if (data.imageFile) {
      const upload = await uploadFile(data.imageFile);
      if (!upload.success) {
        toast.error(upload.message || "Image upload failed");
        return;
      }
      foodImage = upload.url;
    }

    const mealData = {
      foodName: data.foodName,
      foodImage: foodImage,
      price: Number(data.price),
      estimatedDeliveryTime: data.estimatedDeliveryTime,
      deliveryArea: data.deliveryArea,
      ingredients: data.ingredients.split(",").map((i) => i.trim()),
      chefExperience: data.chefExperience,
    };

    const result = await updateMeal(meal._id, mealData);
    if (result.success) {
      toast.success(result.message || "Meal updated successfully!");
      refetch();
      reset({
        foodName: meal.foodName || "",
        foodImage: meal.foodImage || "",
        price: meal.price || "",
        estimatedDeliveryTime: meal.estimatedDeliveryTime || "",
        deliveryArea: meal.deliveryArea || "",
        ingredients: meal.ingredients.join(",") || "",
        chefExperience: meal.chefExperience || "",
      });
      setPreviewUrl("");
      modalRef.current.close();
      return;
    } else {
      toast.error(result.message || "Meal updated failed!");
      return;
    }
  };

  useEffect(() => {
    if (meal) {
      reset({
        foodName: meal.foodName || "",
        foodImage: meal.foodImage || "",
        price: meal.price || "",
        estimatedDeliveryTime: meal.estimatedDeliveryTime || "",
        deliveryArea: meal.deliveryArea || "",
        ingredients: meal.ingredients.join(",") || "",
        chefExperience: meal.chefExperience || "",
      });
      setPreviewUrl(meal.foodImage);
    }
  }, [meal, reset]);

  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update meal</h3>
        <div className="modal-action">
          <form method="dialog" className="flex flex-col gap-2">
            <div className="">
              <label className="label text-base font-semibold mb-4 block">
                Meal Image
              </label>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div
                  className="relative w-40 h-40 bg-muted rounded-xl border-2 border-dashed border-base-300 flex
                 items-center justify-center"
                >
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
                    {...register("foodImage", {
                      onChange: (e) => {
                        setPreviewUrl(e.target.value);
                        setValue("imageFile", null);
                      },
                      validate: () => {
                        const file = getValues("imageFile");
                        if (!file && !getValues("foodImage")) {
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
                      Upload a high-quality image of your meal. Recommended
                      size: 800x600px.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div>
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
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="experience">Experience</label>
              <Controller
                name="chefExperience"
                control={control}
                rules={{ required: "Experience required" }}
                render={({ field }) => (
                  <Select
                    label="Select Experience"
                    options={[
                      { label: "1-3 years", value: "1-3 years" },
                      { label: "4-7 years", value: "4-7 years" },
                      { label: "8-15 years", value: "8-15 years" },
                      { label: "15+ years", value: "15+ years" },
                    ]}
                    {...field}
                  />
                )}
              />
              {errors.chefExperience && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.chefExperience.message}
                </p>
              )}
            </div>
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
                {...register("estimatedDeliveryTime", {
                  required: "Delivery time is required",
                })}
              />
              {errors.estimatedDeliveryTime && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.estimatedDeliveryTime.message}
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

            <div className="flex gap-2 items-center justify-end mt-5">
              <button className="btn">Close</button>
              <button
                className="btn btn-primary btn-shine disabled:btn-disabled"
                disabled={isSubmitting}
                onClick={handleSubmit(handleUpdateMeal)}
              >
                {isSubmitting ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default MealUpdateModal;
