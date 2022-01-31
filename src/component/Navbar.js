import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = (props) => {
  return (
    <div className='nav-bar'>
        <div className='logo'>
            <img alt="logo" src={logo} />
        </div>
        <div>
            <ul className='menu-bar'>
                <li className='move-pls'>Certified ATK</li>
                <li className='move-pls'>Why Us</li>
                <li className='move-pls'>Operate ATK</li>
                <h2 className='shopee-btn move-pls'>Shopee</h2>
                <h2 className='contact-btn' onClick={()=>{
                    props.setPage('contact')
                }}>ติดต่อเรา</h2>
            </ul>
        </div>
    </div>
);
}

export default Navbar;