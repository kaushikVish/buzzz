import React, { useEffect, useState } from "react";
import Contacts from "../../components/contacts/index";
import CreatePost from "../../components/createPost/index";
import Navbar from "../../components/navbar/index";
import styles from "./feed.module.css";
import { connect } from "react-redux";
import cx from "classnames";
import MiniProfile from "../../components/miniProfile/miniProfile";
import {
  getPosts,
  postReaction,
  postComment,
  getSuggestedFriends,
  viewProfile,
  addFriend,
  deletePost,
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
  deletePost,
}) => {
  const [posts, setPosts] = useState(feed.posts);
  const [pageNumber, setPageNumber] = useState(1);
  const [toggleModerator, setToggleModerator] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) {
      getUserDetails();
      getPosts(0);
      getSuggestedFriends();
    }
  }, []);

  useEffect(() => {
    setPosts(feed.posts);
  }, [posts]);

  const handleToggleModerator = () => {
    setToggleModerator(!toggleModerator);
  };

  const fetchData = () => {
    setPageNumber(pageNumber + 1);
    getPosts(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.leftbar}>
          <MiniProfile username={user.userName} imgUrl={user.picture} totalPosts={feed.posts.length}/>
        </div>
        <div className={styles.mainContent}>
          <CreatePost username={user.userName} imgUrl={user.picture} />
          {user.isAdmin ? (
            <div className={styles.moderator}>
              <label className={styles.switch}>
                <input type="checkbox" onChange={handleToggleModerator} />
                <span className={cx(styles.slider, styles.round)}></span>
              </label>
            </div>
          ) : (
            ""
          )}

          {feed.posts.length
            ? toggleModerator
              ? feed.posts.map((item) =>
                  item.isReported && toggleModerator ? (
                    <div key={item._id}>
                      <AllPost
                        story={item}
                        isAdmin={user.isAdmin}
                        deletePost={deletePost}
                      />
                    </div>
                  ) : (
                    ""
                  )
                )
              : feed.posts.map((item) => (
                  <div key={item._id}>
                    <AllPost
                      story={item}
                      isAdmin={user.isAdmin}
                      deletePost={deletePost}
                    />
                  </div>
                ))
            : ""}
          <div className={styles.moreButtonDiv}>
            {feed.posts.length ? (
              <button onClick={fetchData} className={styles.morePost}>
                More Posts
              </button>
            ) : (
              <p>No Posts, Start with your own story</p>
            )}
          </div>
        </div>
        <div className={styles.rightbar}>
          <Contacts viewProfile={viewProfile} friends={friends} />
          <SuggestedFriends />
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
  deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
