import Header from './Header.tsx';
import HorizontalScroller from './HorizontalScroller.tsx';
import VerticalScroller from './VerticalScroller.tsx';
function App() {

  return (
    <>
      <div className='box-border w-screen h-screen bg-almost-black'>
        <div className='w-full h-[7%] border-b border-gray-lines'>
          <Header />
        </div>
        <div className='w-full h-[6%] mb-[0.10rem]'>
          <HorizontalScroller />
        </div>
        <div className='w-full h-[87%] overflow-y-scroll'>
          <VerticalScroller />
        </div>
      </div>
    </>
  )
}

export default App
