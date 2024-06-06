import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import PhoneIcon from "../../assets/phoneicon.png"
import EmailIcon from "../../assets/maleicon.png"
import ContactIcon from "../../assets/contacticon.png"

export default function Hero() {
    return (
        <div className='heroContainer'>
            <Header />
            <div className='heroText'>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <p className='firstLine'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>DAY </span>
                    <span>1, </span>
                    <span>7, </span>
                    <span>30 </span>
                    <strong>
                        <span>is </span>
                        <span>a </span>
                    </strong>
                </p>
                <strong>
                    <span>boutIQUE </span>
                    <span>CREATIVE </span>
                    <span>Agency </span>
                    <span>Specializing </span>
                    <span>in </span>
                    <span>branding, </span>
                    <span>GROWTH </span>
                    <span>& </span>
                    <span>web </span>
                    <span>design.</span>
                </strong>
            </div>
            <div className="cta_buttons">
                <div className="threeDBtn">
                    <div className="cta_button_back"><img src={PhoneIcon} alt="phone" /><span>book a call</span></div>
                    <div className="cta_button"><img src={PhoneIcon} alt="phone" /><span>book a call</span></div>
                </div>
                <div className="threeDBtn">
                    <div className="cta_button_back"><img src={EmailIcon} alt="phone" /><span>email</span></div>
                    <div className="cta_button"><img src={EmailIcon} alt="phone" /><span>email</span></div>
                </div>
                <div className="threeDBtn">
                    <div className="cta_button_back"><img src={ContactIcon} alt="phone" /><span>contact</span></div>
                    <div className="cta_button"><img src={ContactIcon} alt="phone" /><span>contact</span></div>
                </div>
            </div>
        </div>
    )
}
