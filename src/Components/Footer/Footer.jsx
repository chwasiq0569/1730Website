import React from 'react'
import './footer.css'
import FooterIcon from '../../assets/footerIcon.png'
import RightArrow from '../../assets/arrowright.png'

export default function Footer() {
    return (
        <div className='footerContainer'>
            <div className='upperFooter'>
                <li className='footerItem'>
                    WORK
                </li>
                <li className='footerItem'>
                    SERVICES
                </li>
                <li className='footerItem'>
                    ABOUT
                </li>
            </div>
            <div className='lowerFooter'>
                <img className='leftImage' src={FooterIcon} alt="footer_icon" />
                <div className='rightContent'>
                    <h1 className='footerHead'>Get in touch.</h1>
                    <div className='footerLinks'>
                        <div className='left'>
                            <li className='linkItem'>
                                <p>BOOK A CALL</p>
                                <img src={RightArrow} alt="right_arrow" />
                            </li>
                            <li className='linkItem'>
                                <p>CONTACT</p>
                                <img src={RightArrow} alt="right_arrow" />
                            </li>
                            <li className='linkItem'>
                                <p>EMAIL</p>
                                <img src={RightArrow} alt="right_arrow" />
                            </li>
                        </div>
                        <div className='right'>
                            <li className='linkItem'>
                                <p>TWITTER</p>
                                <img src={RightArrow} alt="right_arrow" />
                            </li>
                            <li className='linkItem'>
                                <p>MEDIUM</p>
                                <img src={RightArrow} alt="right_arrow" />
                            </li>
                            <li className='linkItem'>
                                <p>LINKEDIN</p>
                                <img src={RightArrow} alt="right_arrow" />
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <p className='allRightsReserved'>© ALL RIGHTS RESERVED</p>
        </div>
    )
}
