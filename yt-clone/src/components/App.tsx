import Header from './Header.tsx';
import HorizontalScroller from './HorizontalScroller.tsx';
function App() {

  return (
    <>
      <div className='box-border w-screen h-screen'>
        <div className='w-full h-[7%] border-b border-gray-lines'>
          <Header />
        </div>
        <div className='w-full h-[6%]'>
          <HorizontalScroller />
        </div>
      </div>
    </>
  )
}

export default App
