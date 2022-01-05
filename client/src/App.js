import React from "react";
import Login from "./authentication/login/login";
import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
// import AppView from "./appView";
import Feed from "./pages/feed/feed";
import UserProfile from "./pages/userProfile/userProfile";
import FriendProfile from "./pages/friendProfile";
import ProtectedRoute from "./authentication/protectedRoutes/protectedRoutes";

const isAuthenticated = localStorage.getItem("AUTH_TOKEN");

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route  path="/*" component={AppView} /> */}
        <Route
          path="/feed"
          element={isAuthenticated ? <Feed /> : <Navigate to="/" />}
        />
        <Route
          path="/user_profile"
          element={isAuthenticated ? <UserProfile /> : <Navigate to="/" />}
        />
        <Route
          path="/friend_profile"
          element={isAuthenticated ? <FriendProfile /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
