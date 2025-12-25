/* eslint-disable react-hooks/set-state-in-effect */
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Textarea from "../common/UI/Textarea";
import { useParams } from "react-router";
import useAuth from "@/hooks/useAuth";
import { createReview, updateReview } from "@/services/ReviewService";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const WriteReviewModal = ({ ref, review, isUpdateMode = false, refetch }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { userProfile } = useAuth();

  const mutation = useMutation({
    mutationFn: !isUpdateMode ? createReview : updateReview,
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message || "Thanks for your valuable review");
        setRating(0);
        setComment("");
        queryClient.invalidateQueries({
          queryKey: ["meal-reviews", id],
        });
      } else {
        toast.error(result.message || "Operation failed");
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
    ref.current.close();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      rating,
      comment,
    };

    const result = await updateReview(review._id, payload);
    if (result.success) {
      toast.success(result.message || "Review update successful");
      ref.current.close();
      refetch();
      return;
    } else {
      toast.error(result.message || "Review updated failed");
      return;
    }
  };

  useEffect(() => {
    if (review) {
      setRating(review.rating);
      setComment(review.comment);
    }
  }, [review]);

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <div>
          <h4 className="font-display text-xl">
            {isUpdateMode ? "Update" : "Share"} Your Experience
          </h4>
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
              onClick={isUpdateMode ? handleUpdate : handleSubmit}
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
