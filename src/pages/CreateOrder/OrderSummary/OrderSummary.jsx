import { ChefHat, Clock } from "lucide-react";

const OrderSummary = ({ selectedMeal, orderData, setShowConfirmation }) => {
  return (
    <div className="">
      <div className="card bg-base-100 shadow-md border border-base-300 sticky top-28">
        <div className="card-body">
          <h2 className="card-title font-display">Order Summary</h2>
          <div className="flex gap-4 pb-4 border-b border-base-300 mb-4">
            <img
              src={selectedMeal.image}
              alt={selectedMeal.foodName}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-1">
                {orderData.mealName}
              </h3>
              <p className="text-sm opacity-70 flex items-center gap-1 mt-1">
                <ChefHat className="w-3.5 h-3.5" />
                {orderData.chefName}
              </p>
              <p className="text-sm opacity-70 flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedMeal.deliveryTime}
              </p>
            </div>
          </div>

          <div className="space-y-3 pb-4 border-b border-base-300 mb-4">
            <div className="flex justify-between text-sm">
              <span className="opacity-70">
                {orderData.mealName} × {orderData.quantity}
              </span>
              <span>${orderData.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="opacity-70">Delivery Fee</span>
              <span>$3.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="opacity-70">Service Fee</span>
              <span>$1.99</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold text-primary">
              ${(orderData.totalPrice + 3.99 + 1.99).toFixed(2)}
            </span>
          </div>

          <div className="bg-base-200 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-70">Order Status</span>
              <span className="badge badge-warning">Pending</span>
            </div>
          </div>

          <button
            className="btn btn-primary w-full btn-shine"
            onClick={() => setShowConfirmation(true)}
          >
            Confirm Order
          </button>

          <p className="text-xs opacity-60 text-center mt-4">
            By placing this order, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
