import React from "react";
import AnimaHead from "./AnimaHead";
import Leftbar from "../assets/images/leftbar.png";
import Rightbar from "../assets/images/rightbar.png";
import close from "../assets/images/close.png";

const Header = (props) => {
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
            เพื่อให้ธุรกิจของคุณดำเนินต่อไปได้แม้มีโรคระบาด
            บริษัทจัดจำหน่ายและให้บริการตรวจ ATK
            ถึงที่พร้อมผู้เชี่ยวชาญและให้บริการระบบ
            สำหรับบันทึกผลการตรวจแบบรายบุคคลเพื่อการใช้งานในระดับองค์กรให้ธุรกิจของคุณ
            มีทุกอย่างที่จำเป็นสำหรับการรับมือกับโรคระบาด เช่น COVID-19
          </p>
          <h2 className="contact-btn" onClick={()=>{
                    props.setPage('contact');
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                }}>
            ร่วมงานกับเรา
            <p className="arrow">{">"}</p>
          </h2>
          <div className="buy">
            <p>หรือสามารถสั่งซื้อได้ผ่านช่องทางการจำหน่ายออนไลน์ เช่น Shopee</p>
            <h2 className="buy-btn">
              ซื้อเลย
              <span>{">"}</span>
            </h2>
          </div>
        </div>
        <div>
          <img src={Rightbar} alt="left"></img>
        </div>
      </div>
      <div className="bottom-flex">
        <p>สำหรับลูกค้าของเราสามารถเช็คประวัติการตรวจ และตรวจใหม่ได้ที่นี่</p>
        <h3>
          เช็คประวัติการตรวจ ATKare <span>{">"}</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
