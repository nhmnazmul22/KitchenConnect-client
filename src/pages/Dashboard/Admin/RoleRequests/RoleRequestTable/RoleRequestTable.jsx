import { updateRoleRequests } from "@/services/RequestRoleService";
import { Check, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RoleRequestTable = ({ requests, isLoading, refetch }) => {
  const [loading, setLoading] = useState(false);

  const handleRequestUpdate = async (requestId, status) => {
    try {
      setLoading(true);
      const result = await updateRoleRequests(requestId, {
        requestStatus: status,
      });

      if (result.success) {
        toast.success(
          result.message || "Role request status updated successful"
        );
        refetch();
        return;
      } else {
        toast.error(result.message || "Role request status update failed");
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-base-content/5 bg-base-100">
      <table className="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Request Type</th>
            <th>Status</th>
            <th>Request Time</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        {requests && requests.length > 0 && !isLoading ? (
          <tbody>
            {requests.map((request) => (
              <tr key={request._id}>
                <td className="font-medium">{request.userName}</td>
                <td className="text-base-content/70">{request.userEmail}</td>
                <td>
                  <span className="badge badge-outline capitalize">
                    {request.requestType}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge capitalize ${
                      request.requestStatus === "pending"
                        ? "badge-warning badge-outline"
                        : request.requestStatus === "approved"
                        ? "badge-success badge-outline"
                        : "badge-error badge-outline"
                    }`}
                  >
                    {request.requestStatus}
                  </span>
                </td>
                <td className="text-base-content/60 text-sm">
                  {new Date(request.requestTime).toDateString()}
                </td>
                <td className="text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      disabled={
                        loading ||
                        request.requestStatus === "approved" ||
                        request.requestStatus === "rejected"
                      }
                      className="btn btn-sm btn-success disabled:btn-disabled"
                      onClick={() =>
                        handleRequestUpdate(request._id, "approved")
                      }
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Accept
                    </button>

                    <button
                      disabled={
                        loading ||
                        request.requestStatus === "approved" ||
                        request.requestStatus === "rejected"
                      }
                      className="btn btn-sm btn-outline btn-error disabled:btn-disabled"
                      onClick={() =>
                        handleRequestUpdate(request._id, "rejected")
                      }
                    >
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </button>
                  </div>
                </td>
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

export default RoleRequestTable;
