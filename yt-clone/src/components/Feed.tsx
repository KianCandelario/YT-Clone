import VideoCards from './VideoCards.tsx';

function Feed() {
    return (
        <div className='w-full h-[86%] overflow-y-scroll'>
            <div className="font-roboto flex flex-col items-center">
                <VideoCards 
                    thumbnail='../src/assets/thumbnail/coding/coding3.jpg'
                    channelLogo='../src/assets/channels/coding_logo1.png'
                    videoTitle='Web Development Tutorial'
                    channelName='CodeFlix'
                    numberOfViews='1.2M views'
                    dateUploaded='1 year ago'
                />
                <VideoCards
                    thumbnail='../src/assets/thumbnail/coding/coding1.jpg'
                    channelLogo='../src/assets/channels/coding_logo2.png'
                    videoTitle='How to Avoid Burnouts?'
                    channelName='Nick White'
                    numberOfViews='900K views'
                    dateUploaded='8 months ago'
                />
                <VideoCards
                    thumbnail='../src/assets/thumbnail/coding/coding2.jpg'
                    channelLogo='../src/assets/channels/coding_logo3.png'
                    videoTitle='The Importance of Organizing your Workplace'
                    channelName='TechWithTim'
                    numberOfViews='500K views'
                    dateUploaded='5 months ago'
                />
            </div>
        </div>
        
    );
}

export default Feed;