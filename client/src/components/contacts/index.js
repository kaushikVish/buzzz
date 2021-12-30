import React, { useEffect, useState } from "react";
import styles from "./contacts.module.css";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;

const Contacts = ({ friends, viewProfile }) => {
  const [friendList, setFriendList] = useState(friends);
  let navigate = useNavigate();

  useEffect(() => {
    setFriendList(friends);
  });

  const handleSearch = (searchItem) => {
    if (searchItem === "") {
      setFriendList(friends);
    } else {
      let newList = friends.filter((item) => item === searchItem);
      console.log("newlist ===>", newList);
      setFriendList(newList);
    }
  };

  const profileViewer = (user) => {
    console.log("user -=====> ", user);
    user.isFriend=true;
    viewProfile(user);
    navigate(`/friend_profile`);
  };

  // console.log("friend list =====>", friends);
  return (
    <div className={styles.contacts}>
      <div className={styles.heading}>Friends List</div>
      <Search
        placeholder="Search Contacts"
        onSearch={handleSearch}
        bordered={false}
        className={styles.searchbox}
      />
      {friendList.length
        ? friendList.map((user) => (
            <div key={user.id} className={styles.friends}>
              <img src={user.picture} alt="pp" />
              <button onClick={() => profileViewer(user)}>
                {user.userName}
              </button>
            </div>
          ))
        : "No friends"}
    </div>
  );
};

// const mapStateToProps = ({ auth }) => {
//   const { friends } = auth;
//   return { friends };
// };

// export default connect(mapStateToProps, null)(Contacts);
export default Contacts;
