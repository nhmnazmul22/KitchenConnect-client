import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-primary" />
        </div>

        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          Oops! Something Went Wrong
        </h1>

        <p className="text-muted-foreground mb-8">
          We couldn't find what you were looking for. The page might have been
          moved, deleted, or never existed in the first place.
        </p>

        <div className="bg-base-100 rounded-2xl p-6 border border-neutral-400 mb-8">
          <p className="text-sm text-muted-foreground">Error Code</p>
          <p className="font-mono text-2xl font-bold text-primary">404</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="#">
            <button
              className="btn btn-outline text-neutral-700 hover:bg-primary hover:text-white hover:border-primary"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary btn-shine">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
