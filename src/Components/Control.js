import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBackward, faForward, faPause,faPlay  } from '@fortawesome/free-solid-svg-icons';
function Control(props) {
  return (
    <div className='control'>
        <button className='control_skipBtn' onClick={()=>props.skipSong()}>
        <FontAwesomeIcon icon={faBackward} />
        </button>

       <button className='control__playButton'
        onClick={()=>props.setIsPlaying(!props.isPlaying)}>
   <FontAwesomeIcon icon={props.isPlaying ? faPause: faPlay } />
       </button>
       
       <button className='control_skipBtn' onClick={()=> props.skipSong()} >
       <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  )
}

export default Control