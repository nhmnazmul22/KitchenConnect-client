import { motion } from "motion/react";
import { ShoppingCart, CreditCard, MapPin, Clock, ChefHat } from "lucide-react";
import { useState } from "react";
import { meals } from "../../constants";
import OrderForm from "./OrderForm/OrderForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";

const OrderPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectedMeal = meals[0];
  const orderData = {
    mealName: selectedMeal.foodName,
    chefName: selectedMeal.chefName,
    chefId: selectedMeal.chefId,
    price: selectedMeal.price,
    userEmail: "john@example.com",
    quantity: 2,
    totalPrice: selectedMeal.price * 2,
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

          <div className="grid md:grid-cols-2 gap-8">
            <OrderForm orderData={orderData}></OrderForm>

            <OrderSummary
              orderData={orderData}
              selectedMeal={selectedMeal}
              setShowConfirmation={setShowConfirmation}
            ></OrderSummary>
          </div>
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
