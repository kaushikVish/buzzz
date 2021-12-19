import React from "react";
import Login from "./authentication/login";
import { Routes, Redirect, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
