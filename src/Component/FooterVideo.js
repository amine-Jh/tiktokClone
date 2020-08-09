import React from 'react'

import './footerVideo.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function FooterVideo({chanel,description,song}) {
    return (
        <div className="Footer" >
            <div className="Footer_text" > 
            <h2> @ {chanel} </h2>
            <p> {description} </p><MusicNoteIcon  className="icon" />
            <div className="videoTicker" >  
            
                 <Ticker mode="smooth"  >
                { ({index})=> 
                <p> {song} </p>

                }

            </Ticker> 
            
            
            </div>
            
           
            
            
           
            </div>
            <img src='https://static.thenounproject.com/png/934821-200.png'  
            alt="img" className="videoFooter__record" />
        </div>
    )
}

export default FooterVideo
