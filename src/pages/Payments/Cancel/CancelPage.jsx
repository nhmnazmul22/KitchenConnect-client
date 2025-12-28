import { paymentCancel } from "@/services/PaymentService";
import { useQuery } from "@tanstack/react-query";
import { Loader2, XCircle } from "lucide-react";
import { Link, Navigate, useSearchParams } from "react-router";

const CancelPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["payment-cancel", sessionId],
    queryFn: () => paymentCancel(sessionId),
    enabled: !!sessionId,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-error" />
          <p className="text-base-content/70">Cancelling your payment...</p>
        </div>
      </div>
    );
  }

  if (isError || !data?.modifyOrder) {
    return <Navigate to="/payment-failed" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <XCircle className="w-20 h-20 text-error mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-2">Payment Cancelled</h1>

        <p className="text-base-content/70 mb-6">
          Your payment was cancelled. No charges were made.
        </p>

        <div className="space-y-3">
          <Link
            to={data?.redirectUrl || "/dashboard/orders"}
            className="btn btn-error w-full"
          >
            Try Payment Again
          </Link>

          <Link to="/" className="btn btn-outline w-full">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
