var services = {};

services.loginWithGoogle = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    result.ok = true;
    return result;
  } catch (err) {
    console.log("errror in services", err, data);
    return err;
  }
};

services.getUserDetails = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/getUserDetails", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    let status = response.status;
    // console.log("result of getting user ====> ", result);
    return { result, status };
  } catch (error) {
    console.log("err in services of getting user details ", error);
    return error;
  }
};

services.postStory = async (postData) => {
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dggjn2kcy/image/upload",
      {
        method: "POST",
        body: postData.cloudData,
      }
    );
    const file = await res.json();
    let post = {
      postImage_url: file.secure_url,
      postText: postData.text,
    };

    const response = await fetch("http://localhost:8000/create_post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    let result = await response.json();
    return result;
  } catch (err) {
    console.log("errror in services in posting story", err);
    return err;
  }
};

services.getPosts = async (page) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/getPosts/${page}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    let post = await response.json();
    // console.log("====>",post)
    const result = {
      post,
      status: 200,
    };
    return result;
  } catch (err) {
    console.log("errror in services in getting posts", err);
    return err;
  }
};

services.postReaction = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/post_reaction", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("error in services ====> ", error);
    return error;
  }
};

services.postComment = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/post_comment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("error in services ====> ", error);
    return error;
  }
};

services.getSuggestedFriends = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/suggestionFriends", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    return error;
  }
};

services.addFriend = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/addFriend", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = response.json();
    return result;
  } catch (error) {
    return error;
  }
};

services.updateDetails = async (data) => {
  try {
    if (data.picture !== "") {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dggjn2kcy/image/upload",
        {
          method: "POST",
          body: data.picture,
        }
      );
      const file = await res.json();
      data.picture = file.secure_url;
    }

    const response = await fetch("http://localhost:8000/updateDetails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

services.deletePost = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/deletePost/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default services;
