import React from "react";
import classes from "./login.module.css";
import GoogleLogin from "react-google-login";

const Login = () => {
  // const loginHandler = async () => {};

  const handleResponse = (data) => {
    console.log(data);
  };

  return (
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
        onSuccess={handleResponse}
        onFailure={handleResponse}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Login;
