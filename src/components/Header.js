import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./actions/auth";
import { getArticleAction } from "./actions/article_action";
export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const activeone = JSON.parse(localStorage.getItem("active"))
    ? JSON.parse(localStorage.getItem("active"))
    : 1;
  const user = useSelector((state) => state.auth.user.key);
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch(logout());
    localStorage.removeItem("active");
    navigate("/logout");
  };
  const handlemain = () => {
    dispatch(getArticleAction(user));
    localStorage.setItem("active", JSON.stringify(1));
    navigate("/main");
  };
  const handleprofile = () => {
    localStorage.setItem("active", JSON.stringify(2));
    navigate("/profile");
  };
  const activeNav = (id) => {
    if (id === activeone) return "headeroption header_choose";
    else return "headeroption";
  };
  return (
    <div className="header_container">
      <div className="header_left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpiNON39UBXjwmFR3gLH78i-oQe9DWpDkSw&usqp=CAU"
          alt=""
        />
      </div>
      {isLoggedIn ? (
        <div className="header_right">
          <div
            className={activeNav(1)}
            onClick={() => {
              handlemain();
            }}
          >
            <HomeIcon className="headeroption_icon" />
            <h3 className="headeroption_title">Main</h3>
          </div>
          <div
            className={activeNav(2)}
            onClick={() => {
              handleprofile();
            }}
          >
            <AccountBoxIcon className="headeroption_icon" />
            <h3 className="headeroption_title">Profile</h3>
          </div>
          <div
            className='headeroption'
            onClick={() => {
              handlelogout();
            }}
          >
            <LogoutIcon className="headeroption_icon" />
            <h3 className="headeroption_title">Logout</h3>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
