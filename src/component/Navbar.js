import React from "react";
import logo from "../assets/images/logo.png";
import close from "../assets/images/close.png";
import email from "../assets/images/email.png";
import { useState } from "react";

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <div
        className="logo"
        onClick={() => {
          props.setPage("home");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <img alt="logo" src={logo} />
      </div>
      <div>
        <ul className="menu-bar">
          <li
            className="move-pls"
            onClick={() => {
              props.setPage("home");
              props.scrollToCertified();
            }}
          >
            Certified ATK
          </li>
          <li
            className="move-pls"
            onClick={() => {
              props.setPage("home");
              props.scrollToWhyus();
            }}
          >
            Why Us
          </li>
          <li
            className="move-pls"
            onClick={() => {
              props.setPage("home");
              props.scrollToOperate();
            }}
          >
            Operate ATK
          </li>
          <h2 className="shopee-btn move-pls">Shopee</h2>
          <h2
            className="contact-btn"
            onClick={() => {
              props.setPage("contact");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            ติดต่อเรา
          </h2>
        </ul>
      </div>
      <div className="nav-btn">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-toggle">
        <img src={close} alt="close"></img>
        <div className="container">
          <div className="buy-btn">
            ซื้อเลย<span>{">"}</span>
          </div>
          <div
            className="contact-btn"
            onClick={() => {
              props.setPage("contact");
            }}
          >
            ร่วมงานกับเรา<span>{">"}</span>
          </div>
          <div className="or-contact">
            <hr></hr>
            <h2>หรือ</h2>
            <hr></hr>
          </div>
          <div className="email-box">
            <img src={email} alt="email"></img>
            <h2>ATKareTH@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
