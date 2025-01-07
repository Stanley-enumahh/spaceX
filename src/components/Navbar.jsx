import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../pages/auth";
export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="w-full flex py-4 justify-center fixed top-0">
      <nav className="flex flex-row text-white justify-between items-center w-[90%] md:w-[80%] shadow-md md:px-5 py-3 rounded-md">
        <h1 className="font-bold text-xl">TwiVent</h1>
        <ul className="flex flex-row gap-8 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">FAQs</li>
        </ul>

        <div className="flex flex-row gap-3 items-center justify-center">
          <Link
            to="/Form"
            className="bg-[#2d54f4] md:flex hidden hover:bg-opacity-80 duration-150 transition-all shadow-md px-8 py-3 rounded-md text-white text-xs"
          >
            Get started
          </Link>
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/Login");
              });
            }}
            className="bg-red-500 md:flex hidden hover:bg-opacity-80 duration-150 transition-all shadow-md px-4 py-3 rounded-md text-white text-xs"
          >
            Sign out
          </button>
        </div>
      </nav>
    </div>
  );
}
