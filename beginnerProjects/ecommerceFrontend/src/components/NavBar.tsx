import { FaUserAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="ml-[300px] top-0 min-w-[calc(100vw-300px)] py-4 min-h-16 flex items-center justify-center bg-white">
      <div className="flex flex-row items-center justify-around w-full">
        {/* Search Bar */}
        <span className="flex flex-row items-center gap-0">
          <input
            className="w-[450px] h-8 px-4 text-sm text-gray-800 bg-gray-100 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="h-8 px-4 text-white bg-gray-600 rounded-r-md hover:bg-gray-700 focus:ring focus:ring-gray-400">
            <BsSearch />
          </button>
        </span>

        {/* Icon Buttons */}
        <span className="flex flex-row items-center gap-3">
          <button className="p-3 text-lg text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
            <HiShoppingCart />
          </button>
          <button className="p-3 text-lg text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
            <MdFavorite />
          </button>
          <button className="p-3 text-lg text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
            <FaUserAlt />
          </button>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
