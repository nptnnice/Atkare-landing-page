import React from 'react';
import AnimaHead from './AnimaHead';
import Leftbar from '../assets/images/leftbar.png'
import Rightbar from '../assets/images/rightbar.png'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <img src={Leftbar} alt="left"></img>
        </div>
        <div>
          <h1>ภูมิคุ้มกันโรคระบาดสำหรับ</h1>
          <AnimaHead />
          <p>
            เพื่อให้ธุรกิจของคุณดำเนินต่อไปได้แม้มีโรคระบาด<br></br>
            บริษัทจัดจำหน่ายและให้บริการตรวจ ATK ถึงที่<br></br>
            พร้อมผู้เชี่ยวชาญและให้บริการระบบสำหรับบันทึก<br></br>
            ผลการตรวจแบบรายบุคคลเพื่อการใช้งานในระดับองค์กร<br></br>
            ให้ธุรกิจของคุณมีทุกอย่างที่จำเป็นสำหรับการรับมือกับโรคระบาด<br></br>
            เช่น COVID-19
          </p>
          <h2 className="contact-btn">
            ติดต่อเรา
            <p className='arrow'>{">"}</p>
          </h2>
        </div>
        <div>
        <img src={Rightbar} alt="left"></img>
        </div>
      </div>
      <div className="bottom-flex">
        <p>สำหรับลูกค้าของเราสามารถเช็คประวัติการตรวจ และตรวจใหม่ได้ที่นี่</p>
        <h3>เช็คประวัติการตรวจ ATKare {">"}</h3>
      </div>
    </div>
  );
};

export default Header;
