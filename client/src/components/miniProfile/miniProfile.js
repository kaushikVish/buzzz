import React from "react";
import styles from "./miniProfile.module.css";

const MiniProfile = ({ username, imgUrl, totalPosts }) => {
  return (
    <div className={styles.userprofile}>
      <img id={styles.img} src={imgUrl} alt="Profile Image" />
      <span id={styles.username}>{username}</span>
      <span id={styles.second_span}>Newly Recruit at TTN</span>
      <div id={styles.post_details}>
        <div id={styles.post_views}>
          <div>{totalPosts}</div>
          <div>0</div>
        </div>
        <div id={styles.posts}>
          <div>Post</div>
          <div>Views</div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
