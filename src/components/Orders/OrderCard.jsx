import { Clock, User, CreditCard, MapPin } from "lucide-react";

const OrderCard = ({
  order,
  showActions = true,
  isChefView = false,
  handleOrderStatusUpdate,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-secondary/20 text-secondary";
      case "pending":
        return "bg-accent/20 text-accent-foreground";
      case "cancelled":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-green-600/20 text-green-600";
    }
  };

  const getPaymentColor = (status) => {
    return status === "paid"
      ? "bg-secondary/20 text-secondary"
      : "bg-primary/20 text-primary";
  };

  return (
    <div className="card bg-base-100 shadow-md card-elevated">
      <div className="card-body">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {order.mealName}
                </h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <User className="w-3.5 h-3.5" />
                  {order.chefName} • #{order.chefId}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-primary">
                  ${Number(order.price).toFixed(2)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Qty: {order.quantity}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  order.orderStatus
                )}`}
              >
                {order.orderStatus.charAt(0).toUpperCase() +
                  order.orderStatus.slice(1)}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentColor(
                  order.paymentStatus
                )}`}
              >
                <CreditCard className="w-3 h-3 inline mr-1" />
                {order.paymentStatus.charAt(0).toUpperCase() +
                  order.paymentStatus.slice(1)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {order.userAddress}
              </span>
            </div>
          </div>
        </div>

        {showActions && (
          <div className="mt-4 pt-4 border-t border-base-300 flex flex-wrap gap-2">
            {isChefView ? (
              <>
                {order.orderStatus === "pending" && (
                  <>
                    <button
                      onClick={() =>
                        handleOrderStatusUpdate(order._id, "cancel")
                      }
                      className="btn btn-outline btn-sm flex-1 sm:flex-none"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        handleOrderStatusUpdate(order._id, "accepted")
                      }
                      className="flex-1 btn btn-primary btn-sm sm:flex-none"
                    >
                      Accept
                    </button>
                  </>
                )}
                {order.orderStatus === "accepted" && (
                  <button className="btn btn-primary btn-sm flex-1 sm:flex-none">
                    Mark Delivered
                  </button>
                )}
              </>
            ) : (
              <>
                {order.paymentStatus === "pending" && (
                  <button className="btn btn-secondary btn-shine">
                    Pay Now
                  </button>
                )}
                {order.orderStatus === "delivered" && (
                  <button className="btn btn-outline">Leave Review</button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
