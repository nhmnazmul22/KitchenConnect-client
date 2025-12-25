import CardSkeleton from "@/components/Fallback/CardSkeleton";
import OrderCard from "@/components/Orders/OrderCard";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import { getMyOrders } from "@/services/OrderService";
import { useQuery } from "@tanstack/react-query";

const OrdersPage = () => {
  const {
    data: result,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-orders"],
    queryFn: () => getMyOrders(),
    keepPreviousData: true,
  });

  return (
    <div>
      <DashboardPageHeader
        title="Orders"
        subTitle="Track and manage your meal orders"
      ></DashboardPageHeader>

      {!result && isError && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error.message || "You haven't placed any orders yet."}
          </p>
        </div>
      )}

      {!isError && (
        <div className="grid md:grid-cols-2 gap-5 space-y-4">
          {result?.data && result?.data?.length > 0 && !isLoading ? (
            result?.data?.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))
          ) : (
            <CardSkeleton limit={4} />
          )}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
