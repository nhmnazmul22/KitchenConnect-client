import OrderCard from "../../../../components/Orders/OrderCard";
import DashboardPageHeader from "../../../../components/Shared/Header/DashboardPageHeader";
import { orders } from "../../../../constants";

const OrdersPage = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Orders"
        subTitle="Track and manage your meal orders"
      ></DashboardPageHeader>

      <div className="grid md:grid-cols-2 gap-5 space-y-4">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12 bg-card rounded-2xl border border-border">
          <p className="text-muted-foreground">
            You haven't placed any orders yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
