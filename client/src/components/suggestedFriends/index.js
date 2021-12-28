import React, { useEffect, useState } from "react";
import { Input } from "antd";
import styles from "./suggestedFriends.module.css";

const { Search } = Input;
const SuggestedFriends = () => {
  const [suggestion, setSuggestion] = useState([]);
  const [filteredList, setFilteredList] = useState(suggestion);

  const getSuggestedFriends = async () => {
    try {
      const response = await fetch("http://localhost:8000/suggestionFriends", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
          "Content-Type": "application/json",
        },
      });
      let result = await response.json();
      setFilteredList(result);
      setSuggestion(result);

      return result;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getSuggestedFriends();
  }, []);

  const handleSearch = (searchItem) => {
    if (searchItem === "") {
      setFilteredList(suggestion);
    } else {
      let newList = suggestion.filter((item) => item.userName === searchItem);
      setFilteredList(newList);
    }
    // console.log("suggested list", );
  };

  return (
    <div className={styles.box}>
      <Search
        placeholder="Suggestion"
        onSearch={handleSearch}
        style={{ width: 180, marginLeft: 5 }}
      />
      {filteredList.length
        ? filteredList.map((item) => (
            <div className={styles.suggestionBox}>
              <img src={item.picture} alt="pp" />
              <button>{item.userName}</button>
            </div>
          ))
        : "heyyyyyyyyyyyyy"}
    </div>
  );
};

export default SuggestedFriends;
