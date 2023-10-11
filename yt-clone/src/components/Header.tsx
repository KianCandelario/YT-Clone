import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='w-full h-[7%] flex flex-col'>
            <div className='w-full h-full border-b border-gray-lines'>
                <header className="w-full h-full bg-almost-black flex items-center justify-center">
                    <div className="w-full h-full flex justify-between items-center py-1 px-2">
                        <Link to="/" className="flex items-center">
                            <img className="w-7" src="../src/assets/icons/YouTube-icon.svg" alt="YouTube Icon" />
                            <span className="text-white font-league-gothic tracking-normal">Premium</span>
                        </Link>
                        <div className="flex items-center w-[65%] h-7">
                            <input className="rounded-tl-xl rounded-bl-xl text-xs font-roboto p-2 w-[85%] h-full" type="text" placeholder="Search..." />
                            <button className="rounded-tr-xl rounded-br-xl h-full w-9 px-2 bg-white">
                                <img src="../src/assets/icons/search-icon.svg" alt="" />
                            </button>
                            <div className="h-full w-9 ml-2">
                                <a href="">
                                    <img src="../src/assets/icons/user-icon.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;