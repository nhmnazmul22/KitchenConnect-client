import { CreditCard, MapPin } from "lucide-react";
import React from "react";
import Input from "@/components/common/UI/Input";
import Textarea from "@/components/common/UI/Textarea";

const OrderForm = ({ register, orderData, errors }) => {
  return (
    <div className="space-y-6">
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body">
          <h2 className="card-title font-display flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Order Details
          </h2>

          <div className="space-y-4 mt-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Meal Name</label>
                <Input
                  type="text"
                  value={orderData.mealName}
                  readOnly
                  labelClassNames="bg-base-200"
                ></Input>
              </div>
              <div className="form-control">
                <label className="label">Price per Serving</label>
                <Input
                  type="text"
                  value={`$${orderData.price.toFixed(2)}`}
                  readOnly
                  labelClassNames="bg-base-200"
                ></Input>
              </div>
              <div className="form-control">
                <label className="label">Chef ID</label>
                <Input
                  type="text"
                  value={orderData.chefId}
                  readOnly
                  labelClassNames="bg-base-200"
                ></Input>
              </div>
              <div className="form-control">
                <label className="label">Your Email</label>
                <Input
                  type="text"
                  value={orderData.userEmail}
                  readOnly
                  labelClassNames="bg-base-200"
                ></Input>
              </div>
            </div>
            <div className="form-control">
              <label className="label">Quantity</label>
              <Input
                type="number"
                defaultValue={2}
                min={1}
                max={10}
                {...register("quantity", {
                  required: { value: true, message: "Quantity is required" },
                })}
              ></Input>
              {errors?.quantity && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors?.quantity?.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body">
          <h2 className="card-title font-display flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Delivery Information
          </h2>

          <div className="space-y-4 mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Delivery Address</span>
              </label>
              <Textarea
                placeholder="123 Main St, Apt 4B, Downtown"
                {...register("userAddress", {
                  required: { value: true, message: "Address is required" },
                })}
              ></Textarea>
              {errors?.userAddress && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors?.userAddress?.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
