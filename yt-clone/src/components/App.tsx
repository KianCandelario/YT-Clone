import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HorizontalScroller from './HorizontalScroller.tsx';
import Header from './Header.tsx';
import Feed from './Feed.tsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <>
      <div className='box-border w-screen h-screen bg-almost-black'>
        <BrowserRouter>
          <Header />
          <HorizontalScroller selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Routes>
            <Route path="/" element={ <Feed /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
