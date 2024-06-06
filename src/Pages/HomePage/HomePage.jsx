import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './homepage.css'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import WorksSection from '../../Components/WorksSection/WorksSection'
import SectionThree from '../../Components/SectionThree/SectionThree'
import Services from '../../Components/Services/Services'
import Clients from '../../Components/Clients/Clients'
import WorldWarX from '../../Components/WorldWarX/WorldWarX'
import NFTSection from '../../Components/NFTSection/NFTSection'
import WhySection from '../../Components/WhySection/WhySection'
import WhoWeAreSection from '../../Components/WhoWeAreSection/WhoWeAreSection'
import Footer from '../../Components/Footer/Footer'

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
                <Clients />
                <WorldWarX />
                <NFTSection />
                <WhySection />
                <WhoWeAreSection />
                <Footer />
            </div>
        </div>
    )
}
