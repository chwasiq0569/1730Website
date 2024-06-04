import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './homepage.css'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import WorksSection from '../../Components/WorksSection/WorksSection'
import SectionThree from '../../Components/SectionThree/SectionThree'
import Services from '../../Components/Services/Services'

export default function HomePage() {
    return (
        <div className='screenContainer'>
            <div className='innerContainer'>
                <Hero />
                <SectionTwo />
                <div className='sectionEnding'>
                    <div className='lineOne'></div>
                    <div className='lineTwo'></div>
                    <div className='lineThree'></div>
                    <div className='lineFour'></div>
                </div>
                <WorksSection />
                <SectionThree />
                <Services />
                <Services />
            </div>
        </div>
    )
}
