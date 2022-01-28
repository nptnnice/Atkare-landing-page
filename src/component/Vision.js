import React from 'react';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';

const Vision = () => {
  return (
    <div>
      <div className="vision-flex">
        <div className="container">
          <h2>VISION</h2>
          <h1>ยกระดับมาตรฐาน</h1>
          <p>
            เป็นผู้นำด้านการตรวจสอบแบบครบวงจรสำหรับธุรกิจ<br></br>
            ในทุกอุตสาหกรรมเพื่อสร้างมาตรฐานความปลอดภัยใหม่<br></br>
            สำหรับธุรกิจในยุค New-Normal
          </p>
        </div>
        <img src={vision} alt="vision"></img>
      </div>
      <div className="mission-flex">
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
      </div>
    </div>
  );
};

export default Vision;
