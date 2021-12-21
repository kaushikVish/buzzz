import React from "react";
import Login from "./authentication/login";
import Feed from "./pages/feed/feed";
import { Routes, Redirect, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
};

export default App;
