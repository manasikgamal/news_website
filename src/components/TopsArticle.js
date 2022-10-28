import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TopsArticles.css";
export const TopsArticle = ({ image, title }) => {
  const articles = useSelector((state) => state.articles.tops.articles);
  const navigate = useNavigate();
  const handleartecle = () => {
    localStorage.setItem("articles", JSON.stringify({ articles: articles }));
    navigate(`/story/${title}`);
  };
  return (
    <div className="top_container">
      <img src={image} alt="" />
      <h3
        onClick={() => {
          handleartecle();
        }}
      >
        {title}
      </h3>
    </div>
  );
};
