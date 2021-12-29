import React, { useEffect, useState } from "react";
import Contacts from "../../components/contacts/index";
import CreatePost from "../../components/createPost/index";
import Navbar from "../../components/navbar/index";
import styles from "./feed.module.css";
import { connect } from "react-redux";
import MiniProfile from "../../components/miniProfile/miniProfile";
import {
  getPosts,
  postReaction,
  postComment,
  getSuggestedFriends,
  viewProfile,
  addFriend,
} from "../../Redux/actions/feed";
import AllPost from "../../components/allPosts";
import { getUserDetails } from "../../Redux/actions/login";
import SuggestedFriends from "../../components/suggestedFriends";

const Feed = ({
  user,
  feed,
  getPosts,
  getSuggestedFriends,
  postComment,
  getUserDetails,
  viewProfile,
  addFriend,
  friends,
}) => {
  const [posts, setPosts] = useState(feed.posts);

  useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) {
      getUserDetails();
      getPosts();
      getSuggestedFriends();
    }
  }, []);

  useEffect(() => {
    getPosts();
    setPosts(feed.posts);
  }, [posts]);

  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.leftbar}>
          <MiniProfile username={user.userName} imgUrl={user.picture} />
        </div>
        <div className={styles.mainContent}>
          <CreatePost username={user.userName} imgUrl={user.picture} />
          {feed.posts.length ? (
            feed.posts.map((item) => (
              <div key={item._id}>
                <AllPost
                  story={item}
                  getPosts={getPosts}
                  postComment={postComment}
                />
              </div>
            ))
          ) : (
            <span>No Posts</span>
          )}
        </div>
        <div className={styles.rightbar}>
          <Contacts viewProfile={viewProfile} friends={friends} />
          <SuggestedFriends
            list={feed.suggestedFriends}
            viewProfile={viewProfile}
            addFriend={addFriend}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ auth, feed }) => {
  const { user, friends } = auth;
  return { user, feed, friends };
};

const mapDispatchToProps = {
  getPosts,
  postReaction,
  postComment,
  getUserDetails,
  getSuggestedFriends,
  viewProfile,
  addFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
