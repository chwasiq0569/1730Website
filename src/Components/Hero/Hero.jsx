import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import PhoneIcon from "../../assets/phoneicon.png"
import EmailIcon from "../../assets/maleicon.png"
import ContactIcon from "../../assets/contacticon.png"
import { motion, useAnimation } from "framer-motion";

const defaultAnimations = {
    hidden: {
        opacity: 0,
        // y: 20,
    },
    visible: {
        opacity: 1,
        // y: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export default function Hero() {
    const controls = useAnimation();
    const defaultAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };
    return (
        <div className='heroContainer'>
            <Header />
            <div className='heroText'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {
                    "DAY 1, 7, 30 IS A BOUTIQUE CREATIVE AGENCY SPECIALIZING IN BRANDING, GROWTH & WEB DESIGN".split(" ").map((item, i) => (
                        <motion.span key={i} className={i >= 3 ? "strongText" : ""} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: i * 0.1 }}>
                            {item} &nbsp;
                        </motion.span>
                    ))
                }
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
