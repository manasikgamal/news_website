import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { login } from "./actions/auth";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

export default function Login() {
  const [email, setemail] = useState();
  const [apikey, setapikey] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.message);
  const handleemail = (email) => {
    setemail(email);
  };
  const handlekey = (key) => {
    setapikey(key);
  };
  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(login(email, apikey)).then(() => {
      navigate("/main");
    });
  };
  return (
    <div className="login">
      <h1>Welcome to News Website</h1>
      {message.message && (
        <div className="alertlogin">
          <Alert variant="outlined" severity="error">
            {message.message}
          </Alert>
        </div>
      )}
      <form className="login_form" onSubmit={handlelogin}>
        <div className="login_group">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => handleemail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="login_group">
          <input
            type="text"
            placeholder="Your API"
            onChange={(e) => handlekey(e.target.value)}
          />
          <label>Your API</label>
        </div>
        <div className="login_button">
          <button>
            <div className="login_button_text">
              <h3>Login</h3>
              <LoginIcon />
            </div>
          </button>
        </div>
        <h3>
          if you dont have API Key please click{" "}
          <a href="https://newsapi.org/register">here</a> to create a new one
        </h3>
      </form>
    </div>
  );
}
