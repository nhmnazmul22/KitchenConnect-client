import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import UsersTable from "./UsersTable/UsersTable";
import { getUsers } from "@/services/UserService";
import { useQuery } from "@tanstack/react-query";
import Pagination from "@/components/common/UI/Pagination";
import { useEffect } from "react";
import useSearch from "@/hooks/useSearch";

const ManageUsersPage = () => {
  const { limit, skip, setLimit, setSkip } = useSearch();
  const {
    data = { users: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users", limit, skip],
    queryFn: () => getUsers(limit, skip),
    keepPreviousData: true,
  });

  useEffect(() => {
    setLimit(10);
    setSkip(0);
  }, [setLimit, setSkip]);

  return (
    <div className="mr-5">
      <DashboardPageHeader
        title="Manage Users"
        subTitle=" View and manage all platform users"
      ></DashboardPageHeader>

      {data?.users?.length === 0 && isError && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error.message || "Users not found!!"}
          </p>
        </div>
      )}

      {!isError && (
        <UsersTable
          users={data?.users}
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

export default ManageUsersPage;
