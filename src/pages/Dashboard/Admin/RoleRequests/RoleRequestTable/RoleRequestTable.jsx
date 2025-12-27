
import { updateRoleRequests } from "@/services/RequestRoleService";
import { Check, X, Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RoleRequestTable = ({ requests, isLoading, refetch }) => {
  const [loadingId, setLoadingId] = useState(null);

  const handleRequestUpdate = async (requestId, status) => {
    try {
      setLoadingId(requestId);
      const result = await updateRoleRequests(requestId, {
        requestStatus: status,
      });

      if (result.success) {
        toast.success(
          result.message || "Role request status updated successfully"
        );
        refetch();
      } else {
        toast.error(result.message || "Role request status update failed");
      }
    } finally {
      setLoadingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-base-100 border border-base-content/5 rounded-2xl p-4 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-base-300 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if ((!requests || requests.length === 0) && !isLoading) {
    return (
      <div className="text-center py-10 text-base-content/70">
        No role requests found
      </div>
    );
  }

  return (
    <div className="bg-base-100 border border-base-content/5 rounded-2xl">
      <div className="hidden md:block overflow-x-auto">
        <table className="table">
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

          <tbody>
            {requests.map((request) => {
              const isDisabled =
                request.requestStatus === "approved" ||
                request.requestStatus === "rejected";

              return (
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
                        disabled={isDisabled}
                        className="btn btn-sm btn-success"
                        onClick={() =>
                          handleRequestUpdate(request._id, "approved")
                        }
                      >
                        {loadingId === request._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Accept
                          </>
                        )}
                      </button>

                      <button
                        disabled={isDisabled}
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() =>
                          handleRequestUpdate(request._id, "rejected")
                        }
                      >
                        {loadingId === request._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <X className="w-4 h-4 mr-1" />
                            Reject
                          </>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden p-4 space-y-4">
        {requests.map((request) => {
          const isDisabled =
            request.requestStatus === "approved" ||
            request.requestStatus === "rejected";

          return (
            <div
              key={request._id}
              className="border border-base-content/10 rounded-xl p-4 space-y-3"
            >
              <div>
                <p className="font-semibold">{request.userName}</p>
                <p className="text-sm text-base-content/70">
                  {request.userEmail}
                </p>
              </div>

              <div className="flex justify-between">
                <span className="text-sm">Request Type</span>
                <span className="badge badge-outline capitalize">
                  {request.requestType}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm">Status</span>
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
              </div>

              <p className="text-sm text-base-content/60">
                Requested on {new Date(request.requestTime).toDateString()}
              </p>

              {!isDisabled && (
                <div className="flex gap-2 pt-2">
                  <button
                    className="btn btn-sm btn-success flex-1"
                    onClick={() => handleRequestUpdate(request._id, "approved")}
                  >
                    {loadingId === request._id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Accept"
                    )}
                  </button>

                  <button
                    className="btn btn-sm btn-outline btn-error flex-1"
                    onClick={() => handleRequestUpdate(request._id, "rejected")}
                  >
                    {loadingId === request._id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Reject"
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default RoleRequestTable;
