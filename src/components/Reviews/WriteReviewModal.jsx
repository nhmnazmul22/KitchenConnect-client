import { Star } from "lucide-react";
import { useState } from "react";
import Textarea from "../common/UI/Textarea";
import { useParams } from "react-router";
import useAuth from "@/hook/useAuth";
import { createReview } from "@/services/ReviewService";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const WriteReviewModal = ({ ref }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { userProfile } = useAuth();

  const mutation = useMutation({
    mutationFn: createReview,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Thanks for your valuable review");
        setRating(0);
        setComment("");
        queryClient.invalidateQueries({
          queryKey: ["meal-reviews", id],
        });
      } else {
        toast.error("Review create failed");
      }
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    const payload = {
      mealId: id,
      reviewerName: userProfile.name,
      reviewerImage: userProfile.profileImage,
      rating,
      comment,
    };

    mutation.mutate(payload);
  };

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
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1;

                return (
                  <Star
                    key={i}
                    onClick={() => setRating(starValue)}
                    className={`w-5 h-5 cursor-pointer transition-colors
                      ${
                        starValue <= rating
                          ? "text-accent fill-accent"
                          : "text-muted-foreground"
                      }`}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="label" htmlFor="review">
              Your Review
            </label>
            <Textarea
              id="review"
              placeholder="Tell us about your experience with this meal..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <button className="flex-1 btn btn-outline">Close</button>
            <button
              onClick={handleSubmit}
              className="btn btn-primary btn-shine flex-1"
            >
              {mutation.isPending ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default WriteReviewModal;
