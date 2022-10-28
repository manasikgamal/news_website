import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getdescription } from "./actions/article_action";
import "./Story.css";
export const Story = () => {
  const { title } = useParams();
  const articles = JSON.parse(localStorage.getItem("articles"))
    ? JSON.parse(localStorage.getItem("articles"))
    : {};
  const userkey = useSelector((state) => state.auth.user.key);
  const dispatch = useDispatch();
  const onearticle = useSelector((state) => state.articles.onearticle);
  useEffect(() => {
    dispatch(getdescription(title, articles));
  }, []);
  return (
    <div>
      {onearticle &&
        [onearticle].map((x, index) => (
          <div key={index} className="story_container">
            <div className="story_title">
              <h1>{x.title}</h1>
            </div>
            <div className="story_source">
              <h3>{x.author},</h3>
              <h3>{x.source.name}</h3>
              <h3>• Published {x.publishedAt}</h3>
            </div>
            <div className="story_img">
              {" "}
              <img src={x.urlToImage} alt="" />
            </div>
            <div className="story_content">
              <h3>Content</h3>
              {x.content}
            </div>
            <div className="story_desc">
              <h3>description</h3>
              {x.description}
            </div>
            <div className="story_url">
              <h3>More Details</h3>
              <a href={x.url}>{x.url}</a>
            </div>
          </div>
        ))}
    </div>
  );
};
