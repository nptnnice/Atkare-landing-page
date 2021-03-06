import React from "react";
import AnimaHead from "./AnimaHead";
import Leftbar from "../assets/images/leftbar.png";
import Rightbar from "../assets/images/rightbar.png";
import close from "../assets/images/close.png";
import AnimaBarL from "./AnimaBarL";
import AnimaBarR from "./AnimaBarR";

const Header = (props) => {
  let url =
    "https://shopee.co.th/mynameispawares?categoryId=100001&itemId=10386127014";

  return (
    <div>
      <div className="header">
        <div className="anime-box">
          <AnimaBarL animation={true} />
          <AnimaBarR animation={true} />
        </div>
        {/* <div>
          <AnimaBarL />
        </div> */}
        <div>
          <h1>ภูมิคุ้มกันโรคระบาดสำหรับ</h1>
          <AnimaHead />
          <p>
            เพื่อให้ธุรกิจของคุณดำเนินต่อไปได้แม้มีโรคระบาด
            บริษัทจัดจำหน่ายและให้บริการตรวจ ATK ถึงที่
            พร้อมผู้เชี่ยวชาญและให้บริการระบบสำหรับบันทึกผลการตรวจแบบรายบุคคลเพื่อการใช้งานในระดับองค์กรให้ธุรกิจของคุณมีทุกอย่างที่จำเป็นสำหรับการรับมือกับโรคระบาด
            เช่น COVID-19
          </p>
          <h2
            className="contact-btn"
            onClick={() => {
              props.setPage("contact");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            ร่วมงานกับเรา
            <p className="arrow">{">"}</p>
          </h2>
          <div className="buy">
            <p>หรือสามารถสั่งซื้อได้ผ่านช่องทางการจำหน่ายออนไลน์ เช่น Shopee</p>
            <a href={url} className="buy-btn">
              ซื้อเลย
              <span>{">"}</span>
            </a>
          </div>
        </div>
        {/* <div>
          <AnimaBarR />
        </div> */}
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
