import React from "react";
import hightraffic from "../assets/images/hightraffic.png";
import record from "../assets/images/record.png";
import bg5 from '../assets/images/bg5.png';

const Whyus = (props) => {
  return (
    <div className="whyus" ref={props.whyusRef}>
      <img src={bg5} alt="bg5" id="bg5" />
      <h1>Why Us ?</h1>
      <div className="whyus-flex">
        <div className="container1">
          <img src={hightraffic} alt="high traffic" id='hightraffic'></img>
          <div>
            <h4>Our system is</h4>
            <br></br>
            <h3>Optimized for</h3>
            <h2>High Traffic</h2>
            <br></br>
            <p>
              ระบบและกระบวนการตรวจ
              ที่ถูกออกแบบมาเพื่อรับมือกับ
              คนจำนวนมากในเวลาอันสั้นโดยเฉพาะ
            </p>
          </div>
        </div>
        <div className="container2">
          <img src={record} alt="record" id='record'></img>
          <div className='record-flex'>
            <h4>Our system allows</h4>
            <br></br>
            <h3>Test Results</h3>
            <h2>Record-Keeping</h2>
            <br></br>
            <p>
              ฐานข้อมูลที่เก็บผลการตรวจล่าสุด
              และย้อนหลังที่เข้าดูได้ตลอดเวลา
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
