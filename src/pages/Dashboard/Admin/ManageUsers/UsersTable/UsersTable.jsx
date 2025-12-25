import { updateUser } from "@/services/UserService";
import { AlertTriangle, Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UsersTable = ({ users, isLoading, refetch }) => {
  const [loading, setLoading] = useState(false);

  const handleMakeFraud = async (userId) => {
    try {
      setLoading(true);
      const result = await updateUser(userId, { status: "fraud" });
      if (result.success) {
        toast.success(result.message || "User status updated successful");
        refetch();
        return;
      } else {
        toast.error(result.message || "User status update failed");
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
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

        {users && users.length > 0 && !isLoading ? (
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
                      className="btn btn-sm btn-error disabled:btn-disabled"
                      disabled={user.status === "fraud"}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 mr-2" />
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Mark Fraud
                        </>
                      )}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="animate-pulse">
                <td>
                  <div className="h-4 w-32 bg-base-300 rounded"></div>
                </td>
                <td>
                  <div className="h-4 w-24 bg-base-300 rounded"></div>
                </td>
                <td>
                  <div className="h-4 w-16 bg-base-300 rounded"></div>
                </td>
                <td>
                  <div className="h-4 w-24 bg-base-300 rounded"></div>
                </td>
                <td className="text-right">
                  <div className="h-8 w-8 bg-base-300 rounded-full ml-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UsersTable;
