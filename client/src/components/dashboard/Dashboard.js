import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Dashboard = (props) => {
  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome Dishebh
      </p>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
