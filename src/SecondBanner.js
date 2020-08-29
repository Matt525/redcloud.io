import React from 'react'
import "./navStyles.css";
import secondBanner from './lastBanner.png'
export default function SecondBanner() {

    const bannerStyles = { 
        backgroundSize: 'cover!important',           
    }

    return (
        <div>
                <img  className="static" src={secondBanner}  alt="" />
                {/* <h1 class="display-1 glitch banner-text"><strong style={{color: 'red'}}>Red</strong> Cloud <i class="fas fa-cloud"></i> Developers</h1>   */}
        </div>
    )
}
