import React from 'react'
import './header.css'
import Logo from "../../assets/logo.png"
import XIcon from "../../assets/xicon.png"
import MediumIcon from "../../assets/mediumicon.png"

export default function Header() {
    return (
        <div className='headerContainer'>
            <div className='logo'>
                <img src={Logo} alt="1730_logo" />
            </div>
            <div className='navbar'>
                <ul className='nav_items'>
                    <li><span>work</span></li>
                    <li><span>service</span></li>
                    <li><span>work</span></li>
                </ul>
                <ul className='contact_details'>
                    <li>contact</li>
                    <li>hi@day1730.com</li>
                    <div class='social_icons_container'>
                        <img src={XIcon} alt="x_icon" />
                        <img src={MediumIcon} alt="medium_icon" />
                    </div>
                </ul>
            </div>
        </div>
    )
}
