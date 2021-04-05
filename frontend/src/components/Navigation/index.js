import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(sessionActions.demoLogin());
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="nav-bar-container">
        <NavLink className="nav-link" to="/add-review">
          Write a Review
        </NavLink>
        <NavLink className="nav-link" to="/" onClick={logout}>
          {" "}
          Logut
        </NavLink>
      </div>
    );
    // sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="login-signup">
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="nav-link" to="/" onClick={handleClick}>
          Demo User
        </NavLink>
      </div>
    );
  }

  return (
    <div className="nav-bar">
      <div className="logo-icon">
        welp <i class="fab fa-yelp"></i>
      </div>

      <div className="right-nav-components">
        <div className="home-btn">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
