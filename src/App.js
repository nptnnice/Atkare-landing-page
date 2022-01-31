import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Vision from './component/Vision';
import Certified from './component/Certified';
import Whyus from './component/Whyus';
import Operate from './component/Operate';
import Footer from './component/Footer';
import Contact from './component/Contact';
import '../src/style.css'
import { useState } from 'react';

const App = () => {

  const [page,setPage] = useState('home')

  if(page==='home')
  {
    return (
      <div>
          <Navbar setPage={setPage}/>
          <Header setPage={setPage}/>
          <Vision />
          <Certified />
          <Whyus />
          <Operate />
          <Footer setPage={setPage}/>
      </div>
  );
  }
  else if(page==='contact')
  {
    return(
      <div>
        <Navbar setPage={setPage}/>
        <Contact />
      </div>
    )
  }
}

export default App;
