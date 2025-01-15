import { FaXTwitter } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export function Hero() {
  return (
    <div className="w-[90%] md:w-[70%] gap-8 md:gap-4 h-[80%] items-center relative md:justify-center flex flex-col text-black z-10">
      <h1 className="text-xl md:mt-0 mt-[50px] md:text-4xl text-center font-semibold">
        Create your custom X Event Image in Seconds!
      </h1>
      <p className="text-center text-xs">
        Share your excitement for the upcoming X Space event with a personalized
        flyer just by inputting your details, customize your design and download
        your unique image to share with your followers!
      </p>

      <ul className="grid grid-cols-2 gap-2 md:gap-4 text-xs">
        <li className="flex flex-row gap-2 items-center">
          <VscDebugBreakpointLog className="text-[#2d54f4]" />
          modern layouts
        </li>
        <li className="flex flex-row gap-2 items-center">
          <VscDebugBreakpointLog className="text-[#2d54f4]" />
          custombiazble
        </li>
        <li className="flex flex-row gap-2 items-center">
          <VscDebugBreakpointLog className="text-[#2d54f4]" />
          easy to configure
        </li>
        <li className="flex flex-row gap-2 items-center">
          <VscDebugBreakpointLog className="text-[#2d54f4]" />
          free
        </li>
      </ul>
      <Link
        to="/Form"
        className="bg-[#2d54f4] mt-[120px] md:mt-4 hover:bg-opacity-80 duration-150 transition-all shadow-md px-14 md:px-8 py-4 rounded-md text-white text-xs"
      >
        Create for free
      </Link>
      <span className="absolute left-3 md:left-[200px] rotate-12 shadow-xl md:bottom-12 bottom-8 p-3 rounded-lg bg-red-600 w-fit">
        <FaXTwitter size={20} />
      </span>
      <span
        className="absolute right-3 w-fit md:right-[200px] -rotate-12 shadow-xl bottom-2 md:bottom-20 p-3 rounded-lg 
      bg-blue-500"
      >
        <TfiTwitterAlt size={20} />
      </span>
    </div>
  );
}
