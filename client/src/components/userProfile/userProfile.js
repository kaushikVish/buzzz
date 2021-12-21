import React from "react";
import styles from './userProfile.module.css';

const UserProfile = ({username,imgUrl}) =>{
    return(
        <div className={styles.userprofile}>
            <img id ={styles.img} src={imgUrl} alt="Profile Image"/>
            <span id={styles.username}>{username}</span>
            <span id={styles.second_span}>Newly Recruit at TTN</span>
            <div id={styles.post_details}>
                <div id={styles.post_views}>
                    <div>234</div>
                    <div style={{"textAlign":"center"}}>Post Views</div>
                </div>
                <div id={styles.posts}>
                    <div>10</div>
                    <div>Post</div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;