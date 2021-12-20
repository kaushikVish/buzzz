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

export default services;
