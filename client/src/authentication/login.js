import React from "react";
import classes from "./login.module.css";
import GoogleLogin from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { loginWithGoogle } from "../Redux/actions/login";

const Login = ({ loginWithGoogle, loading, message }) => {
  const handleGmailSuccess = (response) => {
    let data = {
      tokenID: response.tokenId,
      googleData: response.profileObj,
    };
    loginWithGoogle(data);
    // console.log("data ============>", data);
    toast.success("Login Successfull");
  };

  const handleGmailFailure = (error) => {
    console.log("error ========>", error);
    toast.error("Login failed");
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
  const { loading, message } = auth;
  return { loading, message };
};

const mapDispatchToProps = {
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
