import React from 'react'
import './whysection.css'
import ProgressChart from "../../assets/progresschart.png"

export default function WhySection() {
    return (
        <div className='whySectionContainer'>
            <h1 className="whySectionHead">
                <span>Why Day 1, 7, 30?</span>
            </h1>
            <div className='whySectionContent'>
                <div className='leftSide'>
                    <p>Day 1, 7, 30 is named after THE retention metric for apps: the users who return to an app on Day 1, Day 7 and Day 30. We chose this name to represent our studio because <span>underpinning our dedication to crafting beautiful creative is an obsessive focus on growing and retaining customer bases</span> for startups, small businesses and enterprises.</p>
                </div>
                <div className='rightSide'>
                    <img src={ProgressChart} alt="progress_chart" />
                </div>
            </div>
        </div>
    )
}
