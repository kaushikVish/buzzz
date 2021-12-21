import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({user}) => {
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
        <img src={user.picture} alt=" User Image"/>
        <span>{user.userName}</span>
        <i
          id={styles.messenger_icon}
          class="fab fa-facebook-messenger fa-1x"
        ></i>
        <i
          id={styles.user_icon}
          class="fa fa-user-plus fa-1x"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
