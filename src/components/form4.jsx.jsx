import { RiArrowDropDownLine } from "react-icons/ri";
import Background from "./Bg";
import { useFormContext } from "react-hook-form";

export default function Form4({
  handlePrev,
  handleNext,
  event,
  setEvent,
  colorset,
  colorset2,
  handleSelectColor1,
  handleSelectColor2,
  onDownload,
  handlePreview,
}) {
  const PreviewStyle = {
    background: `url(${event.bgImage})`,
  };

  return (
    <div className="w-full bg-red-30 h-full relative px-4 gap-3 items-center flex flex-col">
      <div className="flex text-xs gap-7 flex-col md:flex-row w-full justify-between">
        <div className="w-full md:w-[50%] flex flex-col gap-4 h-full">
          <FontComponent event={event} PreviewStyle={PreviewStyle} />

          <div className="gap-2 flex-col justify-center items-center w-full md:w-[300px] rounded-md flex h-fit">
            <ColorPalette
              colorset={colorset}
              handleSelectColor1={handleSelectColor1}
              event={event}
            >
              <span className="cursor-pointer border-[#9000b3] border font-mono rounded-md text-white shadow-lg py-1 px-6 w-fit">
                primary color
              </span>
              <ColorList
                colorset={colorset}
                handleSelectColor1={handleSelectColor1}
                event={event}
              >
                <ul className="grid p-2 grid-cols-5 gap-2">
                  {colorset.map((color, i) => (
                    <li
                      onClick={() => handleSelectColor1(color)}
                      key={i}
                      style={{ background: ` ${color}` }}
                      className="w-[30px] border-neutral-200 border rounded-md h-[30px] cursor-pointer"
                    ></li>
                  ))}
                </ul>
              </ColorList>
            </ColorPalette>
          </div>
          <div className="gap-2 flex-col justify-center items-center w-[300px] rounded-md flex h-fit">
            <ColorPalette
              colorset2={colorset2}
              handleSelectColor2={handleSelectColor2}
              event={event}
            >
              <span className="border-[#9000b3] border cursor-pointer rounded-md text-white shadow-lg py-1 px-6 w-fit">
                secondary color
              </span>
              <ColorList
                colorset2={colorset2}
                handleSelectColor1={handleSelectColor1}
                event={event}
              >
                <ul className="grid p-2 grid-cols-5 gap-2">
                  {colorset2.map((color, i) => (
                    <li
                      onClick={() => handleSelectColor2(color)}
                      key={i}
                      style={{ background: ` ${color}` }}
                      className="w-[30px] border-neutral-200 border h-[30px] rounded-md cursor-pointer"
                    ></li>
                  ))}
                </ul>
              </ColorList>
            </ColorPalette>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[40%] h-[50%] justify-between items-center md:items-end">
          <Background event={event} setEvent={setEvent} />
        </div>
      </div>

      <div className="absolute right-[7px] bottom-[20px] flex flex-row gap-5">
        <button
          onClick={handlePrev}
          className="border text-xs border-[#2d54f4] w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          // onClick={handlePreview}
          className="bg-[#2d54f4] text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function ColorList({ children }) {
  return <div>{children}</div>;
}

function ColorPalette({ children }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {children}
    </div>
  );
}

function FontComponent({ event }) {
  return (
    <span
      style={{
        backgroundImage: `url(${event.bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full justify-center border border-[#9000b3] items-center flex bg-white h-[200px] rounded-xl relative"
    >
      <div
        style={{
          background: `linear-gradient(45deg, ${event.color1}, ${event.color2}`,
        }}
        className={`absolute ${
          event.bgImage ? "opacity-40" : "opacity-100"
        } w-full h-full top-0 left-0 bg-opacity-10 z-10 rounded-xl`}
      ></div>
      <p
        className="font-mono
         text-white z-50 font-bold"
      >
        Built by Stanlee
      </p>
    </span>
  );
}
