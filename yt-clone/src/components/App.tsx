import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.tsx';
import Feed from './Feed.tsx';
import VideoDetails from './VideoDetails.tsx';
import SearchFeed from './SearchFeed.tsx';

function App() {

  return (
    <>
      <div className='box-border w-screen h-screen bg-almost-black'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Feed /> } />
            <Route  path="/video/:id" element={<VideoDetails />} />
            <Route path="/search/:searchedWord" element={<SearchFeed />}  />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
