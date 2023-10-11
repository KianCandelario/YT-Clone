import { useState, useEffect } from 'react';
import { fetchAPI } from '../utilities/fetchAPI.ts';
import HorizontalScroller from './HorizontalScroller.tsx';
import VideoCards from "./VideoCards.tsx";

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [vids, setVids] = useState([]);

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${selectedCategory}`).then(
            (data) => setVids(data.items) 
        )
    }, [selectedCategory]);

    return (
        <div className='w-full h-[93%] overflow-y-scroll'>
            <div className="font-roboto flex flex-col items-center">
                <HorizontalScroller setSelectedCategory={setSelectedCategory} />
                <VideoCards videos={vids} />
            </div>
        </div>
        
    );
}

export default Feed;