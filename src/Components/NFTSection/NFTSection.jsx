import React from 'react'
import './nftsection.css'
import BDuckCoin from "../../assets/BDuckCoin.png"
import BDuckCoinImg from "../../assets/BDuckCoinImg.png"
import WorldWar0XCoinImg from "../../assets/WorldWar0XCoinImg.png"
import WorldWar0XCoin from "../../assets/WorldWar0XCoin.png"
import SoldiersCover from "../../assets/soldierscover.png"
import BDuckCoinCover from '../../assets/BDuckCoinCover.png'
import RightArrow from "../../assets/arrowright.png"
import CurfluffleLogo from "../../assets/CurfluffleLogo2.png"

export default function NFTSection() {
    return (
        <div className='nftSectionContainer'>
            <p className="nftSectionHead">EARN & BET <span>&nbsp;&nbsp;WITH A SOLDIER NFT</span></p>
            <div className='coins'>
                <img src={BDuckCoin} alt="BDuck_Coin" />
                <img src={BDuckCoinImg} alt="BDuck_Coin_Img" />
                <img src={WorldWar0XCoinImg} alt="WorldWar0XCoinImg" />
                <img src={WorldWar0XCoin} alt="WorldWar0XCoin" />
            </div>
            <img className='soldiersCover' src={SoldiersCover} alt='soldiers_cover' />
            <div className='bDuckCoinDetails'>
                <div className='leftSide'>
                    <img src={BDuckCoinCover} alt='BDuckCoinCover' />
                </div>
                <div className='rightSide'>
                    <p>BOOMER <br />DUCK</p>
                    <div className='coinLink'>
                        <p>MEME COIN</p>
                        <img src={RightArrow} alt='rightArrow' />
                    </div>
                </div>
            </div>
            <div className='curfluffleSection'>
                <img className='curfflufle_logo_down' src={CurfluffleLogo} alt="curfluffle_Icon" />
                <div className='logoAndLink'>
                    <p>CURFLUFFLE</p>
                    <div className='curfluffleLink'>
                        <p>GAMING STUDIO</p>
                        <img src={RightArrow} alt='rightArrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}
