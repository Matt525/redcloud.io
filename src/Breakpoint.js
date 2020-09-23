import React from 'react'
import './Breakpoint.scss'


export default function Breakpoint() {

    

    return (
        <div className="wrapper">
                <div className="d-flex align-items-center flex-lg-row flex-sm-column flex-xs-column">
                        
                            <div className="p-2 ">
                                    <img className="coding_img" alt="codingImage" src={require('./ImageSource/breakpointPhoto.png')} />
                            </div>
                            <div className="p-2 quote">
                                    <h3>“Create. Not for the money. Not for the fame. Not for the recognition. But for the pure joy of creating something and sharing it.”</h3>
                            </div>
                </div>
        </div>
    )
}
