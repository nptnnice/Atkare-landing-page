import React, { useState, useEffect } from "react";
import factory from "../assets/images/factory.svg";
import mall from "../assets/images/mall.svg";
import school from "../assets/images/school.svg";
import condo from "../assets/images/condo.svg";
import dot from "../assets/images/dot.svg";
import contactbar from "../assets/images/contactbar.png";
import axios from "axios";

const B2Bbooth = (props) => {
  const [businessType, setBusinessType] = useState("");

  useEffect(() => {
    console.log(businessType);
  }, [businessType]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [add, setAdd] = useState("");
  const [othertype, setOthertype] = useState(false);
  const [sendStatus, setSendStatus] = useState(false);

  const onSend = (e) => {
    e.preventDefault();
    // axios.post('https://murmuring-stream-75951.herokuapp.com/newContact',{
    //   name : fname+ ' ' + lname,
    //   email: email,
    //   phone_number: phone,
    //   purpose: purpose,
    //   add: add,
    //   type: 'retail'
    // }).then(res=>{
    //   alert('ส่งสำเร็จ')
    // })
    setSendStatus(true);
  };

  useEffect(() => {
    if (sendStatus == true) {
      let loop = setInterval(() => {
        setSendStatus(false);
      }, 2000);
      return () => clearInterval(loop);
    }
  }, [sendStatus]);

  const renderBusinessType = () => {
    if (businessType == "") {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={() => setBusinessType("factory")}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("mall")}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("school")}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("condo")}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={() => setBusinessType("others")}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    } else if (businessType == "factory") {
      return (
        <div>
          <div className="company-type">
            <div
              className="img-box selected"
              onClick={() => setBusinessType("factory")}
            >
              <img
                className="img-selected"
                src={factory}
                alt="factory"
                id="factory"
              ></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("mall")}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("school")}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("condo")}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={() => setBusinessType("others")}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    } else if (businessType == "mall") {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={() => setBusinessType("factory")}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div
              className="img-box selected"
              onClick={() => setBusinessType("mall")}
            >
              <img
                className="img-selected"
                src={mall}
                alt="mall"
                id="mall"
              ></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("school")}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("condo")}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={() => setBusinessType("others")}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    } else if (businessType == "school") {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={() => setBusinessType("factory")}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("mall")}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div
              className="img-box selected"
              onClick={() => setBusinessType("school")}
            >
              <img
                className="img-selected"
                src={school}
                alt="school"
                id="school"
              ></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("condo")}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={() => setBusinessType("others")}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    } else if (businessType == "condo") {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={() => setBusinessType("factory")}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("mall")}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("school")}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div
              className="img-box selected"
              onClick={() => setBusinessType("condo")}
            >
              <img
                className="img-selected"
                src={condo}
                alt="condo"
                id="condo"
              ></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div className="other-box" onClick={() => setBusinessType("others")}>
            <img src={dot}></img>
            <h4>อื่น ๆ</h4>
          </div>
        </div>
      );
    } else if (businessType == "others") {
      return (
        <div>
          <div className="company-type">
            <div className="img-box" onClick={() => setBusinessType("factory")}>
              <img src={factory} alt="factory" id="factory"></img>
              <h4>โรงงาน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("mall")}>
              <img src={mall} alt="mall" id="mall"></img>
              <h4>ห้าง</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("school")}>
              <img src={school} alt="school" id="school"></img>
              <h4>โรงเรียน</h4>
            </div>
            <div className="img-box" onClick={() => setBusinessType("condo")}>
              <img src={condo} alt="condo" id="condo"></img>
              <h4>คอนโด</h4>
            </div>
          </div>
          <div
            className="other-selected selected"
            onClick={() => setBusinessType("others")}
          >
            <img className="img-selected" src={dot}></img>
            <label>อื่น ๆ</label>
            <input
              type="text"
              className="insert"
              placeholder="โปรดระบุ"
              onChange={(e) => {
                setOthertype(e.target.value);
              }}
            ></input>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="b2b-booth">
        <div className="container">
          <h1 className="head-contact">ร่วมงานกับเรา</h1>
          <div className="toggle-btn">
            <div className="move-btn"></div>
            <h1
              onClick={() => {
                props.setForm("B2Bbooth");
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              B2B Booth
            </h1>
            <h2
              onClick={() => {
                props.setForm("retail");
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
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
                  <input
                    type="text"
                    className="firstname-box"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
                <div className="container">
                  <label>นามสกุล</label>
                  <input
                    type="text"
                    className="lastname-box"
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="container">
                <label>ตำแหน่งงาน</label>
                <input
                  type="text"
                  className="job-box"
                  placeholder="Optional"
                  onChange={(e) => {
                    setJob(e.target.value);
                  }}
                />
              </div>
              <div className="contact-flex">
                <div className="container">
                  <label>E-mail สำหรับติดต่อกลับ</label>
                  <input
                    type="text"
                    className="email-box"
                    placeholder="Optional"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="container">
                  <label>เบอร์โทรศัพท์</label>
                  <input
                    type="text"
                    className="phone-box"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <h2 className="company-topic">ข้อมูลบริษัท</h2>
            <div className="company">
              <div className="container">
                <label>ชื่อธุรกิจ / บริษัท / โรงเรียน</label>
                <input
                  type="text"
                  className="company-box"
                  onChange={(e) => {
                    setBusiness(e.target.value);
                  }}
                />
              </div>
              <h5>ประเภทธุรกิจ</h5>
              {renderBusinessType()}
            </div>
            <h2 className="add-topic">
              คำถามอื่น ๆ<br></br>เพิ่มเติม
            </h2>
            <textarea
              type="text"
              className="add-box"
              placeholder="Optional"
              onChange={(e) => {
                setAdd(e.target.value);
              }}
            />
            {sendStatus == false ? (
              <button
                type="submit"
                className="send-btn"
                onClick={(e) => onSend(e)}
              >
                ส่ง
              </button>
            ) : (
              <button
                type="submit"
                className="send-btn"
                onClick={(e) => onSend(e)}
              >
                ส่งแล้ว
              </button>
            )}
          </form>
        </div>
        <img src={contactbar} alt="contactbar" id="bar"></img>
      </div>
      <div className="B2B-mobile">
        <div className="toggle-mobile1">
          <div className="move-btn"></div>
          <h1
            onClick={() => {
              props.setForm("B2Bbooth");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            B2B Booth
          </h1>
          <h2
            onClick={() => {
              props.setForm("retail");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Retail ATK
          </h2>
        </div>
      </div>
      <form className="B2Bform-mobile">
        <div className="general">
          <div className="container">
            <label>ชื่อ</label>
            <input
              type="text"
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label>นามสกุล</label>
            <input
              type="text"
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label>ตำแหน่งงาน</label>
            <input
              type="text"
              placeholder="Optional"
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label>E-mail สำหรับติดต่อกลับ</label>
            <input
              type="text"
              placeholder="Optional"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <label>เบอร์โทรศัพท์</label>
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="company">
          <div className="container">
            <label>ชื่อธุรกิจ / บริษัท / โรงเรียน</label>
            <input
              type="text"
              onChange={(e) => {
                setBusiness(e.target.value);
              }}
            />
          </div>
          <h5>ประเภทธุรกิจ</h5>
          {renderBusinessType()}
        </div>
        <div className="additional">
          <h2>คำถามเพิ่มเติม</h2>
          <textarea
            type="text"
            placeholder="สามารถดูคำถามที่พบบ่อยได้ บางส่วนใน FAQs"
            onChange={(e) => {
              setAdd(e.target.value);
            }}
          />
          {sendStatus == false ? (
            <button
              type="submit"
              className="send-btn"
              onClick={(e) => onSend(e)}
            >
              ส่ง
            </button>
          ) : (
            <button
              type="submit"
              className="send-btn"
              onClick={(e) => onSend(e)}
            >
              ส่งแล้ว
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default B2Bbooth;
