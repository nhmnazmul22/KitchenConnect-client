import { useRef } from "react";
import ReviewCard from "@/components/Reviews/ReviewCard";
import WriteReview from "@/components/Reviews/WriteReviewModal";
import { motion } from "motion/react";

const CustomerReviews = ({ mealReviews }) => {
  const ModalRef = useRef(null);

  const handelShowModal = () => {
    ModalRef.current.showModal();
  };

  return (
    <section className="py-12 border-t border-neutral-200">
      <div className="flex max-sm:flex-col gap-3 sm:items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground mt-1">
            See what others are saying about this dish
          </p>
        </div>
        <button
          className="btn btn-primary max-sm:hidden"
          onClick={handelShowModal}
        >
          Write a Review
        </button>
        <WriteReview ref={ModalRef}></WriteReview>
      </div>

      {mealReviews?.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {mealReviews?.map((review, index) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/30 rounded-2xl">
          <p className="text-muted-foreground">
            No reviews yet. Be the first to share your experience!
          </p>
        </div>
      )}
      <button
        className="btn btn-primary block sm:hidden mt-10"
        onClick={handelShowModal}
      >
        Write a Review
      </button>
    </section>
  );
};

export default CustomerReviews;
