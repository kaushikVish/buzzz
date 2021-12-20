import React from "react";
import styles from "./navbar.module.css";
import { connect } from "react-redux";

const Navbar = ({ user }) => {
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
        <img src={user.picture} alt=" User Image" height="30px" width="30px" />
        <span>{user.userName}</span>
        <i id={styles.messenger_icon} class="fab fa-facebook-messenger fa-1x"></i>
        <i id={styles.user_icons}class="fa fa-user-plus" aria-hidden="true"></i>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  console.log("user in navbar", user);
  return { user };
};

export default connect(mapStateToProps, null)(Navbar);
