import React from 'react'
import './clients.css'

export default function Clients() {
    return (
        <div className='clientsContainer'>
            <div className='heads'>
                <h1></h1>
                <h1>Clients</h1>
                <h1></h1>
            </div>
            <div className='clientsList'>
                <div className='col'>
                    {/* <p className="listHead">BRAND IDENTITY</p>
                    <p>Corporate Identity</p>
                    <p>Brand Strategy</p>
                    <p>Logo Design</p>
                    <p>Motion Design</p> */}
                </div>
                <div className='col'>
                    <p className="listHead">WEB3</p>
                    <p>World War 0x</p>
                    <p>Curfluffle</p>
                    <p>Boomer Duck</p>
                    <p>Allegedly</p>
                </div>
                <div className='col'>
                    <p className="listHead">AI</p>
                    <p>Skycastle AI</p>
                    <p>Sweatbox AI</p>
                </div>
            </div>
        </div>
    )
}
