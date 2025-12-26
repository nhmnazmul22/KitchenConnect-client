import { Users, DollarSign, ShoppingBag, Truck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import StatCard from "@/components/Statistics/StatCard";
import { getStatistics } from "@/services/StatisticsService";
import { useQuery } from "@tanstack/react-query";
import { monthNames } from "@/constants";

const StatisticsPage = () => {
  const {
    data = {
      totalPayment: 0,
      totalUsers: 0,
      ordersPending: { data: [], count: 0 },
      ordersDelivered: { data: [], count: 0 },
    },
    isError,
    error,
  } = useQuery({
    queryKey: ["statistics"],
    queryFn: () => getStatistics(),
    keepPreviousData: true,
  });

  const pieData = [
    {
      name: "Delivered",
      value: data?.ordersDelivered?.count,
      color: "hsl(100, 45%, 35%)",
    },
    {
      name: "Pending",
      value: data?.ordersPending?.count,
      color: "hsl(38, 92%, 55%)",
    },
  ];

  const allOrders = data.ordersDelivered.data;
  const monthlyData = monthNames.map((month) => ({
    month,
    orders: 0,
    revenue: 0,
  }));
  allOrders.forEach((order) => {
    const date = new Date(order.createdAt);
    const monthIndex = date.getMonth();
    monthlyData[monthIndex].orders += order.quantity;
    monthlyData[monthIndex].revenue += order.price * order.quantity;
  });

  return (
    <div className="">
      <DashboardPageHeader
        title="Platform Statistics"
        subTitle="Overview of platform performance and metrics"
      ></DashboardPageHeader>

      {(!data || isError) && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error?.message || "Role requests not found!!"}
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-2 sm:gap-4 mb-8">
        <StatCard
          title="Total Users"
          value={data?.totalUsers?.toLocaleString()}
          icon={<Users className="w-6 h-6" />}
          trend={{ value: 12, isPositive: true }}
          color="primary"
        />
        <StatCard
          title="Total Payments"
          value={data?.totalPayment?.toFixed(2)}
          icon={<DollarSign className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
          color="secondary"
        />
        <StatCard
          title="Total Pending Orders"
          value={data?.ordersPending?.count?.toLocaleString()}
          icon={<ShoppingBag className="w-6 h-6" />}
          trend={{ value: 15, isPositive: true }}
          color="accent"
        />
        <StatCard
          title="Total Delivered Orders"
          value={data?.ordersDelivered?.count?.toLocaleString()}
          icon={<Truck className="w-6 h-6" />}
          trend={{ value: 23, isPositive: true }}
          color="primary"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-6">
        <div className="bg-base-100 rounded-2xl p-6 border border-base-300 card-elevated">
          <h3 className="font-display text-lg font-semibold text-foreground mb-6">
            Monthly Performance
          </h3>
          <div className="w-full h-75">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(30, 20%, 88%)"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
                  axisLine={{ stroke: "hsl(30, 20%, 88%)" }}
                />
                <YAxis
                  tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
                  axisLine={{ stroke: "hsl(30, 20%, 88%)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(30, 40%, 99%)",
                    border: "1px solid hsl(30, 20%, 88%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="orders"
                  fill="hsl(8, 76%, 60%)"
                  radius={[4, 4, 0, 0]}
                  name="Orders"
                />
                <Bar
                  dataKey="revenue"
                  fill="hsl(100, 45%, 35%)"
                  radius={[4, 4, 0, 0]}
                  name="Revenue ($)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl p-6 border border-base-300 card-elevated">
          <h3 className="font-display text-lg font-semibold text-foreground mb-6">
            Order Distribution
          </h3>
          <div className="h-75">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(30, 40%, 99%)",
                    border: "1px solid hsl(30, 20%, 88%)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
