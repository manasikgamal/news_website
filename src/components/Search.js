import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchAction } from "./actions/search_action";
export const Search = () => {
  const [search, setsearch] = useState();
  const dispatch = useDispatch();
  const key = useSelector((state) => state.auth.user.key);
  const inputsearch = useSelector((state) => state.articles.key);
  const handlesearch = (value) => {
    setsearch(value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      e.preventDefault();
      dispatch(getSearchAction(search, key));
    }
  };
  const handlepress = (event) => {
    event.preventDefault();
    dispatch(getSearchAction(search, key));
  };
  return (
    <div className="search_container">
      <form
        className="search_form"
        onKeyUp={handlesubmit}
        onSubmit={handlesubmit}
      >
        <input
          type="text"
          placeholder="Search"
          defaultValue={inputsearch}
          onChange={(e) => handlesearch(e.target.value)}
        />
        <SearchIcon className="search_icon" onClick={handlepress} />
      </form>
    </div>
  );
};
