import React, { useState } from "react";
import PostForm from "../postForm/postForm";
import styles from "./createPost.module.css";

const CreatePost = ({ username, imgUrl }) => {
  const [showForm, setshowForm] = useState(false);

  const showPostForm = () => {
    setshowForm(!showForm);
  };

  return (
    <>
      <div className={styles.createPost}>
        {showForm && (
          <PostForm
            username={username}
            imgUrl={imgUrl}
            onClose={showPostForm}
          />
        )}
        <img id={styles.img} src={imgUrl} alt="img" />
        <input
          id={styles.input}
          onClick={showPostForm}
          placeholder=" Start a post"
        />
        <button id={styles.button} onClick={showPostForm}>
          <i id={styles.photo_icon} className="fas fa-photo-video"></i>Photo/Video
        </button>
      </div>
    </>
  );
};

export default CreatePost;
