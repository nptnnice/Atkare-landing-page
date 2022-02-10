import React from "react";
import vision from "../assets/images/vision.png";
import mission from "../assets/images/mission.png";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";

const Vision = () => {
  return (
    <div>
      <div className="vision-flex">
        <img src={bg1} alt="bg1" id="bg1" />
        <img src={vision} alt="vision"></img>
        <div className="container">
          <h2>VISION</h2>
          <h1>ยกระดับมาตรฐาน</h1>
          <p>
            เป็นผู้นำด้านการตรวจสอบแบบครบวงจรสำหรับธุรกิจ<br></br>
            ในทุกอุตสาหกรรมเพื่อสร้างมาตรฐานความปลอดภัยใหม่<br></br>
            สำหรับธุรกิจในยุค New-Normal
          </p>
        </div>
      </div>
      <div className="mission-flex">
        <img src={bg2} alt="bg2" id="bg2" />
        <img src={mission} alt="mission"></img>
        <div className="container">
          <h2>MISSION</h2>
          <h1>แบ่งเบาเพื่อขับเคลื่อน</h1>
          <p>
            ช่วยแบ่งเบาภาระผู้ประกอบการในการปฏิบัติตามนโยบาย<br></br>
            ด้านความปลอดภัยของรัฐเพื่อขับเคลื่อนภาคธุรกิจของไทย<br></br>
            ให้ดำเนินต่อไปได้ในยุคโรคระบาด
          </p>
        </div>
        <img src={bg3} alt="bg3" id="bg3" />
      </div>
    </div>
  );
};

export default Vision;
