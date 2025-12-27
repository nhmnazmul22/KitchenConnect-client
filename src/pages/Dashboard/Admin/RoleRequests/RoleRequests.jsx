import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import { useQuery } from "@tanstack/react-query";
import { getRoleRequests } from "@/services/RequestRoleService";
import RoleRequestTable from "./RoleRequestTable/RoleRequestTable";
import Pagination from "@/components/common/UI/Pagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";

const RoleRequestsPage = () => {
  const { limit, skip, setLimit, setSkip } = useSearch();
  const {
    data = { requests: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["requests", limit, skip],
    queryFn: () => getRoleRequests(limit, skip),
    keepPreviousData: true,
  });

  useEffect(() => {
    setLimit(10);
    setSkip(0);
  }, [setLimit, setSkip]);

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

      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        {!isError && <Pagination total={data?.total} />}
      </div>
    </div>
  );
};

export default RoleRequestsPage;
