import { AlertTriangle } from "lucide-react";
import { users } from "@/constants";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";

const ManageUsersPage = () => {
  return (
    <div className="mr-5">
      <DashboardPageHeader
        title="Manage Users"
        subTitle=" View and manage all platform users"
      ></DashboardPageHeader>

      <div className="overflow-x-auto bg-base-100 border border-base-300 rounded-2xl">
        <table className="table table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                {/* User */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="text-base-content/70">{user.email}</td>

                {/* Role */}
                <td>
                  <span className="badge badge-secondary badge-outline capitalize">
                    {user.role}
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`badge capitalize ${
                      user.status === "active"
                        ? "badge-success badge-outline"
                        : "badge-error badge-outline"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="text-right">
                  <button className="btn btn-sm btn-error">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Mark Fraud
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsersPage;
