import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Vision from './component/Vision';
import Certified from './component/Certified';
import Whyus from './component/Whyus';
import Operate from './component/Operate';
import Footer from './component/Footer';
import B2Bbooth from './component/B2Bbooth';
import Retail from './component/Retail';
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
  else if(page==='B2Bbooth')
  {
    return(
      <div>
        <Navbar setPage={setPage}/>
        <B2Bbooth setPage={setPage}/>
      </div>
    )
  }
  else if(page==='retail')
  {
    return(
      <div>
        <Navbar setPage={setPage}/>
        <Retail setPage={setPage}/>
      </div>
    )
  }
}

export default App;
