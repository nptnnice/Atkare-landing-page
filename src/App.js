import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Vision from "./component/Vision";
import Certified from "./component/Certified";
import Whyus from "./component/Whyus";
import Operate from "./component/Operate";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import "../src/style.css";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [page, setPage] = useState("home");
  const certifiedRef = useRef(null);
  const whyusRef = useRef(null);
  const operateRef = useRef(null);
  

  const scrollToWhyus = () => {
    whyusRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scrollToCertified = () => {
    certifiedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  const scrollToOperate = () => {
    operateRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    console.log(certifiedRef);
  }, [certifiedRef]);

  useEffect(() => {
    console.log(whyusRef);
  }, [whyusRef]);

  useEffect(() => {
    console.log(operateRef);
  }, [operateRef]);

  if (page === "home") {
    return (
      <div>
        <Navbar
          setPage={setPage}
          scrollToCertified={scrollToCertified}
          scrollToWhyus={scrollToWhyus}
          scrollToOperate={scrollToOperate}
        />
        <Header setPage={setPage} />
        <Vision />
        <Certified certifiedRef={certifiedRef} />
        <Whyus whyusRef={whyusRef} />
        <Operate operateRef={operateRef} />
        <Footer setPage={setPage} />
      </div>
    );
  } else if (page === "contact") {
    return (
      <div>
        <Navbar setPage={setPage} />
        <Contact />
      </div>
    );
  }
  // else if(page==='retail')
  // {
  //   return(
  //     <div>
  //       <Navbar setPage={setPage}/>
  //       <Retail setPage={setPage}/>
  //     </div>
  //   )
  // }
};

export default App;
