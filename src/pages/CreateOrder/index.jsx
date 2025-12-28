import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import OrderForm from "./OrderForm/OrderForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import { useNavigate, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMealDetails } from "@/services/MealService";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { createOrder } from "@/services/OrderService";
import Swal from "sweetalert2";
import { useState } from "react";

const OrderPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [searchParams, _setSearchParams] = useSearchParams();
  const { userProfile } = useAuth();
  const navigate = useNavigate();
  const mealId = searchParams.get("mealId") ?? null;
  const { data: selectedMeal } = useQuery({
    queryKey: ["meal", mealId],
    queryFn: () => getMealDetails(mealId),
    keepPreviousData: true,
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isLoading: isSubmitLoading, errors },
  } = useForm({
    defaultValues: {
      quantity: 1,
      userAddress: "",
    },
  });

  const handleOrderSubmit = async (data) => {
    if (userProfile.status === "fraud") {
      Swal.fire({
        title: "Sorry, You can't order now.",
        text: "Your account status is fraud. Please contact system administration fro this issue. Thank you!",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Do you want to confirm the order?",
      text: `Your total price is ${
        Number(selectedMeal?.price ?? 0) * quantity
      }.`,
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#22bb33",
      cancelButtonColor: "#aaaaaa",
      confirmButtonText: "Yes, Confirm it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const payload = {
          mealId: selectedMeal._id || null,
          quantity: Number(data.quantity || 1),
          userAddress: data.userAddress || "",
        };
        const result = await createOrder(payload);
        if (result.success) {
          Swal.fire({
            title: "Order Successful!",
            text: result.message || "Order create successful, Please pay now.",
            icon: "success",
          });
          reset({
            quantity: 1,
            userAddress: "",
          });
          navigate("/dashboard/orders");
        } else {
          Swal.fire({
            title: "Order failed! Try again.",
            text: result.message || "Order create failed, Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  const quantity = Number(useWatch({ control, name: "quantity" }) || 1);
  const orderData = {
    mealName: selectedMeal?.foodName ?? "",
    chefName: selectedMeal?.chefName ?? "",
    chefId: selectedMeal?.chefId ?? "",
    price: selectedMeal?.price ?? 0,
    userEmail: userProfile.email ?? "",
    quantity: quantity ?? 1,
    totalPrice: Number(selectedMeal?.price ?? 0) * quantity,
  };

  return (
    <div className="min-h-screen bg-base-100 pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Complete Your Order
            </h1>
            <p className="opacity-70 mt-2">
              You're just a few steps away from enjoying a delicious home-cooked
              meal!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleOrderSubmit)}
            className="grid md:grid-cols-2 gap-8"
          >
            <OrderForm
              register={register}
              errors={errors}
              orderData={orderData}
            ></OrderForm>

            <OrderSummary
              orderData={orderData}
              selectedMeal={selectedMeal}
              isSubmitLoading={isSubmitLoading}
            ></OrderSummary>
          </form>
        </motion.div>
      </div>

      <ConfirmationModal
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
      ></ConfirmationModal>
    </div>
  );
};

export default OrderPage;
