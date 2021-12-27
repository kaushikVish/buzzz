import React, { useEffect, useState } from "react";
import styles from "./allPosts.module.css";

const AllPost = ({ story, postReaction, postComment }) => {
  const [comment, setComment] = useState();
  const [userComments, setUserComments] = useState(story.postComments);
  const [toggleComment, setToggleComment] = useState(false);

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

  const postCommentHandler = (id, user) => {
    user.comment = comment;
    let data = {
      id,
      user,
    };
    postComment(data);
    setComment("");
  };

  const commmentHandler = (e) => {
    setComment(e.target.value);
  };

  const toggleCommentHandler = () => {
    setToggleComment(!toggleComment);
  };

  // console.log("user comments ===========>", userComments);

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
        <button onClick={toggleCommentHandler}>
          {story.postComments.length} Comment
        </button>
      </div>
      <div className={styles.addComment}>
        <input
          type="text"
          value={comment}
          onChange={commmentHandler}
          placeholder="Enter your comment"
        />
        <button onClick={() => postCommentHandler(story._id, story.user)}>
          post
        </button>
      </div>

      {toggleComment && story.postComments.length
        ? story.postComments.map((item) => (
            <div className={styles.commentView}>
              <img src={item.imageUrl} alt="profile pic" />
              <div className={styles.commentDetails}>
                <div id={styles.commentUsername}>{item.username}</div>
                <div id={styles.userComment}>{item.comment}</div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default AllPost;
