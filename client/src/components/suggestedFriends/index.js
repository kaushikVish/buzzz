import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { connect } from "react-redux";
import { viewProfile, addFriend } from "../../Redux/actions/feed";
import styles from "./suggestedFriends.module.css";

const { Search } = Input;

const SuggestedFriends = ({ suggestedFriends, viewProfile, addFriend }) => {
  let navigate = useNavigate();
  const [filteredList, setFilteredList] = useState(suggestedFriends);

  useEffect(() => {
    setFilteredList(suggestedFriends);
  }, [suggestedFriends]);

  //   console.log("list ", list[0].userName);
  const handleSearch = (searchItem) => {
    if (searchItem === "") {
      setFilteredList(suggestedFriends);
    } else {
      let newList = suggestedFriends.filter(
        (item) => item.userName === searchItem
      );
      setFilteredList(newList);
    }
  };

  const profileViewer = (user) => {
    console.log("user -=====> ", user);
    user.isFriend = false;
    viewProfile(user);
    navigate(`/friend_profile`);
  };

  const requestHandler = (user) => {
    let data = {
      id: user._id,
    };
    addFriend(data);
  };

  return (
    <div className={styles.box}>
      <div className={styles.heading}>Suggestion List</div>
      <Search
        placeholder="Suggestion"
        onSearch={handleSearch}
        bordered={false}
      />
      {filteredList.length
        ? filteredList.map((item) => (
            <div key={item._id} className={styles.suggestionBox}>
              <img src={item.picture} alt="pp" />
              <button onClick={() => profileViewer(item)}>
                {item.userName}
              </button>
              <i
                onClick={() => requestHandler(item)}
                className="fas fa-user-plus"
              ></i>
            </div>
          ))
        : "No Suggestion"}
    </div>
  );
};

const mapStateToProps = ({ feed }) => {
  const { suggestedFriends } = feed;
  return { suggestedFriends };
};

const mapDispatchToProps = {
  viewProfile,
  addFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedFriends);
