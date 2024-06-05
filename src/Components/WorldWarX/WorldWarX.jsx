import React from 'react'
import './worldwarx.css'
import Pattren from "../../assets/pattren.png"
import WorldWar0XPuppet from "../../assets/worldwarxman.png"
import RightArrow from "../../assets/arrowright.png"
import GrandCover from "../../assets/worldwarxgrandcover.png"
import WorldWar0xText from "../../assets/WorldWar0XText.png"
import WorldWarXPoster from "../../assets/worldwarnextposter.png"
import WorldWarXSocialIcons from "../../assets/worldwar0xsocialmedia.png"

export default function WorldWarX() {
    return (
        <div className='worldwarxContainer'>
            <div className='cover'>
                <div className='leftSide'>
                    <img className="pattren" src={Pattren} alt='pattren' />
                    <h1>WORLD<br />WAR<br />0x</h1>
                    <div className='siteLink'>
                        <p>WORLDWAR0x.COM</p>
                        <img src={RightArrow} alt="arrow_right" />
                    </div>
                </div>
                <div className='rightSide'>
                    <img src={WorldWar0XPuppet} alt="WorldWar0XPuppet" />
                </div>
            </div>
            <img className='grandCover' src={GrandCover} alt="grand_cover" />
            <div className='gameDetails'>
                <div className='leftSide'>
                    <div className="upper">
                        <img src={WorldWar0xText} alt="LOW POLY WW3 FPS WITH VEHICLES & MODERN MAPS.PLAY FREE ON WINDOWS BROWSER IOS ANDROID STEAm WORLD WAR NEXT" />
                    </div>
                    <div className="lower">
                        <img src={WorldWarXSocialIcons} alt='download_platforms' />
                    </div>
                </div>
                <div className='rightSide'>
                    <img src={WorldWarXPoster} alt="wordlwarxposter" />
                </div>
            </div>
        </div>
    )
}
