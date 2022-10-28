import axios from "axios";

const API_Url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

const login = async (email, key) => {
  return await axios.get(API_Url + key).then((response) => {
    if (response.data.status === "ok") {
      localStorage.setItem("user", JSON.stringify({ key: key, email: email }));
      localStorage.setItem(
        "localuser",
        JSON.stringify({ key: key, email: email })
      );
      const user=JSON.parse(localStorage.getItem("user"))
      return user;
    }
    //return response.data;
  });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authservice = {
  login,
  logout,
};

export default authservice;
