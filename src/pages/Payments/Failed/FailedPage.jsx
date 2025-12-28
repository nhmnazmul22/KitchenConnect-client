import { XCircle } from "lucide-react";
import { Link } from "react-router";

const FailedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <XCircle className="w-20 h-20 text-error mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-2">Payment Failed ❌</h1>

        <p className="text-base-content/70 mb-6">
          We couldn’t verify your payment. If money was deducted, it will be
          refunded automatically.
        </p>

        <div className="space-y-3">
          <Link to="/dashboard/orders" className="btn btn-error w-full">
            Try Again
          </Link>

          <Link to="/dashboard" className="btn btn-outline w-full">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailedPage;
