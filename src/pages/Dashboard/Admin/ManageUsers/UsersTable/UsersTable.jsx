import { updateUser } from "@/services/UserService";
import { AlertTriangle, Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UsersTable = ({ users, isLoading, refetch }) => {
  const [loadingId, setLoadingId] = useState(null);

  const handleMakeFraud = async (userId) => {
    try {
      setLoadingId(userId);
      const result = await updateUser(userId, { status: "fraud" });

      if (result.success) {
        toast.success(result.message || "User status updated successfully");
        refetch();
      } else {
        toast.error(result.message || "User status update failed");
      }
    } finally {
      setLoadingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-base-100 border border-base-300 rounded-2xl p-4 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-base-300 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="text-center py-10 text-base-content/70">
        No users found
      </div>
    );
  }

  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl">
      <div className="hidden md:block overflow-x-auto">
        <table className="table">
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

                <td className="text-base-content/70">{user.email}</td>

                <td>
                  <span className="badge badge-secondary badge-outline capitalize">
                    {user.role}
                  </span>
                </td>

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

                {user.role !== "admin" && (
                  <td className="text-right">
                    <button
                      onClick={() => handleMakeFraud(user._id)}
                      className="btn btn-sm btn-error"
                      disabled={user.status === "fraud"}
                    >
                      {loadingId === user._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 mr-1" />
                          Mark Fraud
                        </>
                      )}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden p-4 space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="border border-base-300 rounded-xl p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.image} alt={user.name} />
                </div>
              </div>

              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-base-content/70">{user.email}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-sm">Role</span>
              <span className="badge badge-secondary badge-outline capitalize">
                {user.role}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm">Status</span>
              <span
                className={`badge capitalize ${
                  user.status === "active"
                    ? "badge-success badge-outline"
                    : "badge-error badge-outline"
                }`}
              >
                {user.status}
              </span>
            </div>

            {user.role !== "admin" && (
              <button
                onClick={() => handleMakeFraud(user._id)}
                className="btn btn-error btn-sm w-full"
                disabled={user.status === "fraud"}
              >
                {loadingId === user._id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Mark Fraud"
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
