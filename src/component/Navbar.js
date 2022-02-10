import React from "react";
import logo from "../assets/images/logo.png";
import close from "../assets/images/close.png";
import email from "../assets/images/email.png";
import { useState } from "react";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState("");
  let url = "https://shopee.co.th/mynameispawares?categoryId=100001&itemId=10386127014";

  const toggleSidebar = () => {
    if (sidebar == "" || sidebar == "inactive") {
      return (
        <div>
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
                <a href={url} className="shopee-btn move-pls">Shopee</a>
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
            <div className="nav-btn" onClick={() => setSidebar("active")}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="nav-toggle">
            <img src={close} alt="close" id="close"></img>
            <ul className="menu-mobile">
              <li
                onClick={() => {
                  props.setPage("home");
                  props.scrollToCertified();
                  setSidebar("inactive");
                }}
              >
                Certified ATK
              </li>
              <li
                onClick={() => {
                  props.setPage("home");
                  props.scrollToWhyus();
                  setSidebar("inactive");
                }}
              >
                Why Us
              </li>
              <li
                onClick={() => {
                  props.setPage("home");
                  props.scrollToOperate();
                  setSidebar("inactive");
                }}
              >
                Operate ATK
              </li>
            </ul>
            <div className="container">
              <a href={url} className="buy-btn">
                ซื้อเลย<span>{">"}</span>
              </a>
              <div
                className="contact-btn"
                onClick={() => {
                  props.setPage("contact");
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  setSidebar("inactive");
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
                <img src={email} alt="email" id="email"></img>
                <h2>ATKareTH@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (sidebar == "active") {
      return (
        <div>
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
                <a href={url} className="shopee-btn move-pls">Shopee</a>
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
            <div className="nav-btn" onClick={() => setSidebar("active")}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="nav-toggle show">
            <img
              src={close}
              alt="close"
              id="close"
              onClick={() => setSidebar("inactive")}
            ></img>
            <ul className="menu-mobile">
              <li
                onClick={() => {
                  props.setPage("home");
                  props.scrollToCertified();
                  setSidebar("inactive");
                }}
              >
                Certified ATK
              </li>
              <li
                onClick={() => {
                  props.setPage("home");
                  props.scrollToWhyus();
                  setSidebar("inactive");
                }}
              >
                Why Us
              </li>
              <li
                onClick={() => {
                  props.setPage("home");
                  props.scrollToOperate();
                  setSidebar("inactive");
                }}
              >
                Operate ATK
              </li>
            </ul>
            <div className="container">
              <a href={url} className="buy-btn">
                ซื้อเลย<span>{">"}</span>
              </a>
              <div
                className="contact-btn"
                onClick={() => {
                  props.setPage("contact");
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  setSidebar("inactive");
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
                <img src={email} alt="email" id="email"></img>
                <h2>ATKareTH@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
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
      </div>
      {toggleSidebar()}
      {/* <div className="nav-toggle">
        <img src={close} alt="close" id='close'></img>
        <ul className="menu-mobile">
          <li
            onClick={() => {
              props.setPage("home");
              props.scrollToCertified();
              setSidebar("inactive");
            }}
          >
            Certified ATK
          </li>
          <li
            onClick={() => {
              props.setPage("home");
              props.scrollToWhyus();
              setSidebar("inactive");
            }}
          >
            Why Us
          </li>
          <li
            onClick={() => {
              props.setPage("home");
              props.scrollToOperate();
              setSidebar("inactive");
            }}
          >
            Operate ATK
          </li>
        </ul>
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
            <img src={email} alt="email" id='email'></img>
            <h2>ATKareTH@gmail.com</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
