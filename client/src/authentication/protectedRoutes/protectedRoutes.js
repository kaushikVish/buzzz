import React from "react";
import { Route, Navigate } from "react-router-dom";

const isAuthenticated = localStorage.getItem("AUTH_TOKEN");

const ProtectedRoute = ({ component: Component, path, ...restOfProps }) => {
  return (
    <Route
      path={path}
      {...restOfProps}
      render={(props) => {
        return isAuthenticated ? <Component {...props} /> : <Navigate to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
