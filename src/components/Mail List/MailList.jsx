import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money!</h1>
      <span className="mailDesc">
        Sign Up and We WIll Send Best Deals To You
      </span>
      <div className="mailInputContainer">
        <input type="email" placeholder="Enter Your Email" />
        <button className="mailBtn">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
