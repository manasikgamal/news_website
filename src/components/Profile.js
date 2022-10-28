import React, { useState } from "react";
import "./Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useRef } from "react";

export const Profile = () => {
  const localuser = JSON.parse(localStorage.getItem("localuser"));
  const [user, setuser] = useState(localuser);
  const [showemail, setshowemail] = useState(true);
  const [showapi, setshowapi] = useState(true);
  const textemail = useRef(null);
  const textapi = useRef(null);
  const handleeditemail = () => {
    textemail.current.focus();
    setshowemail(!showemail);
  };
  const handleeditapi = () => {
    textapi.current.focus();
    setshowapi(!showapi);
  };
  const handlecheckemail = () => {
    setshowemail(!showemail);
    localStorage.setItem("localuser", JSON.stringify(user));
  };
  const handlecheckapi = () => {
    setshowapi(!showapi);
    localStorage.setItem("localuser", JSON.stringify(user));
  };
  const handleemail = (value) => {
    setuser({ ...user, email: value });
  };
  const handleapi = (value) => {
    setuser({ ...user, key: value });
  };
  return (
    <div className="profile_container">
      <div>
        <AccountCircleIcon className="profile_icon" />
      </div>
      <div className="profile_group">
        {showemail ? (
          <EditIcon className="edit_icon" onClick={() => handleeditemail()} />
        ) : (
          <CheckIcon className="edit_icon" onClick={() => handlecheckemail()} />
        )}
        <input
          disabled={showemail}
          type="text"
          defaultValue={user.email}
          ref={textemail}
          onChange={(e) => handleemail(e.target.value)}
        />
      </div>
      <div className="profile_group">
        {showapi ? (
          <EditIcon className="edit_icon" onClick={() => handleeditapi()} />
        ) : (
          <CheckIcon className="edit_icon" onClick={() => handlecheckapi()} />
        )}
        <input
          disabled={showapi}
          type="text"
          defaultValue={user.key}
          ref={textapi}
          onChange={(e) => handleapi(e.target.value)}
        />
      </div>
    </div>
  );
};
