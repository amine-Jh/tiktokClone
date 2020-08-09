import React, { useState } from 'react'
import './SideBar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function SideBareVideo( {likes,messages,shares} ) {
    const [liked,setLike]=useState(false);
    
    return (
        <div className="sideBar" >
            <div className="sideBar_button"  > 
           {liked ?<FavoriteIcon  onClick={()=> setLike(false) } /> : <FavoriteBorderIcon onClick={()=> setLike(true) }  /> }
           <p  > {liked ? likes+1 : likes } </p>
             </div>
              <div className="sideBar_button" > 
           <ChatBubbleOutlineIcon />
           <p> {messages} </p>
             </div>
             <div className="sideBar_button" > 
           <ShareIcon />
           <p> {shares} </p>
             </div>
            
        </div>
    )
}

export default SideBareVideo
