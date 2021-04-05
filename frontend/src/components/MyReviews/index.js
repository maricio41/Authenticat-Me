import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserReviews } from "../../store/reviews";

function MyReviews() {
  const dispatch = useDispatch();
  const userReviews = useSelector((state) => state.reviews.userReviews);
  const user = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getUserReviews(user.id));
  }, []);
  return (
    <div>
      <h2>My Reviews</h2>
      {userReviews?.map((review) => (
        <>
          <a className="review-panel">
            <div>{review.Business.name}</div>
            <div>{review.content}</div>
          </a>
        </>
      ))}
    </div>
  );
}

export default MyReviews;
