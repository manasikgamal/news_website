import axios from "axios";

const API_Url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

const getArticle = async (key) => {
  return await axios.get(API_Url + key).then((response) => {
    localStorage.setItem("articles", JSON.stringify(response.data.articles));
    return response.data;
  });
};

const searcharticle = async (value, key) => {
  let today = new Date().toISOString();
  let yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toISOString();
  return await axios
    .get(
      `https://newsapi.org/v2/everything?q=${value}&searchIn=title&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=` +
        key
    )
    .then((response) => {
      localStorage.setItem("articles", JSON.stringify(response.data.articles));
      return response.data;
    });
};
const articleservice = {
  getArticle,
  searcharticle,
};

export default articleservice;
