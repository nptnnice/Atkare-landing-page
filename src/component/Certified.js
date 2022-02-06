import React from 'react';
import certified from '../assets/images/certified.png';
import bg4 from '../assets/images/bg4.png';

const Certified = (props) => {
  return (
    <div>
      <div className="certified-head" ref={props.certifiedRef}>
        <img src={certified} alt="certified logo"></img>
        <h1>Our Certified ATK</h1>
      </div>
      <div className="ATK">
      <img src={bg4} alt="bg4" id="bg4" />
        <div className="container">
          <h2>HIPBiotech</h2><br></br>
          <p>
            ชุดตรวจ ATK โดย HIP Biotech ที่ผ่านการตรวจ<br></br>
            โดย คณะแพทยศาสตร์ โรงพยาบาลรามาธิบดี<br></br>
            และองค์การเภสัชกรรมเลือกใช้
          </p><br></br>
          <h3>View the Certification <span>{">"}</span></h3>
        </div>
        <div className="container">
          <h2>SingClean</h2><br></br>
          <p>
            ชุดตรวจ ATK โดย HIP Biotech ที่ผ่านการตรวจ<br></br>
            โดย คณะแพทยศาสตร์ โรงพยาบาลรามาธิบดี<br></br>
            และองค์การเภสัชกรรมเลือกใช้
          </p><br></br>
          <h3>View the Certification <span>{">"}</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Certified;
