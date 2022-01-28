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
                <li>Certified ATK</li>
                <li>Why Us</li>
                <li>Operate ATK</li>
                <li className='contact-btn'>ติดต่อเรา</li>
            </ul>
        </div>
    </div>
);
}

export default Navbar;