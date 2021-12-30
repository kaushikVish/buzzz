import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/navbar";
import styles from "./userProfile.module.css";
import { connect } from "react-redux";
import SuggestedFriends from "../../components/suggestedFriends";
import { getUserDetails, saveUpdateDetails } from "../../Redux/actions/login";
import { getSuggestedFriends } from "../../Redux/actions/feed";
import { toast, ToastContainer } from "react-toastify";

const UserProfile = ({
  user,
  getUserDetails,
  getSuggestedFriends,
  saveUpdateDetails,
}) => {
  const [image, setImage] = useState(user.picture);
  const [picture, setPicture] = useState("");
  const [gender, setGender] = useState("");

  const refUsername = useRef("");
  const refDesignation = useRef();
  const refBirthday = useRef();
  const refCity = useRef();
  const refState = useRef();
  const refPincode = useRef();

  useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) {
      getUserDetails();
      getSuggestedFriends();
      setImage(user.picture);
    }
  }, []);

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const updateChanges = (e) => {
    e.preventDefault();
    const cloudData = new FormData();
    cloudData.append("file", picture);
    cloudData.append("upload_preset", "Buzzz_Images");
    let values = {
      email: user.email,
      userName: refUsername.current.value,
      picture: cloudData,
      designation: refDesignation.current.value,
      gender: gender,
      birthday: refBirthday.current.value,
      city: refCity.current.value,
      state: refState.current.value,
      pincode: refPincode.current.value,
    };
    saveUpdateDetails(values);
    toast.success("Updated details");
    // console.log("values ======>", values);
    refUsername.current.value = "";
    refDesignation.current.value = "";
    refBirthday.current.value = "";
    refCity.current.value = "";
    refState.current.value = "";
    refPincode.current.value = "";
    setPicture("");
    setGender("");
  };

  const imageHandler = (event) => {
    console.log(event.target.files[0]);
    setPicture(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <Navbar user={user} />
      <ToastContainer />
      <div className={styles.box}>
        <div className={styles.profileBox}>
          <div className={styles.userDetails}>
            <div className={styles.backgroundImg}></div>
            <div>
              <img src={image} height="100px" width="100" />
              <input type="file" name="file" onChange={imageHandler} />
            </div>
            <span>{user.userName}</span>
          </div>
          <div className={styles.formBox}>
            <form onSubmit={updateChanges}>
              <div className={styles.formItems}>
                <label>Email: </label>
                <input type="text" value={user.email} disabled />
              </div>
              <div className={styles.formItems}>
                <label>Username: </label>
                <input
                  type="text"
                  ref={refUsername}
                  placeholder="Username"
                  required
                />
              </div>
              <div className={styles.formItems}>
                <label>Designation: </label>
                <select
                  className={styles.designation}
                  required
                  ref={refDesignation}
                >
                  <option value="Trainee">Trainee</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Senior Software Engineer">
                    Senior Software Engineer
                  </option>
                  <option value="Tech Lead">Tech Lead</option>
                </select>
              </div>
              <div className={styles.gender}>
                <div>
                  <label>Gender: </label>
                </div>
                <div>
                  <div>
                    <input
                      type="radio"
                      value="Male"
                      name="Gender"
                      required
                      onChange={handleGender}
                    />
                    <label> Male</label>
                  </div>
                  <input
                    type="radio"
                    value="Female"
                    name="Gender"
                    required
                    onChange={handleGender}
                  />
                  <label> Female</label>
                </div>
              </div>
              <div className={styles.formItems}>
                <label>Birthday: </label>
                <input type="date" required ref={refBirthday} />
              </div>
              <div className={styles.formItems}>
                <label>City: </label>
                <input type="text" required ref={refCity} />
              </div>
              <div className={styles.formItems}>
                <label>State: </label>
                <select className={styles.designation} ref={refState}>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              <div className={styles.formItems}>
                <label>Pincode: </label>
                <input
                  type="number"
                  placeholder="Pincode"
                  ref={refPincode}
                  required
                />
              </div>
              <div className={styles.buttonBox}>
                <button type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.suggestionBox}>
          <SuggestedFriends />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

const mapDispatchToProps = {
  getUserDetails,
  getSuggestedFriends,
  saveUpdateDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
