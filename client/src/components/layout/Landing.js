import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">ChatBook</h1>
          <p className="lead">
            Create a profile/portfolio, share posts and get to know other user.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
