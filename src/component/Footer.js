import React from "react";
import icon from "../assets/images/icon.png";
import email from "../assets/images/email.png";
import bg7 from "../assets/images/bg7.png";
import bg8 from "../assets/images/bg8.png";

const Footer = (props) => {
  return (
    <div>
      {/* <img src={bg7} alt="bg7" id="bg7" /> */}
      <div className="footer">
        <div className="bg">
          <img src={bg7} alt="bg7" id="bg7" />
          <img src={bg8} alt="bg8" id="bg8" />
        </div>
        <div className="text-box">
          <h1>
            ปกป้อง<br></br>ธุรกิจของคุณจาก COVID-19
          </h1>
          <h2>
            ATKare พร้อมจัดหาชุดตรวจ ATK ที่ได้มาตรฐาน เรามีทีมผู้เชี่ยวชาญ
            เพื่อการตรวจนอกสถานที่ และ ระบบจัดเก็บข้อมูลเพื่อบันทึกประวัติ
            การตรวจรายบุคคลสำหรับทั้งองค์กร
          </h2>
        </div>
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
          ร่วมงานกับเรา
          <span className="arrow">{">"}</span>
        </h2>
        <div className="footiest">
          <img src={icon} alt="icon" id="icon"></img>
          <div className="email-box">
            <img src={email} alt="email" id="email"></img>
            <h4>ATKareTH@gmail.com</h4>
          </div>
          <p>© 2022 Pinpoint Inter Group CO., LTD. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
