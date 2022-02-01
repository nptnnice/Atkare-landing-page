import React from "react";
import contactbar from "../assets/images/contactbar.png";

const Retail = (props) => {
  return (
    <div className="retail">
      <div className="container">
        <h1 className="head-contact">ร่วมงานกับเรา</h1>
        <div className="toggle-btn">
          <div className="move-btn"></div>
          <h2
            onClick={() => {
              props.setPage("B2Bbooth");
            }}
          >
            B2B Booth
          </h2>
          <h1
            onClick={() => {
              props.setPage("retail");
            }}
          >
            Retail ATK
          </h1>
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
          <h2 className="purpose-topic">
            จุดประสงค์<br></br>การซื้อ ATK
          </h2>
          <div className="purpose-box">ขายในร้านเภสัชกรของตนเอง (Optional)</div>
          <h2 className="add-topic">
            คำถามอื่น ๆ<br></br>เพิ่มเติม
          </h2>
          <div className="additional">
            <div className="add-box">Optional</div>
            <div className="send-btn"></div>
          </div>
        </div>
      </div>
      <img src={contactbar} alt="contactbar"></img>
    </div>
  );
};

export default Retail;
