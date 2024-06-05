import React from 'react'
import './services.css'

export default function Services() {
    return (
        <div className='servicesContainer'>
            <h1>Services</h1>
            <div className='servicesList'>
                <div className='col'>
                    <p className="listHead">BRAND IDENTITY</p>
                    <p>Corporate Identity</p>
                    <p>Brand Strategy</p>
                    <p>Logo Design</p>
                    <p>Motion Design</p>
                </div>
                <div className='col'>
                    <p className="listHead">DIGITAL + WEB</p>
                    <p>User Experience</p>
                    <p>Web Development</p>
                    <p>Interaction Design</p>
                    <p>eCommerce</p>
                    <p>WebGL</p>
                    <p>ThreeJS (3D)</p>
                </div>
                <div className='col'>
                    <p className="listHead">GROWTH</p>
                    <p>Paid</p>
                    <p>Custom Landing Pages</p>
                    <p>Funnel Optimization</p>
                    <p>Acquisition Channel Development</p>
                </div>
            </div>
        </div>
    )
}
