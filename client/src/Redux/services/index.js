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
    let status=response.status;
    console.log("result of getting user ====> ", result);
    return {result,status};
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
    console.log("half work is done ===>", post);
    const response = await fetch("http://localhost:8000/create_post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    console.log("response of createPost backend", response);
    return response;
  } catch (err) {
    console.log("errror in services in posting story", err);
    return err;
  }
};

services.getPosts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/getPosts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        "Content-Type": "application/json",
      },
    });
    let post = await response.json();
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
    console.log("data in like post services", data);
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

export default services;
