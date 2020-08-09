import React, { useRef, useState } from 'react'
import FooterVideo from "./FooterVideo"
import SideBareVideo from './SideBareVideo'
import "./Video.css"

function Video( {url,chanel,description,song,likes,shares,messages}  ) {
    const [play,setPlay]=useState();
    const videoRef =useRef(null);
    const playVideo =()=>{
        if(!play)
        {videoRef.current.play();
        setPlay(true)}
        else{ videoRef.current.pause();
            setPlay(false);

        }
    }
    return (
        <div  className="video" >
        
        <video  onClick={playVideo} ref={videoRef} loop  className='video_player' 
        src={url} > 
        
        </video>
        <FooterVideo song={song}  chanel={chanel} description="#dance #musique life summer" />
        <SideBareVideo  shares={shares} messages={messages} likes={likes} />
        
        </div>
    )
}

export default Video
