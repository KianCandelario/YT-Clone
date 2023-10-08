function HorizontalScroller() {
    return (
        <>
            <div className="flex bg-almost-black">
                <div className="h-full pl-3 py-2 flex items-center justify-center font-roboto text-xs text-white">
                    <a className="p-1 w-8 flex items-end justify-center bg-gray-lines rounded-md" href="">
                        <img className="w-4" src="../src/assets/icons/discover-icon.svg" alt="" />
                    </a>
                </div>
                <div>
                    <img className="w-16 h-full" src="../src/assets/icons/line.svg" alt="" />
                </div>
                <div className="text-white font-roboto text-xs py-2 flex overflow-x-scroll">
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-16 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/code-icon.svg" alt="" />
                            <span>Coding</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-14 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/music-icon.svg" alt="" />
                            <span>Music</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-20 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/education-icon.svg" alt="" />
                            <span>Education</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-16 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/podcast-icon.svg" alt="" />
                            <span>Podcast</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-14 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/movie-icon.svg" alt="" />
                            <span>Movie</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-16 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/gaming-icon.svg" alt="" />
                            <span>Gaming</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-10 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/live-icon.svg" alt="" />
                            <span>Live</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-12 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/sport-icon.svg" alt="" />
                            <span>Sport</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-2 flex justify-center items-center rounded-md">
                        <a className="w-16 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/fashion-icon.svg" alt="" />
                            <span>Fashion</span>
                        </a>
                    </div>
                    <div className="bg-gray-lines py-1 px-2 mr-3 flex justify-center items-center rounded-md">
                        <a className="w-16 flex justify-center items-center" href="">
                            <img className="w-4 mr-2" src="../src/assets/icons/beauty-icon.svg" alt="" />
                            <span>Beauty</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HorizontalScroller;