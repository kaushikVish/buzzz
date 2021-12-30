import React, { useState } from "react";
import Navbar from "../../components/navbar";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { addFriend } from "../../Redux/actions/feed";

const FriendProfile = ({ viewProfileUser, addFriend }) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleIsFriend, setToggleIsFriend] = useState("Add Friend");

  const detailsHandler = () => {
    setToggleDetails(!toggleDetails);
  };

  const requestHandler = () => {
    setToggleIsFriend("Request Sent");
    let data = {
      id: viewProfileUser._id,
    };
    addFriend(data);
  };
  return (
    <>
      <Navbar />
      <div className={styles.userProfile}>
        <div className={styles.userDetails}>
          <div className={styles.backgroundImg}></div>
          <img src={viewProfileUser.picture} alt=" User Image" />
          <span>{viewProfileUser.userName}</span>
          <div className={styles.buttonBox}>
            {viewProfileUser.isFriend ? (
              <button>Friends</button>
            ) : toggleIsFriend === "Request Sent" ? (
              <button disabled>{toggleIsFriend}</button>
            ) : (
              <button onClick={requestHandler}>
                <i className="fas fa-user-plus"></i>
                {toggleIsFriend}
              </button>
            )}
            <button onClick={detailsHandler}>Details</button>
          </div>
          {toggleDetails ? (
            <div className={styles.toggleDetails}>
              <div className={styles.details}>
                <span>Email: </span>
                <span>{viewProfileUser.email}</span>
              </div>
              <div className={styles.details}>
                <span>Username: </span>
                <span>{viewProfileUser.userName}</span>
              </div>
              <div className={styles.details}>
                <span>Firstname: </span>
                <span>{viewProfileUser.firstName}</span>
              </div>
              <div className={styles.details}>
                <span>Lastname: </span>
                <span>{viewProfileUser.lastName}</span>
              </div>
              <div className={styles.details}>
                <span>Friends: </span>
                <span>
                  {viewProfileUser.friends.length == undefined
                    ? viewProfileUser.friends
                    : viewProfileUser.friends.length}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ feed }) => {
  const { viewProfileUser } = feed;
  return { viewProfileUser };
};

const mapDispatchToProps = {
  addFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendProfile);
