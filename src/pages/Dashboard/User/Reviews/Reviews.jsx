import { useRef, useState } from "react";
import ReviewCard from "@/components/Reviews/ReviewCard";
import WriteReviewModal from "@/components/Reviews/WriteReviewModal";
import { Edit2, Trash2, Loader2 } from "lucide-react";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import { useQuery } from "@tanstack/react-query";
import { getReviews, removeReview } from "@/services/ReviewService";
import CardSkeleton from "@/components/Fallback/CardSkeleton";
import toast from "react-hot-toast";

const ReviewsPage = () => {
  const modalRef = useRef(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const {
    data: reviews,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-reviews"],
    queryFn: () => getReviews(),
    keepPreviousData: true,
  });

  const handelOpenModal = (review) => {
    setSelectedReview(review);
    modalRef.current.showModal();
  };

  const handleDelete = async (reviewId) => {
    try {
      setDeleteLoading(true);
      const result = await removeReview(reviewId);
      if (result.success) {
        toast.success(result.message || "Review remove successful");
        refetch();
        return;
      } else {
        toast.error(result.message || "Review delete failed");
        return;
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div>
      <DashboardPageHeader
        title="My Reviews"
        subTitle="Manage your meal reviews"
      ></DashboardPageHeader>

      {!reviews && isError && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            {error.message || "You haven't placed any orders yet."}
          </p>
        </div>
      )}

      {!isError && (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reviews && reviews.length > 0 && !isLoading ? (
            reviews.map((review) => (
              <div key={review._id} className="relative">
                <ReviewCard review={review} showMealName />

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => handelOpenModal(review)}
                    className="btn btn-primary btn-sm"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <WriteReviewModal
                    ref={modalRef}
                    review={selectedReview}
                    refetch={refetch}
                    isUpdateMode
                  ></WriteReviewModal>

                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-danger btn-sm"
                  >
                    {deleteLoading ? (
                      <Loader2 className="w-4 h-4" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <CardSkeleton />
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
