import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postReview } from "../../store/reviews";
import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const businessId = id;
  const user = useSelector((state) => state.session.user);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview({ content, rating, userId: user.id, businessId }));
    history.push("/my-reviews");
  };

  return (
    <div>
      <h1>Write a Review</h1>
      <form className="reviw-form" onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="boo"
        ></textarea>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit" className="review-btn">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
