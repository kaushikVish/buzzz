import React, { useEffect, useState } from "react";
import Contacts from "../../components/contacts/index";
import CreatePost from "../../components/createPost/index";
import Navbar from "../../components/navbar/index";
import styles from "./feed.module.css";
import { connect } from "react-redux";
import UserProfile from "../../components/userProfile/userProfile";
import { getPosts } from "../../Redux/actions/feed";
import AllPost from "../../components/allPosts";

const Feed = ({ user, feed, getPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hey in use effect");
    getPosts();
    setPosts(feed.posts);
    console.log("agaaainnnnnnnn", feed.posts);
  }, []);

  console.log("posts ===>", posts);
  console.log("=====>", Object.keys(posts));
  // let a=posts.map((item,index)=>{
  //   console.log("item =======>",item._id)
  // })

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
                <AllPost story={item} />
              </div>
            ))
          ) : (
            <span>heloo {posts}</span>
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
  // console.log("feed in navbar", feed);
  return { user, feed };
};

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
