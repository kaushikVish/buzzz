import React from "react";
import styles from 'allPosts.module.css';

const AllPost = () => {
    return(
        <>
            <div>
                <div className={styles.header}>
                    {/* <img src="" alt="profile pic"/> */}
                    <span>{}</span>
                </div>
                <div className={styles.content}>
                    <div>
                        {/* text area */}
                    </div>
                    {/* <img src="" alt="post image"/> */}
                </div>
                <div className={styles.footer}>
                    <button>Like</button>
                    <button>Dislike</button>
                    <button>Comment</button>
                </div>
            </div>
        </>
    )
}

export default AllPost;