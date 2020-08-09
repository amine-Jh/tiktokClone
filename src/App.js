import React ,{useState,useEffect} from 'react';
import Video from './Component/Video'
import db from './firebase'
import "./App.css"


function App() {
const [videos,setVideos] =useState([]);

useEffect(() => {
  db.collection("videos").onSnapshot((snapshot) =>
    setVideos(snapshot.docs.map((doc) => doc.data()))
  );
}, []);


  return ( 
    <div className="app" >
      <div className='app_video'  > 
      {videos.map(
          ({ url, chanel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              chanel={chanel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
   </div>
    </div>
  

  );
}

export default App;
