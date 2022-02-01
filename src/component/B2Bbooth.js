import React from "react";
import factory from "../assets/images/factory.svg";
import mall from "../assets/images/mall.svg";
import school from "../assets/images/school.svg";
import condo from "../assets/images/condo.svg";
import dot from "../assets/images/dot.svg";
import contactbar from "../assets/images/contactbar.png";

const B2Bbooth = (props) => {
  return (
    <div className="b2b-booth">
      <div className="container">
        <h1 className="head-contact">ร่วมงานกับเรา</h1>
        <div className="toggle-btn">
          <div className="move-btn"></div>
          <h1
            onClick={() => {
              props.setPage("B2Bbooth");
            }}
          >
            B2B Booth
          </h1>
          <h2
            onClick={() => {
              props.setPage("retail");
            }}
          >
            Retail ATK
          </h2>
        </div>
        <div className="B2B-grid">
          <h1>
            B2B<h6>Booth</h6>
          </h1>
          <p>
            รับบริการตรวจโควิดครบวงจรถึงที่<br></br>
            ทุก ๆ 3 วัน พร้อมชุดตรวจ ATK ที่ได้มาตรฐาน
          </p>
          <h2 className="general-topic">ข้อมูลพื้นฐาน</h2>
          <div className="general">
            <span className="name-box">
              <h5>ชื่อ</h5>
              <h5>นามสกุล</h5>
            </span>
            <h5 className="job-box">ตำแหน่งงาน</h5>
            <span className="contact-box">
              <h5 className="email-box">E-mail สำหรับติดต่อกลับ</h5>
              <h5 className="tel-box">เบอร์โทรศัพท์</h5>
            </span>
          </div>
          <h2 className="company-topic">ข้อมูลบริษัท</h2>
          <div className="company">
            <h5 className="company-box">ชื่อธุรกิจ / บริษัท / โรงเรียน</h5>
            <h5>ประเภทธุรกิจ</h5>
            <div className="company-type">
              <div className="img-box">
                <img src={factory} alt="factory" id="factory"></img>
                <h4>โรงงาน</h4>
              </div>
              <div className="img-box">
                <img src={mall} alt="mall" id="mall"></img>
                <h4>ห้าง</h4>
              </div>
              <div className="img-box">
                <img src={school} alt="school" id="school"></img>
                <h4>โรงเรียน</h4>
              </div>
              <div className="img-box">
                <img src={condo} alt="condo" id="condo"></img>
                <h4>คอนโด</h4>
              </div>
            </div>
            <div className="other-box">
              <img src={dot}></img>
              <h4>อื่น ๆ</h4>
            </div>
          </div>
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

export default B2Bbooth;
