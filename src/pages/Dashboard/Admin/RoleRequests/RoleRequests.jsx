import { Check, X } from "lucide-react";
import { roleRequests } from "@/constants";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";

const RoleRequestsPage = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Role Requests"
        subTitle="Review and approve role change requests"
      ></DashboardPageHeader>

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
          <tbody>
            {roleRequests.map((request) => (
              <tr key={request._id}>
                <td className="font-medium">{request.name}</td>
                <td className="text-base-content/70">{request.email}</td>
                <td>
                  <span className="badge badge-outline capitalize">
                    {request.requestType}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge capitalize ${
                      request.status === "pending"
                        ? "badge-warning badge-outline"
                        : request.status === "approved"
                        ? "badge-success badge-outline"
                        : "badge-error badge-outline"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="text-base-content/60 text-sm">
                  {request.requestTime}
                </td>
                <td className="text-right">
                  <div className="flex justify-end gap-2">
                    <button className="btn btn-sm btn-success">
                      <Check className="w-4 h-4 mr-1" />
                      Accept
                    </button>

                    <button className="btn btn-sm btn-outline btn-error">
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {roleRequests.length === 0 && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">No pending role requests.</p>
        </div>
      )}
    </div>
  );
};

export default RoleRequestsPage;
