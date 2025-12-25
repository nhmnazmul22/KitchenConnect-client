import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import { useQuery } from "@tanstack/react-query";
import { getRoleRequests } from "@/services/RequestRoleService";
import RoleRequestTable from "./RoleRequestTable/RoleRequestTable";

const RoleRequestsPage = () => {
  const {
    data = { requests: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: () => getRoleRequests(),
    keepPreviousData: true,
  });

  return (
    <div>
      <DashboardPageHeader
        title="Role Requests"
        subTitle="Review and approve role change requests"
      ></DashboardPageHeader>

      {(data?.requests?.length === 0 || isError) && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error?.message || "Role requests not found!!"}
          </p>
        </div>
      )}

      {!isError && (
        <RoleRequestTable
          requests={data?.requests}
          isLoading={isLoading}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default RoleRequestsPage;
