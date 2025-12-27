import OrderCard from "@/components/Orders/OrderCard";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import { getOrders, updateOrderStatus } from "@/services/OrderService";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "@/components/Fallback/CardSkeleton";
import Pagination from "@/components/common/UI/Pagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";
import toast from "react-hot-toast";
const OrderRequestsPage = () => {
  const { limit, skip, setLimit, setSkip } = useSearch();
  const {
    data = { orders: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["orders", limit, skip],
    queryFn: () => getOrders(limit, skip),
    keepPreviousData: true,
  });

  const handleOrderStatusUpdate = async (orderId, status) => {
    const result = await updateOrderStatus(orderId, status);
    if (result.success) {
      toast.success(result.message || "Order status updated successful");
      refetch();
      return;
    } else {
      toast.error(result.message || "Order status update failed");
      return;
    }
  };

  useEffect(() => {
    setLimit(10);
    setSkip(0);
  }, [setLimit, setSkip]);

  return (
    <div className="pr-5">
      <DashboardPageHeader
        title="Order Requests"
        subTitle="Manage incoming orders from customers"
      ></DashboardPageHeader>

      {isError && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error?.message || "You don't have any orders yet."}
          </p>
        </div>
      )}

      {!isError && (
        <div className="grid md:grid-cols-2 gap-y-5 md:gap-5">
          {data.orders?.length > 0 && !isLoading ? (
            data.orders?.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
                isChefView
                handleOrderStatusUpdate={handleOrderStatusUpdate}
              />
            ))
          ) : (
            <CardSkeleton limit={4} />
          )}
        </div>
      )}

      <div className="col-span-1 md:col-span-2">
        {!isError && <Pagination total={data?.total} />}
      </div>
    </div>
  );
};

export default OrderRequestsPage;
