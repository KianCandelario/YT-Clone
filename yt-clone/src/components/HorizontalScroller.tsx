import { Link } from "react-router-dom";
import { categories } from "../utilities/categories.ts";

interface Category {
  setSelectedCategory: any
}

function HorizontalScroller(props: Category) {
  const { setSelectedCategory } = props;

  return (
    <>
      <div className="w-full mb-[0.15rem]">
        <div className="flex bg-almost-black">
          <div className="h-full pl-3 py-2 flex items-center justify-center font-roboto text-xs text-white">
            <Link
              to="/"
              className="p-1 w-8 flex items-end justify-center bg-gray-lines rounded-md"
            >
              <img
                className="w-4"
                src="../src/assets/nav-icons/discover-icon.svg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <img
              className="w-16 h-full"
              src="../src/assets/icons/line.svg"
              alt=""
            />
          </div>
          <div className="text-white font-roboto text-xs py-2 flex overflow-x-scroll">
                {
                    categories.map((category) => (
                        <div key={category.name} className={`${category.name === "Beauty" ? "mr-3" : "mr-2"} bg-gray-lines py-1 px-2 flex justify-center items-center rounded-md`}>
                            <button
                                onClick={() => setSelectedCategory(category.name)}
                                className={`${
                                  category.name === "Live" ? "w-[3.0rem]" 
                                : category.name === "Sport" ? "w-[3.5rem]" 
                                : category.name === "Music" ? "w-[3.7rem]"
                                : category.name === "Gaming" ? "w-16"
                                : category.name === "Movie" ? "w-16"
                                : category.name === "Coding" ? "w-[4.2rem]"
                                : category.name === "Podcast" ? "w-[4.5rem]"
                                : category.name === "Movie" ? "w-[4.5rem]"
                                : category.name === "Fashion" ? "w-[4.5rem]"
                                : category.name === "Beauty" ? "w-16" 
                                :  "w-20"} flex justify-center items-center`
                                }
                            >
                                <img className="w-4 mr-2" src={category.path} alt=""/>
                                <span>{`${category.name}`}</span>
                            </button>
                        </div>
                    ))
                } 
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalScroller;
