import OrderCard from "@/components/Orders/OrderCard";
import { orders } from "@/constants";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
const OrderRequestsPage = () => {
  return (
    <div className="pr-5">
      <DashboardPageHeader
        title="Order Requests"
        subTitle="Manage incoming orders from customers"
      ></DashboardPageHeader>

      <div className="flex flex-wrap max-sm:justify-center gap-2 mb-6 overflow-x-auto pb-2">
        {["All", "Pending", "Delivered", "Cancelled"].map((tab) => (
          <button
            key={tab}
            className={`btn text-sm font-medium whitespace-nowrap transition-colors ${
              tab === "All" ? "btn-primary" : "btn-outline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-y-5 md:gap-5">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} isChefView />
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            No order requests at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderRequestsPage;
