import React, { useState } from "react";
import styles from "./allPosts.module.css";

const AllPost = ({ story, postReaction, postComment }) => {
  // console.log("story in showing post of", story);

  const [comment, setComment] = useState("");

  const likeHandler = (id, user) => {
    let data = {
      id,
      reaction: "like",
      user,
    };
    postReaction(data);
  };

  const dislikeHandler = (id, user) => {
    let data = {
      id,
      reaction: "dislike",
      user,
    };
    postReaction(data);
  };

  const postCommentHandler = (id) => {
    let data = {
      id,
      comment,
    };
    postComment(data);
    setComment("");
  };

  const commmentHandler = (e) => {
    setComment(e.target.value);
  };

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
        <button onClick={() => likeHandler(story._id, story.user)}>
          {story.postReaction.like.length} Likes
        </button>
        <button onClick={() => dislikeHandler(story._id, story.user)}>
          {story.postReaction.dislike.length} Dislike
        </button>
        <button>{story.postComments.length}Comment</button>
      </div>
      <div className={styles.addComment}>
        <input
          type="text"
          value={comment}
          onChange={commmentHandler}
          placeholder="Enter your comment"
        />
        <button onClick={() => postCommentHandler(story._id)}>post</button>
      </div>
    </div>
  );
};

export default AllPost;
