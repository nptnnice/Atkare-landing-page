import React from "react";
import icon from "../assets/images/icon.png";
import email from "../assets/images/email.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="text-box">
        <h1>
          ปกป้อง<br></br>ธุรกิจของคุณจาก COVID-19
        </h1>
        <h2>
          ATKare พร้อมจัดหาชุดตรวจ ATK
          ที่ได้มาตรฐาน เรามีทีมผู้เชี่ยวชาญ
          เพื่อการตรวจนอกสถานที่ และ
          ระบบจัดเก็บข้อมูลเพื่อบันทึกประวัติ
          การตรวจรายบุคคลสำหรับทั้งองค์กร
        </h2>
      </div>
      <h2 className="contact-btn" onClick={()=>{
                    props.setPage('contact')
                }}>
        ร่วมงานกับเรา
        <span className="arrow">{">"}</span>
      </h2>
      <img src={icon} alt="icon" id="icon"></img>
      <div className="email-box">
        <img src={email} alt="email" id="email"></img>
        <h4>ATKareTH@gmail.com</h4>
      </div>
      <p>© 2022 Pinpoint Inter Group CO., LTD. All rights reserved.</p>
    </div>
  );
};

export default Footer;
