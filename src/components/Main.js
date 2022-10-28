import React, { useEffect, useState } from "react";
import { TopsArticle } from "./TopsArticle";
import { Alert } from "@mui/material";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { getArticleAction } from "./actions/article_action";
import { Search } from "./Search";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  const user = useSelector((state) => state.auth.user.key);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const key = useSelector((state) => state.articles.key);
  const message = useSelector((state) => state.message);
  const navigate = useNavigate();
  const handleartecle = (title) => {
    localStorage.setItem(
      "articles",
      JSON.stringify({ articles: articles.tops.articles })
    );
    navigate(`/story/${title}`);
  };
  console.log("main", user);
  useEffect(() => {
    if (!key) dispatch(getArticleAction(user));
  }, []);
  return (
    <div className="main_container">
      <div className="main_search">
        <Search />
      </div>
      {message.message && (
        <div className="alertstyle">
          <Alert variant="outlined" severity="error">
            {message.message}
          </Alert>
        </div>
      )}
      <div className="main_title">
        {key ? (
          <h1>
            Search Result about{"  "}"{key}"
          </h1>
        ) : (
          <h1>Most Recent</h1>
        )}
      </div>
      {articles.tops &&
        articles.tops.articles.slice(0, 1).map((x, index) => (
          <div className="main_big_img" key={index}>
            <div className="main_div_over">
              <h3 onClick={() => handleartecle(x.title)}>{x.title}</h3>
            </div>
            <img src={x.urlToImage} alt="" />
          </div>
        ))}
      <div className="main_tops">
        {articles.tops &&
          articles.tops.articles
            .slice(1)
            .map((x, index) => (
              <TopsArticle
                index={index}
                key={index}
                image={x.urlToImage}
                title={x.title}
              />
            ))}
      </div>
    </div>
  );
};
