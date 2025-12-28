import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export const ErrorBoundary = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";
  let status = 500;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    title = error.statusText || title;
    message = error.data?.message || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <AlertTriangle className="w-20 h-20 text-error mx-auto mb-4" />

        <h1 className="text-3xl font-bold mb-2">{status}</h1>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        <p className="text-base-content/70 mb-6">{message}</p>

        <div className="space-y-3">
          <Link to="/" className="btn btn-primary w-full">
            Go to Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline w-full"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};
