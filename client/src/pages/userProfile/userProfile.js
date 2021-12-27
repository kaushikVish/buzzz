import React from "react";
import Navbar from "../../components/navbar";
import styles from "./userProfile.module.css";
import { connect } from "react-redux";

const UserProfile = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <div className={styles.userProfile}>
        <div className={styles.userDetails}>
          <div className={styles.backgroundImg}></div>
          <img src={user.picture} alt=" User Image" />
          <span>{user.userName}</span>
          <div>Friends {user.friends}</div>
        </div>
        <div className={styles.suggestionFriends}>
          <h3>suggestion friends</h3>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(UserProfile);
