import VideoCards from "./VideoCards.tsx";
function VerticalScroller() {
    return (
            <div className="font-roboto flex flex-col items-center">
                <VideoCards />
                <VideoCards />
                <VideoCards />
            </div>
        
    );
}

export default VerticalScroller;