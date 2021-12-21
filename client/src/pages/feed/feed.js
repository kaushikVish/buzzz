import React from "react";
import Contacts from "../../components/contacts/index";
import CreatePost from "../../components/createPost/index";
import Navbar from "../../components/navbar/index";
import styles from "./feed.module.css";
import { connect } from "react-redux";
import UserProfile from "../../components/userProfile/userProfile";

const Feed = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <div className={styles.body}>
        <div className={styles.leftbar}>
          <UserProfile username={user.userName} imgUrl={user.picture}/>
        </div>
        <div className={styles.mainContent}>
          <CreatePost username={user.userName} imgUrl={user.picture} />
        </div>
        <div className={styles.rightbar}>
          <Contacts />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  console.log("user in navbar", user);
  return { user };
};

export default connect(mapStateToProps, null)(Feed);
