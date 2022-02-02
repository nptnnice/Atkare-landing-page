import React, { useState, useEffect } from "react";
import factory from "../assets/images/factory.svg";
import mall from "../assets/images/mall.svg";
import school from "../assets/images/school.svg";
import condo from "../assets/images/condo.svg";
import dot from "../assets/images/dot.svg";
import contactbar from "../assets/images/contactbar.png";

const B2Bbooth = (props) => {
  const [businessType, setBusinessType] = useState("");
  
  useEffect(()=>{
  console.log(businessType)
},[businessType])

  const renderBusinessType = () => {
    if(businessType=="")
    {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={()=>setBusinessType('factory')}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('mall')}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('school')}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('condo')}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={()=>setBusinessType('others')}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    }
    else if(businessType=="factory")
    {
      return (
        <div>
          <div className="company-type">
            <div className="img-box selected" onClick={()=>setBusinessType('factory')}>
              <img className="img-selected" src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('mall')}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('school')}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('condo')}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={()=>setBusinessType('others')}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    }
    else if(businessType=="mall")
    {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={()=>setBusinessType('factory')}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box selected" onClick={()=>setBusinessType('mall')}>
              <img className="img-selected" src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('school')}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('condo')}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={()=>setBusinessType('others')}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    }
    else if(businessType=="school")
    {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={()=>setBusinessType('factory')}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('mall')}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box selected" onClick={()=>setBusinessType('school')}>
              <img className="img-selected" src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('condo')}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={()=>setBusinessType('others')}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    }
    else if(businessType=="condo")
    {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={()=>setBusinessType('factory')}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('mall')}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('school')}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box selected" onClick={()=>setBusinessType('condo')}>
              <img className="img-selected" src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={()=>setBusinessType('others')}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    }
    else if(businessType=="others")
    {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={()=>setBusinessType('factory')}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('mall')}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('school')}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={()=>setBusinessType('condo')}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box selected" onClick={()=>setBusinessType('others')}>
            <img className="img-selected" src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="b2b-booth">
      <div className="container">
        <h1 className="head-contact">ร่วมงานกับเรา</h1>
        <div className="toggle-btn">
          <div className="move-btn"></div>
          <h1
            onClick={() => {
              props.setForm("B2Bbooth");
            }}
          >
            B2B Booth
          </h1>
          <h2
            onClick={() => {
              props.setForm("retail");
            }}
          >
            Retail ATK
          </h2>
        </div>
        <form className="B2B-grid">
          <h1>
            B2B<h6>Booth</h6>
          </h1>
          <p>
            รับบริการตรวจโควิดครบวงจรถึงที่<br></br>
            ทุก ๆ 3 วัน พร้อมชุดตรวจ ATK ที่ได้มาตรฐาน
          </p>
          <h2 className="general-topic">ข้อมูลพื้นฐาน</h2>
          <div className="general">
            <div className="name-flex">
              <div className="container">
                <label>ชื่อ</label>
                <input type="text" className="firstname-box" />
              </div>
              <div className="container">
                <label>นามสกุล</label>
                <input type="text" className="lastname-box" />
              </div>
            </div>
            <div className="container">
              <label>ตำแหน่งงาน</label>
              <input type="text" className="job-box" placeholder="Optional" />
            </div>
            <div className="contact-flex">
              <div className="container">
                <label>E-mail สำหรับติดต่อกลับ</label>
                <input
                  type="text"
                  className="email-box"
                  placeholder="Optional"
                />
              </div>
              <div className="container">
                <label>เบอร์โทรศัพท์</label>
                <input type="text" className="phone-box" />
              </div>
            </div>
          </div>
          <h2 className="company-topic">ข้อมูลบริษัท</h2>
          <div className="company">
            <div className="container">
              <label>ชื่อธุรกิจ / บริษัท / โรงเรียน</label>
              <input type="text" className="company-box" />
            </div>
            <h5>ประเภทธุรกิจ</h5>
            {renderBusinessType()}
          </div>
          <h2 className="add-topic">
            คำถามอื่น ๆ<br></br>เพิ่มเติม
          </h2>
          <textarea type="text" className="add-box" placeholder="Optional" />
          <button type="submit" className="send-btn">
            ส่ง
          </button>
        </form>
      </div>
      <img src={contactbar} alt="contactbar"></img>
    </div>
  );
};

export default B2Bbooth;
