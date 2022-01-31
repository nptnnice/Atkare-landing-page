import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <h1 className="head-contact">ร่วมงานกับเรา</h1>
      <div className="toggle-btn">
        <span className="toggle1">
          <h1>B2B Booth</h1>
        </span>
        <h2>Retail ATK</h2>
      </div>
      <div className="B2B-box">
        <div className="B2B-head">
          <h1>
            B2B<h2>Booth</h2>
          </h1>
          <p>
            รับบริการตรวจโควิดครบวงจรถึงที่<br></br>
            ทุก ๆ 3 วัน พร้อมชุดตรวจ ATK ที่ได้มาตรฐาน
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
