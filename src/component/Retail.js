import React, { useState, useEffect } from "react";
import contactbar from "../assets/images/contactbar.png";
import AnimaBarL from "./AnimaBarL";
import axios from "axios";

const Retail = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [add, setAdd] = useState("");
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

  return (
    <div>
      <div className="retail">
        <div className="container">
          <h1 className="head-contact">ร่วมงานกับเรา</h1>
          <div className="toggle-btn">
            <div className="move-btn"></div>
            <h2
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
            </h2>
            <h1
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
            </h1>
          </div>
          <form className="retail-grid">
            <h1>
              Retail<h6>ATK</h6>
            </h1>
            <p>
              จำหน่ายชุดตรวจ ATK ที่ได้มาตรฐาน<br></br>
              <span>จำหน่ายขั้นต่ำ 100 ชุด</span>
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
            <h2 className="purpose-topic">
              จุดประสงค์<br></br>การซื้อ ATK
            </h2>
            <textarea
              type="text"
              className="purpose-box"
              placeholder="ขายในร้านเภสัชกรของตนเอง (Optional)"
              onChange={(e) => {
                setPurpose(e.target.value);
              }}
            />
            <h2 className="add-topic">
              คำถามอื่น ๆ<br></br>เพิ่มเติม
            </h2>
            <div className="additional">
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
            </div>
          </form>
        </div>
        {/* <img src={contactbar} alt="contactbar" id="bar"></img> */}
        <AnimaBarL animation={false} />
      </div>
      <div className="retail-mobile">
        <h1>ร่วมงานกับเรา</h1>
        <div className="toggle-mobile2">
          <div className="move-btn"></div>
          <h2
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
          </h2>
          <h1
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
          </h1>
        </div>
      </div>
      <form className="Retailform-mobile">
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
            <label>เบอร์โทรศัพท์</label>
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
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
        </div>
        <div className="purpose-topic">
          <h2>จุดประสงค์การซื้อ ATK</h2>
          <textarea
            type="text"
            placeholder="ขายในร้านเภสัชกรของตนเอง (Optional)"
            onChange={(e) => {
              setPurpose(e.target.value);
            }}
          />
        </div>
        <div className="additional">
          <h2>คำถามอื่นเพิ่มเติม</h2>
          <textarea
            type="text"
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
        </div>
      </form>
    </div>
  );
};

export default Retail;
