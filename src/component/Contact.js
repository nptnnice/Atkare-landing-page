import React from "react";
import B2Bbooth from './B2Bbooth';
import Retail from './Retail';
import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState("B2Bbooth");

  if (form == 'B2Bbooth') {
      return (
          <B2Bbooth setForm={setForm}/>
      );
  }
  else if (form == 'retail') {
      return (
          <Retail setForm={setForm}/>
      );
  }
};

export default Contact;
