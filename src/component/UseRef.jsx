import { useRef, useState } from "react";


function UseRef() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    //play pouse
    const handleOnClick = () =>{
        let nextvar  = !isPlaying;
        setIsPlaying(nextvar);

        if(isPlaying){
            ref.current.play();
        }
        else{
            ref.current.pause();
        }
    }

   


  return (
    <div className="w-full max-w-xs flex flex-col justify-center align-middle">
        
     <div>
        <video  
         width="250"
         ref={ref}
         onPlay={() => setIsPlaying(true)}
         onPause={() => setIsPlaying(false)}
        
        >
           <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
        </video>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"onClick={handleOnClick}>
                    {isPlaying ? "pause" : "play"}
                </button>

                </div>

    </div>
  )
}

export default UseRef
