import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex py-4 justify-center z-50 fixed top-0">
      <nav className="flex flex-row md:bg-transparent justify-between top-0 items-center w-[90%] md:w-[80%] md:shadow-md md:px-5 py-3 rounded-md">
        <h1 className="text-black text-lg md:text-2xl font-bold">SpaceX</h1>
        <div className="flex flex-row gap-3 items-center justify-center">
          <Link
            to="/Form"
            className="bg-[#2d54f4] md:flex hidden hover:bg-opacity-80 duration-150 transition-all shadow-md px-8 py-3 rounded-md text-white text-xs"
          >
            Create for free
          </Link>
        </div>
      </nav>
    </div>
  );
}
