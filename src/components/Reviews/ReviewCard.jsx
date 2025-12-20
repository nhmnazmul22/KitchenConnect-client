import { Star } from "lucide-react";

const ReviewCard = ({ review, showMealName = false }) => {
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-warning fill-warning" : "text-base-300"
          }`}
        />
      ));
  };

  return (
    <div className="card bg-base-100 shadow-md card-elevated">
      <div className="card-body p-5">
        <div className="flex items-start gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.reviewerImage} alt={review.reviewerName} />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold">{review.reviewerName}</h4>

            {showMealName && review.foodName && (
              <p className="text-sm text-primary font-medium mb-2">
                {review.foodName}
              </p>
            )}

            <div className="flex gap-0.5 mb-3">
              {renderStars(review.rating)}
            </div>

            <p className="text-sm opacity-70 leading-relaxed">
              "{review.comment}"
            </p>
            <p className="text-xs opacity-60 mt-3 italic text-right">
              {review.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
