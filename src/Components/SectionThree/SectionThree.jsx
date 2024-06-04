import React from 'react'
import './sectionthree.css'
import ProgressIcon from "../../assets/progress_icon.png"

export default function SectionThree() {
    return (
        <div className='sectionThreeContainer'>
            <p className="boldText">OVER 15 YEARS OF EXPERIENCE IN THE DESIGN INDUSTY CRAFTING WEBSITES FOR CLIENTS OF ALL SIZES</p>
            <p className="secondaryText">We use metrics and performance benchmarking to ensure any work we conduct on your behalf is measurable and quantifiable.</p>
            <img src={ProgressIcon} alt="progress_icon" />
        </div>
    )
}
