import React, { useEffect, useState } from "react";
import Contacts from "../../components/contacts/index";
import CreatePost from "../../components/createPost/index";
import Navbar from "../../components/navbar/index";
import styles from "./feed.module.css";
import { connect } from "react-redux";
import MiniProfile from "../../components/miniProfile/miniProfile";
import { getPosts, postReaction, postComment } from "../../Redux/actions/feed";
import AllPost from "../../components/allPosts";
import { getUserDetails } from "../../Redux/actions/login";

const Feed = ({
  user,
  feed,
  getPosts,
  postReaction,
  postComment,
  getUserDetails,
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) {
      getUserDetails();
    }
  }, []);

  useEffect(() => {
    getPosts();
    setPosts(feed.posts);
  }, [feed.posts]);

  return (
    <>
      <Navbar user={user} />
      <div className={styles.body}>
        <div className={styles.leftbar}>
          <MiniProfile username={user.userName} imgUrl={user.picture} />
        </div>
        <div className={styles.mainContent}>
          <CreatePost username={user.userName} imgUrl={user.picture} />
          {posts.length ? (
            posts.map((item) => (
              <div key={item._id}>
                <AllPost
                  story={item}
                  postReaction={postReaction}
                  postComment={postComment}
                />
              </div>
            ))
          ) : (
            <span>No Posts {posts}</span>
          )}
        </div>
        <div className={styles.rightbar}>
          <Contacts />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ auth, feed }) => {
  const { user } = auth;
  return { user, feed };
};

const mapDispatchToProps = {
  getPosts,
  postReaction,
  postComment,
  getUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
