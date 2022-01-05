import React, { useState } from "react";
import { Input } from "antd";
import Modal from "../modal/modal";
import styles from "./postForm.module.css";
import { connect } from "react-redux";
import { postStory } from "../../Redux/actions/feed";
import { ToastContainer, toast } from "react-toastify";

const PostForm = ({ username, imgUrl, onClose, postStory, feed }) => {
  const { TextArea } = Input;

  const [imageFile, setImageFile] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [text, setText] = useState("");

  const fileHandler = (e) => {
    let type = e.target.files[0].type.split("/")[0];
    let size = e.target.files[0].size / (1024 * 1024);

    if (type == "image") {
      console.log(" type ====>", type);
      if (size > 2) {
        toast.error("Image should be less or equal than 2mb");
      } else {
        setImageFile(e.target.files[0]);
      }
    } else {
      console.log(" type ====>", type);
      if (size > 5) {
        toast.error("Video size should be less or equal to 5mb");
      } else {
        setVideoFile(e.target.files[0]);
      }
    }
  };

  const postHandler = async (e) => {
    const cloudData = new FormData();
    let selectedFile;
    if ((imageFile === "")) {
      selectedFile = videoFile;
    } else {
      selectedFile = imageFile;
    }

    cloudData.append("file", selectedFile);
    cloudData.append("upload_preset", "Buzzz_Images");

    const postData = {
      cloudData,
      text,
    };
    console.log("postData is  =>>>>>>",postData)
    // postStory(postData);
    toast.success("New Story Posted");
    onClose();
  };

  const textHandler = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <Modal onClose={onClose}>
        <ToastContainer />
        <div className={styles.postForm}>
          <div className={styles.header}>
            <span>Create a post</span>
            <i className="fa fa-times" aria-hidden="true" onClick={onClose}></i>
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
            <input
              type="file"
              name="file"
              accept="image/* , video/*"
              onChange={fileHandler}
            />
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="uploaded image"
                height="200px"
                width="250px"
              />
            ) : (
              ""
            )}
            {videoFile ? (
              <video
                src={URL.createObjectURL(videoFile)}
                height="200px"
                width="450px"
                controls
              />
            ) : (
              ""
            )}
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

const mapStateToProps = ({ feed }) => {
  return { feed };
};

const mapDispatchToProps = {
  postStory,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
