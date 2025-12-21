import { useRef } from "react";
import ReviewCard from "@/components/Reviews/ReviewCard";
import WriteReviewModal from "@/components/Reviews/WriteReviewModal";
import { reviews } from "@/constants";
import { Edit2, Trash2 } from "lucide-react";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";

const ReviewsPage = () => {
  const modalRef = useRef(null);

  const handelOpenModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div>
      <DashboardPageHeader
        title="My Reviews"
        subTitle="Manage your meal reviews"
      ></DashboardPageHeader>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <div key={review._id} className="relative">
            <ReviewCard review={review} showMealName />

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={handelOpenModal}
                className="btn btn-primary btn-sm"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <WriteReviewModal ref={modalRef}></WriteReviewModal>

              <button className="btn btn-danger btn-sm">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
          <p className="text-muted-foreground">
            You haven't written any reviews yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
