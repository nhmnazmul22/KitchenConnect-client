import { paymentSuccess } from "@/services/PaymentService";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Loader2 } from "lucide-react";
import { Link, Navigate, useSearchParams } from "react-router";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["payment-success", sessionId],
    queryFn: () => paymentSuccess(sessionId),
    enabled: !!sessionId,
    retry: false,
  });

  if (isError) {
    return <Navigate to="/payment-failed" replace={true} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="bg-base-100 rounded-2xl p-8 max-w-md w-full text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Processing Payment</h2>
          <p className="text-base-content/70">
            Please wait while we verify your payment…
          </p>
        </div>
      </div>
    );
  }

  if (data?.transactionId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="bg-base-100 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="w-20 h-20 text-success mx-auto mb-4" />

          <h1 className="text-2xl font-bold mb-2">Payment Successful 🎉</h1>

          <p className="text-base-content/70 mb-4">
            Your payment has been verified successfully.
          </p>

          <div className="text-sm text-base-content/60 mb-6">
            Transaction ID:
            <br />
            <span className="font-mono break-all">{data.transactionId}</span>
          </div>

          <div className="space-y-3">
            <Link to="/dashboard/orders" className="btn btn-success w-full">
              View My Orders
            </Link>

            <Link to="/" className="btn btn-outline w-full">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <Navigate to="/dashboard/orders" replace={true} />;
};

export default SuccessPage;
