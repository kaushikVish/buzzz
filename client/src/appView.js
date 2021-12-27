import React from "react";
import Feed from "./pages/feed/feed";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./pages/userProfile/userProfile";
import Navbar from "./components/navbar";

const AppView = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/user_profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default AppView;
