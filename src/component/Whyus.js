import React from "react";
import hightraffic from "../assets/images/hightraffic.png";
import record from "../assets/images/record.png";

const Whyus = () => {
  return (
    <div className="whyus">
      <h1>Why Us ?</h1>
      <div className="whyus-flex">
        <div className="container">
          <img src={hightraffic} alt="high traffic"></img>
          <h4>Our system is</h4><br></br>
          <h3>Optimized for</h3>
          <h2>High Traffic</h2><br></br>
          <p>
            ระบบและกระบวนการตรวจ<br></br>
            ที่ถูกออกแบบมาเพื่อรับมือกับ<br></br>
            คนจำนวนมากในเวลาอันสั้นโดยเฉพาะ
          </p>
        </div>
        <div className="container">
          <img src={record} alt="high traffic"></img>
          <h4>Our system allows</h4><br></br>
          <h3>Test Results</h3>
          <h2>Record-Keeping</h2><br></br>
          <p>
            ฐานข้อมูลที่เก็บผลการตรวจล่าสุด<br></br>
            และย้อนหลังที่เข้าดูได้ตลอดเวลา
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
