import { Star } from "lucide-react";

const WriteReviewModal = ({ ref }) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <div>
          <h4 className="font-display text-xl">Share Your Experience</h4>
        </div>
        <form method="dialog" className="space-y-4 py-4">
          <div>
            <label className="label">Rating</label>
            <div className="flex gap-1 mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-muted-foreground hover:text-accent hover:fill-accent cursor-pointer transition-colors"
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="label" htmlFor="review">
              Your Review
            </label>
            <textarea
              id="review"
              placeholder="Tell us about your experience with this meal..."
              className="textarea mt-2 min-h-30 w-full focus-within:outline-0 focus-within:border-neutral-300"
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <button className="flex-1 btn btn-outline">Close</button>
            <button className="btn btn-primary btn-shine flex-1">Submit Review</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default WriteReviewModal;
