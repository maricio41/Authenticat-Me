// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ReviewList from "./components/ReviewList";
import BusinessList from "./components/BusinessList";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ReviewForm from "./components/ReviewForm";
import MyReviews from "./components/MyReviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
            <ReviewList />
            <Footer />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/add-review/:id" exact={true}>
            <ReviewForm />
          </Route>
          <Route path="/my-reviews" exact={true}>
            <MyReviews />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/reviews" exact={true}>
            <ReviewList />
          </Route>
          <Route path="/businesses" exact={true}>
            <BusinessList />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
