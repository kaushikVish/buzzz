import React, { useEffect } from "react";
import classes from "./login.module.css";
import GoogleLogin from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { loginWithGoogle } from "../Redux/actions/login";
import { useNavigate } from "react-router-dom";

const Login = ({
  loginWithGoogle,
  loading,
  message,
  redirect,
  allowRedirect,
  token,
}) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (token && allowRedirect) {
      navigate(redirect);
    }
  }, [redirect, allowRedirect]);

  const handleGmailSuccess = (response) => {
    let data = {
      tokenId: response.tokenId,
    };
    loginWithGoogle(data);
    toast.success(message);
    navigate(redirect);
  };

  const handleGmailFailure = (error) => {
    console.log("error ========>", error);
    toast.error(message);
  };

  return (
    <>
      <ToastContainer />
      <div className={classes.box}>
        <img
          src="/assests/ttn_logo.jpeg"
          alt="TTN Logo"
          height="80px"
          width="100px"
        />
        <span id={classes.first_span}>
          Enter your Details and Start your journey with us
        </span>
        <span id={classes.second_span}>Don't stop until you are proud.</span>
        <GoogleLogin
          clientId="385631715575-ra80jq8o1g4589v6erg0d1qu2ncsvqvd.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              id={classes.button}
              onClick={renderProps.onClick}
              // disabled={renderProps.disabled}
            >
              Login With Google
            </button>
          )}
          buttonText="Sign in with Google"
          className="ct-button ct-button--secondary"
          onSuccess={handleGmailSuccess}
          onFailure={handleGmailFailure}
          cookiePolicy="single_host_origin"
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, redirect, allowRedirect, token } = auth;
  return { loading, message, redirect, allowRedirect, token };
};

const mapDispatchToProps = {
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
