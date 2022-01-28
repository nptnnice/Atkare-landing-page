import React from "react";
import man from "../assets/images/man.png";
import woman from "../assets/images/woman.png";

const Operate = () => {
  return (
    <div className="operate">
      <h1>How to operate ATKare</h1>
      <div className="person-flex">
        <div className="container">
          <img src={man} alt="man"></img>
          <h3>สำหรับ</h3>
          <h2>เจ้าของธุรกิจ</h2>
        </div>
        <div className="container">
          <img src={woman} alt="man"></img>
          <h3>สำหรับ</h3>
          <h2>ผู้เข้ารับการตรวจ</h2>
        </div>
      </div>
      <div className="operate-flex">
        <div className="container1">
          <div className="list-box1">
            <h2 className="num">1</h2>
            <p>เลือกเวลารับบริการการตรวจ</p>
          </div>
          <div className="list-box2">
            <h2 className="num">2</h2>
            <p>เราจัดการทุกอย่างให้คุณ</p>
          </div>
          <div className="list-box3">
            <h2 className="num">3</h2>
            <p>ดูผลการตรวจล่าสุดและย้อนหลังได้ทุกเมื่อ</p>
          </div>
        </div>
        <div className="container2">
          <div className="list-box4">
            <h2 className="num">1</h2>
            <p>สแกน QR Code เพื่อเริ่มรับการตรวจ</p>
          </div>
          <div className="list-box5">
            <h2 className="num">2</h2>
            <p>รับการตรวจโดยทีมผู้เชี่ยวชาญ</p>
          </div>
          <div className="list-box6">
            <h2 className="num">3</h2>
            <p>เข้าถึงประวัติผลการตรวจได้ทุกเมื่อ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operate;
