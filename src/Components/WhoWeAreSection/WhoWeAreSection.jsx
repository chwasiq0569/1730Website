import React from 'react'
import './whowearesection.css'
import JonImage from '../../assets/Jon.png'
import BrandonImage from '../../assets/brandon.png'

export default function WhoWeAreSection() {
    return (
        <div className='whoWeAreSectionContainer'>
            <h1 className='WhoWeAreSectionHead'>
                <span>Who We Are</span>
            </h1>
            <p className='secondaryText'>
                We’re a team consisting of <span>creatives</span> and <span>growth marketers</span> with an expansive  network of <span>artists, designers, influencers, performance and growth marketers</span>. We’ve ideated and launched viral brands across a variety of industries and acquisition channels.
            </p>
            <div className='profiles'>
                <div className='profile'>
                    <img src={JonImage} alt="profile_pic" />
                    <p className="name">JON KRUZENISKI</p>
                    <p className="role">Managing Director</p>
                    <p className="details">Jon is a seasoned growth marketing professional who has spent his career scaling brands across a variety of industries and acquisition channels. His experience is expansive; holding growth positions with DeFi protocols Teller Finance and Charged Particles; leading design firm Skyrocket Digital; and numerous other top Silicon Valley, US and Canadian startups.</p>
                </div>
                <div className='profile'>
                    <img src={BrandonImage} alt="profile_pic" />
                    <p className="name">BRANDON KRUZENISKI</p>
                    <p className="role">Creative Director</p>
                    <p className="details">Brandon has over 15 years experience working with early stage startups; from creating viral brands to implementing high impact campaigns across a variety of verticals. He has a depth of experience across consumer, marketplace and cryptocurrency startups and is well versed in a variety of acquisition channels and creative strategies.</p>
                </div>
            </div>
        </div>
    )
}
