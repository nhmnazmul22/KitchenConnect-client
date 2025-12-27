import Pagination from "@/components/common/UI/Pagination";
import CardSkeleton from "@/components/Fallback/CardSkeleton";
import OrderCard from "@/components/Orders/OrderCard";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import useSearch from "@/hooks/useSearch";
import { getMyOrders } from "@/services/OrderService";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const OrdersPage = () => {
  const { limit, skip, setLimit, setSkip } = useSearch();
  const {
    data = { orders: [], total: 0 },
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-orders", limit, skip],
    queryFn: () => getMyOrders(limit, skip),
    keepPreviousData: true,
  });

  useEffect(() => {
    setLimit(10);
    setSkip(0);
  }, [setLimit, setSkip]);

  return (
    <div>
      <DashboardPageHeader
        title="Orders"
        subTitle="Track and manage your meal orders"
      ></DashboardPageHeader>

      {(!data.orders || isError) && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error?.message || "You haven't placed any orders yet."}
          </p>
        </div>
      )}

      {!isError && (
        <div className="grid md:grid-cols-2 gap-5 space-y-4">
          {data.orders && data.orders?.length > 0 && !isLoading ? (
            data.orders?.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))
          ) : (
            <CardSkeleton limit={4} />
          )}
        </div>
      )}

      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        {!isError && <Pagination total={data?.total} />}
      </div>
    </div>
  );
};

export default OrdersPage;
