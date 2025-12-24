import { ChefHat, Clock, Loader2 } from "lucide-react";

const OrderSummary = ({ selectedMeal, orderData, isSubmitLoading }) => {
  return (
    <div className="">
      <div className="card bg-base-100 shadow-md border border-base-300 sticky top-28">
        <div className="card-body">
          <h2 className="card-title font-display">Order Summary</h2>
          <div className="flex gap-4 pb-4 border-b border-base-300 mb-4">
            <img
              src={selectedMeal?.foodImage || null}
              alt={selectedMeal?.foodName}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-1">
                {selectedMeal?.foodName}
              </h3>
              <p className="text-sm opacity-70 flex items-center gap-1 mt-1">
                <ChefHat className="w-3.5 h-3.5" />
                {selectedMeal?.chefName}
              </p>
              <p className="text-sm opacity-70 flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedMeal?.estimatedDeliveryTime}
              </p>
            </div>
          </div>

          <div className="space-y-3 pb-4 border-b border-base-300 mb-4">
            <div className="flex justify-between text-sm">
              <span className="opacity-70">
                {selectedMeal?.foodName} × {orderData.quantity}
              </span>
              <span>${orderData.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold text-primary">
              ${orderData.totalPrice.toFixed(2)}
            </span>
          </div>

          <button type="submit" className="btn btn-primary w-full btn-shine">
            {isSubmitLoading ? (
              <Loader2 className="w-5 h-5" />
            ) : (
              "Confirm Order"
            )}
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
