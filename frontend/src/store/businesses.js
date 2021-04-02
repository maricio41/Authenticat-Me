import { csrfFetch } from "./csrf";

const SET_BUSINESSES = "businesses/set";
const ADD_BUSINESS = "businesses/add";

const initialState = {};
// actions
export const setBusinesses = (businesses) => {
  return {
    type: SET_BUSINESSES,
    payload: businesses,
  };
};
export const addBusiness = (businesses) => {
  return {
    type: ADD_BUSINESS,
    payload: businesses,
  };
};

//thunk
export const getBusinesses = () => async (dispatch) => {
  console.log("business thunk");
  const response = await csrfFetch("/api/businesses");
  if (!response.ok) {
    throw response;
  }

  const businesses = await response.json();
  dispatch(setBusinesses(businesses));
  return response;
};

//reducer

const businessesReducer = (businesses = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESSES:
      const businessesPayload = action.payload;
      const newBusinesses = {};
      for (const business of businessesPayload) {
        newBusinesses[business.id] = business;
      }
      return newBusinesses;
    case ADD_BUSINESS:
      return businesses;
    default:
      return businesses;
  }
};

export default businessesReducer;
