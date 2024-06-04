import React from 'react'
import './workssection.css'
import WorldWar0x from "../../assets/ww0xIcon-WhiteonBlack3.png"
import BoomerDuck from "../../assets/boomerduckmemecoin.png"
import SkyCastleAI from "../../assets/skycastle.png"
import SweatBoxAI from "../../assets/sweatboxAI.png"
import Curfluffle from "../../assets/CurfluffleLogo2.png"
import Allegedly from "../../assets/allegedly.png"
import ArrowRight from "../../assets/arrowright.png"

export default function WorksSection() {
    return (
        <div className="worksSectionContainer">
            <div className='sectionHeader'>
                <p>Selected Works</p>
            </div>
            <br />
            <div className='works'>
                <div className='work'>
                    <div className='left'>
                        <img src={WorldWar0x} alt="work_cover" />
                    </div>
                    <div className='right'>
                        <p className='workNo'>01</p>
                        <div className='tags'>
                            <p>LOGO</p>
                            <p>BRANDING</p>
                            <p>WEBSITE</p>
                        </div>
                        <div className="title">
                            <p>World War 0x</p>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className='left'>
                        <img src={Curfluffle} alt="work_cover" />
                    </div>
                    <div className='right'>
                        <p className='workNo'>01</p>
                        <div className='tags'>
                            <p>LOGO</p>
                            <p>BRANDING</p>
                            <p>WEBSITE</p>
                        </div>
                        <div className="title">
                            <p>World War 0x</p>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className='left'>
                        <img src={SkyCastleAI} alt="work_cover" />
                    </div>
                    <div className='right'>
                        <p className='workNo'>01</p>
                        <div className='tags'>
                            <p>LOGO</p>
                            <p>BRANDING</p>
                            <p>WEBSITE</p>
                        </div>
                        <div className="title">
                            <p>World War 0x</p>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className='left'>
                        <img src={BoomerDuck} alt="work_cover" />
                    </div>
                    <div className='right'>
                        <p className='workNo'>01</p>
                        <div className='tags'>
                            <p>LOGO</p>
                            <p>BRANDING</p>
                            <p>WEBSITE</p>
                        </div>
                        <div className="title">
                            <p>Boomer Duck Meme Coin</p>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className='left'>
                        <img src={SweatBoxAI} alt="work_cover" />
                    </div>
                    <div className='right'>
                        <p className='workNo'>01</p>
                        <div className='tags'>
                            <p>LOGO</p>
                            <p>BRANDING</p>
                            <p>WEBSITE</p>
                        </div>
                        <div className="title">
                            <p>SweatBoxAI</p>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className='left'>
                        <img src={Allegedly} alt="work_cover" />
                    </div>
                    <div className='right'>
                        <p className='workNo'>01</p>
                        <div className='tags'>
                            <p>LOGO</p>
                            <p>BRANDING</p>
                            <p>WEBSITE</p>
                        </div>
                        <div className="title">
                            <p>Allegedly</p>
                            <img src={ArrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
