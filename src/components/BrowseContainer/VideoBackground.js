import { useSelector } from "react-redux";
import useTrailerVideo from "../../utils/hooks/useTrailerVideo";

const VideoBackground = ({movieId}) => {

    useTrailerVideo(movieId);
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)

    return (
        <div className="w-screen">
            <iframe 
                className="w-screen aspect-video"
                frameBorder="0"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"} 
                title="YouTube video player"  
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoBackground;
