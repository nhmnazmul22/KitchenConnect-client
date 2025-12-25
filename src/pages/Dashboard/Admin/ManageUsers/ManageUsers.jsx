import { AlertTriangle } from "lucide-react";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import UsersTable from "./UsersTable/UsersTable";
import useSearch from "@/hooks/useSearch";
import { getUsers } from "@/services/UserService";
import { useQuery } from "@tanstack/react-query";

const ManageUsersPage = () => {
  const { limit, skip, sort, order, search, _setSkip } = useSearch();
  const {
    data = { users: [], total: 0 },
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users", limit, skip, sort, order, search],
    queryFn: () => getUsers(limit, skip, sort, order, search),
    keepPreviousData: true,
  });

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

      <UsersTable users={data?.users} isLoading={isLoading} refetch={refetch} />
    </div>
  );
};

export default ManageUsersPage;
