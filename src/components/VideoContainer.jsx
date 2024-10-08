import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {
    const [youtubeVideo, setYoutubeVideo] = useState()
    useEffect(() => {
        getVideos();

    }, [])



    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const response = await data.json()
        console.log(response.items)
        setYoutubeVideo(response.items);
    }
    return (
        <div className="flex flex-wrap">
            {youtubeVideo?.map((video) => (
                <Link key={video.id} to={`/watchPage?v=` + video.id}><VideoCard info={video} /></Link>

            ))}
        </div>


    )
}

export default VideoContainer
