import React from 'react'
import './sectiontwo.css'
import HorizontalLine from "../../assets/horizontalline.png"

export default function SectionTwo() {
    return (
        <>
            <div className='sectiontTwoContainer'>
                <div className='boxes'>
                    <div className='box filled'>

                    </div>
                    <div className='box'>

                    </div>
                    <div className='box filled'>

                    </div>
                </div>
                <div className='textContainer'>
                    <div className='textRow'>
                        <span className="medium">WE&nbsp;</span>
                        <span className="medium">CREATE&nbsp;</span>
                        <img src={HorizontalLine} alt="horizontal_line" />
                        <span className='bold'>&</span>
                    </div>
                    <div className='textRow'>
                        <img src={HorizontalLine} alt="horizontal_line" />
                        <span className='broad'>BLOSSOM</span>
                    </div>
                    <div className='textRow'>
                        <span>COMPANIES&nbsp;</span>
                        <span>AND&nbsp;</span>
                        <span>CAMPAIGNS </span>
                    </div>
                    <div className='textRow'>
                        <span>THAT&nbsp;</span>
                        <span>DELIVER&nbsp;</span>
                        <span className="light">UNIQUE</span>
                    </div>
                    <div className='textRow'>
                        <span>DIGITAL&nbsp;</span>
                        <span>EXPERIENCES</span>
                    </div>
                </div>
            </div>
        </>
    )
}
