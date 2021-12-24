import React from "react";
import styles from "./allPosts.module.css";

const AllPost = ({story}) => {
  console.log("story in showing post of", story);
  return (
      <div className={styles.postCard}>
        <div className={styles.header}>
          <img src={story.user.imageUrl} alt="profile pic" />
          <span>{story.user.username}</span>
        </div>
        <div className={styles.content}>
          <div>{story.text}</div>
          <img src={story.imageUrl} alt="post image" />
        </div>
        <div className={styles.footer}>
          <button >{story.postReaction.like.length} Likes</button>
          <button>{story.postReaction.dislike.length} Dislike</button>
          <button>{story.postComments.length}Comment</button>
        </div>
        <div className={styles.addComment}>
          <input type="text" placeholder="Enter your comment"/>
          <button>post</button>
        </div>
      </div>
  );
};

export default AllPost;
