type videoProps = {
    videos: Array<Object>;
}

function VideoCards(props: videoProps) {
    const { videos } = props

    console.log(videos)

    return(
        <>
            <div className="h-64 w-full bg-gray-lines mb-3">
                <div className="w-full h-[67%] bg-[#A9A9A9]">
                    <img src="" alt="" />
                </div>
                <div className="flex justify-center">
                    <div className="w-[90%] text-white">
                        <div className="text-sm font-bold mb-1 mt-3">
                            <p>{}</p>
                        </div>
                        <div className="text-xs text-silver">
                            <p>The Bests</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoCards;