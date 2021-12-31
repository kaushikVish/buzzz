import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { connect } from "react-redux";

const Navbar = ({ user }) => {
  let navigate = useNavigate();

  const handleProfilePage = () => {
    navigate(`/user_profile`);
  };

  const handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigate(`/`);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left_sidebar}>
        <img
          src="/assests/ttn_logo.jpeg"
          alt="TTN LOGO"
          height="45px"
          width="100px"
        />
      </div>
      <div className={styles.right_sidebar}>
        <img src={user.picture} alt=" User Image" />
        <button onClick={handleProfilePage}>{user.userName}</button>
        <i
          id={styles.messenger_icon}
          className="fab fa-facebook-messenger fa-1x"
        ></i>
        <i
          id={styles.user_icon}
          className="fa fa-user-plus fa-1x"
          aria-hidden="true"
        ></i>
        <button className={styles.logOut} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps, null)(Navbar);
