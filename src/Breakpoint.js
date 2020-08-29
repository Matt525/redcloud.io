import React from 'react'
import './Breakpoint.scss'

export default function Breakpoint() {

    const left = { 
        color: '#000',
        height: '400px',
        width: '50%',
        float: 'left',
        
        
    }
    const right = { 
        float: 'right',
        height: '400px',
        width: '50%',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    }

    const imageSize = { 
            height: '450px',
            width: '570px',
            margin: '4.75em 0 6em 10em',
            
            
    }

    const wrapper = { 
        width: '100%',
        

    }
    const quote = { 
        margin: '8em 10em 6em 0',
    }

    return (
        <div>
            
            <div className="wrapper" style={wrapper}>
                
                    <div style={left}>
                            <img className="profileImage" style={imageSize} alt="codingImage" src={require('./ImageSource/breakpointPhoto.png')} />
                    </div>
                    <div className="quote" style={right}>
                            <h3 style={quote}>“Create. Not for the money. Not for the fame. Not for the recognition. But for the pure joy of creating something and sharing it.”</h3>
                    </div>
            </div>
        </div>
    )
}
