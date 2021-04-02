import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../../store/reviews";

function ReviewList() {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const renderReviews = () => {
    return Object.values(reviews).map((review) => {
      return (
        <li>
          {review.content} Rating: {review.rating}
        </li>
      );
    });
  };
  return (
    <div>
      <ul>{renderReviews()}</ul>;
    </div>
  );
}

export default ReviewList;
