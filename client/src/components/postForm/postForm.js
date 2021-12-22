import React, { useState } from "react";
import { Input } from "antd";
import Modal from "../modal/modal";
import styles from "./postForm.module.css";
import { connect } from "react-redux";
import { postStory } from "../../Redux/actions/feed";

const PostForm = ({ username, imgUrl, onClose, postStory }) => {
  const { TextArea } = Input;

  const [selectedFile, setselectedFile] = useState(null);
  const [text, setText] = useState("");

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setselectedFile(e.target.files[0]);
  };

  const postHandler = async (e) => {
    const cloudData = new FormData();
    cloudData.append("file", selectedFile);
    cloudData.append("upload_preset", "Buzzz_Images");

    const postData = {
      cloudData,
      text,
    };

    postStory(postData);

    // const file=await res.json();

    // console.log(file.secure_url)
  };

  const textHandler = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
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
          <TextArea
            onChange={textHandler}
            rows={4}
            placeholder="What do you want to talk about?"
          />
          <br />
          <br />
          <div className={styles.fileHandler}>
            <span>Upload a file:</span>
            <br />
            <input type="file" name="file" onChange={fileHandler} />
          </div>
          <div className={styles.footer}>
            <button onClick={postHandler} className={styles.button}>
              Post
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  postStory,
};

export default connect(null, mapDispatchToProps)(PostForm);
