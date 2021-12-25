import React, { useEffect, useState } from "react";
import Contacts from "../../components/contacts/index";
import CreatePost from "../../components/createPost/index";
import Navbar from "../../components/navbar/index";
import styles from "./feed.module.css";
import { connect } from "react-redux";
import UserProfile from "../../components/userProfile/userProfile";
import { getPosts, postReaction, postComment } from "../../Redux/actions/feed";
import AllPost from "../../components/allPosts";

const Feed = ({ user, feed, getPosts, likePost, dislikePost, postComment }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hey in use effect");
    getPosts();
    setPosts(feed.posts);
  }, []);

  return (
    <>
      <Navbar user={user} />
      <div className={styles.body}>
        <div className={styles.leftbar}>
          <UserProfile username={user.userName} imgUrl={user.picture} />
        </div>
        <div className={styles.mainContent}>
          <CreatePost username={user.userName} imgUrl={user.picture} />
          {feed.posts.length ? (
            feed.posts.map((item, index) => (
              <div key={item._id}>
                <AllPost
                  story={item}
                  likePost={likePost}
                  dislikePost={dislikePost}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
