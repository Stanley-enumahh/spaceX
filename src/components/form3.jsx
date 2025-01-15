import { FormAddSpeaker } from "./formAddSpeaker";
import noProfile from "../assets/blank-profile-picture-973460_1280.png";
import { HiMiniXMark } from "react-icons/hi2";

export default function Form3({
  guest,
  guestArray,
  setGuestArray,
  setGuest,
  handlePrev,
  handleNext,
  handleAddGuest,
}) {
  const speakerCount = Math.abs(guestArray.length - 3);
  function handleDeleteGuest(guestId) {
    setGuestArray(guestArray.filter((guest) => guest.id !== guestId));
  }

  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="flex flex-col gap-[30px] justify-between items-start">
        <FormAddSpeaker
          guest={guest}
          guestArray={guestArray}
          setGuestArray={setGuestArray}
          setGuest={setGuest}
          handleAddGuest={handleAddGuest}
        />

        <GuestList
          guestArray={guestArray}
          setGuestArray={setGuestArray}
          handleDeleteGuest={handleDeleteGuest}
          speakerCount={speakerCount}
        />
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
          className="bg-[#2d54f4] text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function GuestList({
  guestArray,
  setGuestArray,
  handleDeleteGuest,
  speakerCount,
}) {
  if (guestArray.length === 0)
    return (
      <div className="w-full flex justify-center text-neutral-200">
        <p className="text-sm text-neutral-200">You have zero speakers</p>
      </div>
    );
  if (guestArray.length >= 1)
    return (
      <div className="flex flex-col mt-8 gap-[30px] ml-4 justify-center items-center">
        <ul className="flex flex-row w-fit text-white gap-4 ">
          {guestArray.map((speaker) => (
            <li
              key={speaker.id}
              className="flex flex-col relative w-fit h-fit gap-1 cursor-pointer   items-center rounded-full"
            >
              <img
                src={speaker.guestImage ? speaker.guestImage : noProfile}
                alt={speaker.guestName}
                className="w-[80px] h-[80px] border-[#9000b3] border rounded-full object-cover"
              />
              <p className="text-neutral-200 text-xs">{speaker.guestName}</p>
              <span
                onClick={() => handleDeleteGuest(speaker.id)}
                className=" z-50 bg-red-500 absolute p-1 rounded-full text-white text-xs right-0 top-0"
              >
                <HiMiniXMark />
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-neutral-400">
          {" "}
          {speakerCount >= 1
            ? `you can add up ${speakerCount} speakers`
            : "maximum reached"}
        </p>
      </div>
    );
}
