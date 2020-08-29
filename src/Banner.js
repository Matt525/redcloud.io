import React from 'react'
import "./navStyles.css";

export default function Banner() {

    const bannerStyles = { 
        backgroundSize: 'cover!important',           
    }
    const wrapper = { 
        overFlow: 'hidden!important',
        position: 'top',
    }
    return (
        <div className="landingBanner" style={wrapper}>
                <img  className="zoom" src={require("./RedCloudBanner.png")}  alt="" />
                {/* <h1 class="display-1 glitch banner-text"><strong style={{color: 'red'}}>Red</strong> Cloud <i class="fas fa-cloud"></i> Developers</h1>   */}
        </div>
    )
}
