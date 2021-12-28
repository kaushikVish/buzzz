import React, { useState } from "react";
import styles from "./contacts.module.css";
import { Input } from "antd";
const { Search } = Input;

const Contacts = () => {
  const defaultList = [
    "Nikhil Sharma",
    "Mayank",
    "Shubham Srivastava",
    "Akshay",
    "Devansh Sharma",
    "Mayank",
    "Shubham Srivastava",
    "Akshay",
    "Devansh Sharma",
  ];

  const [friendList, setfriendList] = useState(defaultList);

  const handleSearch = (searchItem) => {
    console.log("search", searchItem);
    if(searchItem===""){
      setfriendList(defaultList)
  }
    let newList = defaultList.filter((item) => item === searchItem);
    setfriendList(newList);
  };

  return (
    <div className={styles.contacts}>
      <Search
        placeholder="Search Contacts"
        onSearch={handleSearch}
        style={{ width: 180, marginLeft: 5 }}
      />
      {friendList.map((user,index) => (
        <div key={index} className={styles.user}>{user}</div>
      ))}
    </div>
  );
};

export default Contacts;
