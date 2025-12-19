import { Star } from "lucide-react";

const Stars = (rating) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "text-accent fill-accent"
            : "text-muted-foreground"
        }`}
      />
    ));
};

export default Stars;
