import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Vision from './component/Vision';
import Certified from './component/Certified';
import Whyus from './component/Whyus';
import Operate from './component/Operate';
import '../src/style.css'


const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Vision />
        <Certified />
        <Whyus />
        <Operate />
    </div>
);
}

export default App;
