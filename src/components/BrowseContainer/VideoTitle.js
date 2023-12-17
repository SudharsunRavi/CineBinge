const VideoTitle = ({title, description}) => {
    return (
        <div className="pt-[350px] absolute text-white bg-gradient-to-r from-black aspect-video w-screen">
            <h1 className="px-20 text-5xl font-bold">{title}</h1>
            <p className="px-20 w-2/4 pt-3 text-lg">{description}</p>
            <div>
                <button className="bg-white ml-20 mt-4 p-3 px-7 text-lg rounded-lg text-black hover:bg-opacity-80 ">Play</button>
                <button className="bg-gray-500 ml-4 mt-4 p-3 text-lg rounded-lg text-white ">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
