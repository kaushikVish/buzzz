import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./allPosts.module.css";

const AllPost = ({ story, isAdmin, deletePost }) => {
  const [like, setLike] = useState(story.postReaction.like.length);
  const [dislike, setDisLike] = useState(story.postReaction.dislike.length);
  const [comment, setComment] = useState();
  const [userComments, setUserComments] = useState(story.postComments);
  const [toggleComment, setToggleComment] = useState(false);
  const [togglePostOptions, setTogglePostOptions] = useState(false);

  let Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const postReactions = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/post_reaction", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.log("error in services ====> ", error);
      return error;
    }
  };

  const postComment = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/post_comment", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.log("error in services ====> ", error);
      return error;
    }
  };

  const likeHandler = async (id, user) => {
    let data = {
      id,
      reaction: "like",
      user,
    };
    let response = await postReactions(data);
    let result = await response.json();
    setLike(result.like);
    setDisLike(result.dislike);
  };

  const dislikeHandler = async (id, user) => {
    let data = {
      id,
      reaction: "dislike",
      user,
    };
    let response = await postReactions(data);
    let result = await response.json();
    setLike(result.like);
    setDisLike(result.dislike);
  };

  const postCommentHandler = async (id, user) => {
    user.comment = comment;
    let data = {
      id,
      user,
    };
    let response = await postComment(data);
    let result = await response.json();
    setUserComments(result.comments);
    setComment("");
  };

  const commmentHandler = (e) => {
    setComment(e.target.value);
  };

  const toggleCommentHandler = () => {
    setToggleComment(!toggleComment);
  };

  const handlerTogglePostOptions = () => {
    setTogglePostOptions(!togglePostOptions);
  };

  const handleReportPost = async (message) => {
    try {
      const response = await fetch(
        `http://localhost:8000/reportPost/${story._id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success(`Post ${message}  `);
        if (message === "unreport") {
          story.isReported = false;
        } else {
          story.isReported = true;
        }
      }
    } catch (error) {
      console.log("error in reporting post ", error);
      toast.error(`Post ${message} Failed`);
    }
  };

  const handleDeletePost = async () => {
    deletePost(story._id);
    toast.success("Post deleted");
  };

  return (
    <div className={styles.postCard}>
      <ToastContainer />
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <img src={story.user.imageUrl} alt="profile pic" />
          <div className={styles.userBox}>
            <div className={styles.headerUsername}>{story.user.username}</div>
            <div className={styles.date}>
              <span> {Month[new Date(story.createdAt).getMonth()]} </span>
              <span>{new Date(story.createdAt).getDate()}, </span>
              <span>{new Date(story.createdAt).getFullYear()}</span>
            </div>
          </div>
        </div>
        <div>
          {story.isReported ? (
            <i className="fa fa-flag" id={styles.icons} aria-hidden="true"></i>
          ) : (
            ""
          )}
          <i
            onClick={handlerTogglePostOptions}
            className="fa fa-ellipsis-v"
            aria-hidden="true"
          ></i>

          {togglePostOptions ? (
            <div className={styles.otherOptions}>
              {isAdmin && story.isReported ? (
                <button onClick={() => handleReportPost("Unreport")}>
                  Unreport Post
                </button>
              ) : (
                <button onClick={() => handleReportPost("Report")}>
                  Report Post
                </button>
              )}

              {isAdmin && story.isReported ? (
                <button onClick={handleDeletePost}>Delete Post</button>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div>{story.text}</div>
        <img src={story.imageUrl} alt="post image" />
      </div>
      <div className={styles.footer}>
        <button onClick={() => likeHandler(story._id, story.user)}>
          {like} Likes
        </button>
        <button onClick={() => dislikeHandler(story._id, story.user)}>
          {dislike} Dislike
        </button>
        <button onClick={toggleCommentHandler}>
          {userComments.length} Comment
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

      {toggleComment && userComments.length
        ? userComments.map((item,index) => (
            <div key={item.userId+index} className={styles.commentView}>
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
