import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../../store/reviews";
import "./ReviewList.css";

function ReviewList() {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const renderReviews = () => {
    return Object.values(reviews).map((review) => {
      return (
        <div className="review-panel">
          <div className="inner-review-components">Business Name Goes here</div>
          <div className="inner-review-components">{`"${review.content}"`}</div>
          <div className="inner-review-components">
            Star Rating: {review.rating}
          </div>
          <div className="inner-review-components">
            By: {review.User.userName}
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderReviews()}</div>
    </div>
  );
}

export default ReviewList;
