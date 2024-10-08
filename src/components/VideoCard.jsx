const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, title } = snippet;



    return (
        <div className="p-2 m-2 w-[275px]">
            <img className="rounded-lg" src={thumbnails.high.url} alt="thumbnail" />
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>


        </div>
    );
};

export default VideoCard;
