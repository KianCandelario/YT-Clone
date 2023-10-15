import { Link } from "react-router-dom";

interface videoProps {
    thumbnail: string;
    channelLogo: string;
    videoTitle: string;
    channelName: string;
    numberOfViews: string;
    dateUploaded: string;
}

function VideoCards( props : videoProps) {

    const { thumbnail, channelLogo, videoTitle, channelName, numberOfViews, dateUploaded  } = props;

    return(
        <>
            <Link 
                to={'/'} 
                className="h-64 w-full bg-almost-black mb-3"
            >
                <div className="w-full h-[67%] bg-[#A9A9A9]" style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    
                </div>
                <div className="h-[33%] flex justify-center items-center">
                    <div className="w-[90%] text-white flex items-center">
                        <div className="rounded-full h-10 w-10 mr-1" style={{
                            backgroundImage: `url(${channelLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}>
                        </div>
                        <div id='container' className="ml-2 w-[75%] mr-2">
                            <div className="text-sm font-bold mb-1">
                                <p>{videoTitle}</p>
                            </div>
                            <div className="flex text-[11px] text-silver">
                                <div className="">
                                    <p>{channelName}</p>
                                </div>
                                <span className="mx-1">•</span>
                                <div>
                                    <p>{numberOfViews}</p>
                                </div>
                                <span className="mx-1">•</span>
                                <div>
                                    <p>{dateUploaded}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>
                                <img className="h-6" src="../src/assets/icons/more-icon.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default VideoCards;