import React from 'react';
import icon from '../assets/images/icon.png';
import email from '../assets/images/email.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-box">
        <h1>
          ปกป้อง<br></br>
          ธุรกิจของคุณ<br></br>
          จาก COVID-19
        </h1>
        <h2>
          ATKare พร้อมจัดหาชุดตรวจ ATK<br></br>
          ที่ได้มาตรฐาน เรามีทีมผู้เชี่ยวชาญ<br></br>
          เพื่อการตรวจนอกสถานที่ และ<br></br>
          ระบบจัดเก็บข้อมูลเพื่อบันทึกประวัติ<br></br>
          การตรวจรายบุคคลสำหรับทั้งองค์กร
        </h2>
      </div>
      <div className="contact-btn">
        <h3>ติดต่อเรา</h3>
        <p className="arrow">{">"}</p>
      </div>
      <img src={icon} alt='icon' id='icon'></img>
      <div className='email-box'>
        <img src={email} alt='email' id='email'></img>
        <h4>ATKareTH@gmail.com</h4>
      </div>
      <p>© 2022 Pinpoint Inter Group CO., LTD. All rights reserved.</p>
    </div>
  );
};

export default Footer;
