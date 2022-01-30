import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
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
                <li className='shopee-btn move-pls'>Shopee</li>
                <li className='contact-btn'>ติดต่อเรา</li>
            </ul>
        </div>
    </div>
);
}

export default Navbar;