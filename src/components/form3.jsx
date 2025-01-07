import { RiArrowDropDownLine } from "react-icons/ri";
import Background from "./Bg";

export default function Form3({
  handlePrev,
  handleNext,
  event,
  setEvent,
  colorset,
  colorset2,
  handleSelectColor1,
  handleSelectColor2,
}) {
  const PreviewStyle = {
    background: `url(${event.bgImage})`,
  };
  console.log(event.bgImage);

  function handleSubmit(e) {
    e.preventDefault();
    handleNext();
  }

  return (
    <div
      // onSubmit={handleSubmit}
      className="w-full h-full relative px-4 gap-3 items-center flex flex-col font-mono"
    >
      <div className="flex flex-col items-start w-full text-sm">
        <div className="flex flex-col w-full gap-2 items-start">
          <div className="w-full flex flex-row justify-between">
            <div className="gap-2 rounded-md flex h-fit">
              <ColorPalette
                colorset={colorset}
                handleSelectColor1={handleSelectColor1}
                event={event}
              >
                <span
                  style={{ backgroundColor: `${event.color1}` }}
                  className="cursor-pointer font-mono rounded-md text-white shadow-lg py-1 px-6 w-fit"
                >
                  primary color
                </span>
                <ColorList
                  colorset={colorset}
                  handleSelectColor1={handleSelectColor1}
                  event={event}
                >
                  <ul className="grid p-2 grid-cols-5 gap-3">
                    {colorset.map((color, i) => (
                      <li
                        onClick={() => handleSelectColor1(color)}
                        key={i}
                        style={{ background: ` ${color}` }}
                        className="w-[20px] border-neutral-200 border rounded-full h-[20px] cursor-pointer"
                      ></li>
                    ))}
                  </ul>
                </ColorList>
              </ColorPalette>
            </div>
            <div className=" gap-4 rounded-md flex h-fit">
              <ColorPalette
                colorset2={colorset2}
                handleSelectColor2={handleSelectColor2}
                event={event}
              >
                <span
                  style={{ backgroundColor: `${event.color2}` }}
                  className=" cursor-pointer rounded-md text-white shadow-lg py-1 px-6 w-fit"
                >
                  secondary color
                </span>
                <ColorList
                  colorset2={colorset2}
                  handleSelectColor1={handleSelectColor1}
                  event={event}
                >
                  <ul className="grid p-2 grid-cols-5 gap-3">
                    {colorset2.map((color, i) => (
                      <li
                        onClick={() => handleSelectColor2(color)}
                        key={i}
                        style={{ background: ` ${color}` }}
                        className="w-[20px] border-neutral-200 border h-[20px] rounded-full cursor-pointer"
                      ></li>
                    ))}
                  </ul>
                </ColorList>
              </ColorPalette>
            </div>
          </div>
          <div className="w-full justify-center flex">
            <FontComponent event={event} PreviewStyle={PreviewStyle} />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between items-center">
        <Background event={event} setEvent={setEvent} />
        <FontSelection event={event} setEvent={setEvent} />
      </div>

      <button
        onClick={handlePrev}
        type="submit"
        className={`border-[#2d54f4] border w-fit text-white px-6 py-1 rounded hover:scale-95 durstion-150 transition-all text-xs absolute bottom-6 right-36`}
      >
        prev
      </button>

      <button
        onClick={handleNext}
        type="submit"
        className={`bg-[#2d54f4] text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 durstion-150 transition-all absolute bottom-6 right-6`}
      >
        next
      </button>
    </div>
  );
}

function ColorList({ children }) {
  return <div>{children}</div>;
}

function ColorPalette({ children }) {
  return <div>{children}</div>;
}

function FontSelection({ event, setEvent }) {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="font" className="text-neutral-200">
        font-style:
      </label>
      <select
        value={event.selectedFont}
        onChange={(e) => setEvent({ ...event, selectedFont: e.target.value })}
        id="font"
        className="w-[100px] rounded-md py-1 text-neutral-200 flex outline-none bg-transparent border-[#9000b3] border"
      >
        <option value="font-serif">font-serif</option>
        <option value="font-ariel">font-ariel</option>
        <option value="font-mono">font-mono</option>
      </select>
    </div>
  );
}

function FontComponent({ event, PreviewStyle }) {
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(45deg, ${Event.color1}) ,  ${Event.color2}), url(${event.bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[40%] justify-center items-center flex bg-white h-[150px] border-neutral-200 rounded-xl"
    >
      <p
        className={`${
          event.selectedFont === "font-mono" ? "font-mono flex" : "hidden"
        } text-white`}
      >
        You're so amazing🤩
      </p>
      <p
        className={`${
          event.selectedFont === "font-sans" ? "font-sans flex" : "hidden"
        } text-white`}
      >
        You're so amazing🤩
      </p>
      <p
        className={`${
          event.selectedFont === "font-serif" ? "font-serif" : "hidden"
        } text-white`}
      >
        You're so amazing🤩
      </p>
    </span>
  );
}
