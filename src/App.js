
import './App.css';
import Player from './Components/Player';
import { useEffect, useState } from 'react';


function App() {

  const [songs] = useState([
    {
      title:"Titliyaan",
      artist: "Hardy Sandhu",
      img_src: "./images/hardy.jpg",
      src:"./songs/song-1.mp3"

    },
    {
      title:"Falak Tu",
      artist: "Suchetha Basrur",
      img_src: "./images/kgf.jpg",
      src:"./songs/song-2.mp3"
    },
    {
      title:"Kamaal Kari Jaane O",
      artist: "Happy Raikoti",
      img_src: "./images/kmaal.jpg",
      src:"./songs/song-4.mp3"
    },
    {
      title:"Laagi Lagan Shankara",
      artist: "Hansraj Raghuwanshi",
      img_src: "./images/lagan.jpg",
      src:"./songs/song-3.mp3"
    },
    {
      title:"Raat Di Gedi",
      artist: "Diljit Dosanjh",
      img_src: "./images/dil.jpeg",
      src:"./songs/song-5.mp3"
    },

  ])
  
  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex,setNextSongIndex]=useState(0);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length -1){
        return 0      
      }
      else{
        return currentSongIndex +1
      }
    })
  },[currentSongIndex,songs.length])


  return (
    <div className="App">
     <Player 
     currentSongIndex = {currentSongIndex}
     setCurrentSongIndex= {setCurrentSongIndex}
     nextSongIndex = {nextSongIndex}
     songs = {songs}
     />
    </div>
  );
}

export default App;
