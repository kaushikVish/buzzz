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
    const response = await fetch("http://localhost:8000/createPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    const result = response.json();
    console.log("response of createPost backend", response);
    return result;
  } catch (err) {
    console.log("errror in services", err);
    return err;
  }
};

export default services;
