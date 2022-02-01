import React from "react";
import factory from "../assets/images/factory.svg";
import mall from "../assets/images/mall.svg";
import school from "../assets/images/school.svg";
import condo from "../assets/images/condo.svg";
import dot from "../assets/images/dot.svg";

const Retail = () => {
  return (
    <div>
      <h1 className="head-contact">ร่วมงานกับเรา</h1>
      <div className="toggle-btn">
        <h2>B2B Booth</h2>
        <span className="toggle2">
          <h1>Retail ATK</h1>
        </span>
      </div>
      <div className="retail-grid">
        <h1>
          Retail<h6>ATK</h6>
        </h1>
        <p>
          จำหน่ายชุดตรวจ ATK ที่ได้มาตรฐาน<br></br>
          <span>จำหน่ายขั้นต่ำ 100 ชุด</span>
        </p>
        <h2 className="general-topic">ข้อมูลพื้นฐาน</h2>
        <div className="general">
          <div className="name-box">
            <h5>ชื่อ</h5>
            <h5>นามสกุล</h5>
          </div>
          <div className="contact-box">
            <h5 className="email-box">E-mail สำหรับติดต่อกลับ</h5>
            <h5 className="tel-box">เบอร์โทรศัพท์</h5>
          </div>
        </div>
        <h2 className="purpose-topic">จุดประสงค์<br></br>การซื้อ ATK</h2>
        <div className="purpose-box">ขายในร้านเภสัชกรของตนเอง (Optional)</div>
        <h2 className="add-topic">
          คำถามอื่น ๆ<br></br>เพิ่มเติม
        </h2>
        <div className="additional">
          <div className="add-box">Optional</div>
          <div className="send-btn">ส่ง</div>
        </div>
      </div>
    </div>
  );
};

export default Retail;
