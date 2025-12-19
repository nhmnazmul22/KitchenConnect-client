import { ShoppingCart } from "lucide-react";
import React from "react";

const ConfirmationModal = ({ showConfirmation, setShowConfirmation }) => {
  return (
    <dialog className={`modal ${showConfirmation ? "modal-open" : ""}`}>
      <div className="modal-box text-center">
        <h3 className="font-display text-2xl font-bold">🎉 Order Confirmed!</h3>
        <div className="py-6">
          <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="w-10 h-10 text-secondary" />
          </div>
          <p className="opacity-70">
            Your order has been placed successfully! You'll receive a
            confirmation email shortly.
          </p>
          <div className="mt-6 p-4 bg-base-200 rounded-xl">
            <p className="text-sm opacity-70">Order ID</p>
            <p className="font-mono font-semibold">#ORD-2024-001234</p>
          </div>
        </div>
        <div className="modal-action justify-center">
          <button
            className="btn btn-primary w-full"
            onClick={() => setShowConfirmation(false)}
          >
            Track My Order
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setShowConfirmation(false)}>close</button>
      </form>
    </dialog>
  );
};

export default ConfirmationModal;
