import React from "react";
import Login from "./authentication/login";
import { Routes, Redirect, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
// import AppView from "./appView";
import Feed from "./pages/feed/feed";
import UserProfile from "./pages/userProfile/userProfile";
import FriendProfile from "./pages/friendProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route  path="/*" component={AppView} /> */}
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/user_profile" element={<UserProfile />} />
        <Route exact path="/friend_profile" element={<FriendProfile />} />
      </Routes>
    </>
  );
};

export default App;
