import React, { useState } from "react";
import { Input } from "antd";
import Modal from "../modal/modal";
import styles from "./postForm.module.css";

const PostForm = ({ username, imgUrl, onClose }) => {
  const { TextArea } = Input;

  const [selectedFile, setselectedFile] = useState(null);

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setselectedFile(e.target.files[0]);
  };

  return (
    <>
      <Modal onClose={onClose}>
        <div className={styles.postForm}>
          <div className={styles.header}>
            <span>Create a post</span>
            <i class="fa fa-times" aria-hidden="true" onClick={onClose}></i>
          </div>
          <div className={styles.profileDetails}>
            <img src={imgUrl} alt="img" />
            <span>{username}</span>
          </div>
          <TextArea rows={4} placeholder="What do you want to talk about?" />
          <br />
          <br />
          <div className={styles.fileHandler}>
            <span>Upload a file:</span>
            <br />
            <input type="file" name="file" onChange={fileHandler} />
          </div>
          <div className={styles.footer}>
            <button className={styles.button}>Post</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PostForm;