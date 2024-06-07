import React, { useEffect, useRef } from 'react'
import './sectiontwo.css'
import HorizontalLine from "../../assets/horizontalline.png"
import { motion, useInView, useAnimation, Variant } from "framer-motion";

export default function SectionTwo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.75, once: true })


    useEffect(() => {
        console.log("IS IN VIEW")
    }, [isInView])
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
                <div ref={ref} className='textContainer'>
                    {
                        ["WE",
                            "CREATE",
                            "LINE",
                            "&",
                            "LINE",
                            "BLOSSOM",
                            "COMPANIES",
                            "AND",
                            "CAMPAIGNS",
                            "THAT",
                            "DELIVER",
                            "UNIQUE",
                            "DIGITAL",
                            "EXPERIENCES"].map((item, i) => (<>
                                <motion.span className={item == "&" ? "bold" : item == "BLOSSOM" ? "broad" : item == "UNIQUE" ? "light" : ""} initial={{ opacity: isInView ? 0 : 1 }} animate={{ opacity: isInView ? 1 : 0 }} transition={{ duration: 0.1, delay: i * 0.1 }}>{item == "LINE" ? <img src={HorizontalLine} alt="horizontal_line" /> : item}&nbsp;</motion.span>
                                {/* {item == "LINE" && <img src={HorizontalLine} alt="horizontal_line" />} */}
                                {i == 3 | i == 5 | i == 8 | i == 11 ? <br /> : ""}
                            </>
                            ))
                    }

                    {/* <span className="medium">WE&nbsp;</span>
                    <span className="medium">CREATE&nbsp;</span>
                    <img src={HorizontalLine} alt="horizontal_line" />
                    <span className='bold'>&</span>
                    <br />
                    <img src={HorizontalLine} alt="horizontal_line" />
                    <span className='broad'>BLOSSOM</span>
                    <br />
                    <span>COMPANIES&nbsp;</span>
                    <span>AND&nbsp;</span>
                    <span>CAMPAIGNS </span>
                    <br />
                    <span>THAT&nbsp;</span>
                    <span>DELIVER&nbsp;</span>
                    <span className="light">UNIQUE</span>
                    <br />
                    <span>DIGITAL&nbsp;</span>
                    <span>EXPERIENCES</span> */}
                    {/* <div className='textRow'>
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
                    </div> */}
                </div>
            </div>
        </>
    )
}
