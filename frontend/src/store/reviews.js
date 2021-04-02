import { csrfFetch } from "./csrf";

const SET_REVIEWS = "reviews/set";
const ADD_REVIEW = "eviews/add";

const initialState = {};
//actions
export const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  };
};

export const addReview = (reviews) => {
  return {
    type: ADD_REVIEW,
    payload: reviews,
  };
};
// thunk
export const getReviews = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");
  if (!response.ok) {
    throw response;
  }
  const reviews = await response.json();
  dispatch(setReviews(reviews));
};
//Reducer
const reviewsReducer = (reviews = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      const reviewsPayload = action.payload;
      const newReviews = {};
      for (const review of reviewsPayload) {
        newReviews[review.id] = review;
      }
      return newReviews;
    case ADD_REVIEW:
      return reviews;
    default:
      return reviews;
  }
};

export default reviewsReducer;
