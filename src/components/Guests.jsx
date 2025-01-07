import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import GuestForm from "./guestForm";
import { HiMiniXMark } from "react-icons/hi2";
import noProfile from "../assets/blank-profile-picture-973460_1280.png";

export default function GuestPage({
  guest,
  setGuest,
  handleAddGuest,
  handleIsOpen,
  handlePrev,
  handleNext,
  guestArray,
  setGuestArray,
}) {
  console.log(guestArray);

  function handleDeleteGuest(guestId) {
    setGuestArray(guestArray.filter((guest) => guest.id !== guestId));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleNext();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full relative flex flex-col md:p-4"
    >
      <div className="flex flex-col gap-5 justify-between items-start">
        <GuestForm
          guest={guest}
          setGuest={setGuest}
          handleAddGuest={handleAddGuest}
          handleIsOpen={handleIsOpen}
        />

        <GuestList
          guestArray={guestArray}
          setGuestArray={setGuestArray}
          handleDeleteGuest={handleDeleteGuest}
        />

        <button
          onClick={handlePrev}
          className={` border-[#2d54f4] text-xs border w-fit text-neutral-200 px-6 py-1 rounded hover:scale-95 durstion-150 transition-all absolute bottom-6 right-36`}
        >
          prev
        </button>
        <button
          type="submit"
          className="bg-[#2d54f4] text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 durstion-150 transition-all absolute shadow-lg bottom-6 right-6"
        >
          next
        </button>
      </div>
    </form>
  );
}

function GuestList({ guestArray, handleDeleteGuest }) {
  return (
    <ul className=" flex flex-row gap-3 items-center">
      {guestArray.length === 0 ? (
        <div className="flex w-full justify-center absolute items-center h-full">
          <p className="text-xs text-neutral-200 mt-[100px]">
            You have no guest speaker
          </p>
        </div>
      ) : (
        guestArray.map((guest, i) => (
          <li
            key={i}
            className="flex flex-col relative w-[60px] h-[60px] gap-1 cursor-pointer items-center rounded-full shadow-lg"
          >
            <img
              src={guest.guestImage ? guest.guestImage : noProfile}
              alt={guest.guestName}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <span
              onClick={() => handleDeleteGuest(guest.id)}
              className=" z-50  bg-red-500 absolute p-1 rounded-full text-white text-xs right-0 top-0"
            >
              <HiMiniXMark />
            </span>
            <p className="text-neutral-200 text-xs">{guest.guestName}</p>
          </li>
        ))
      )}
    </ul>
  );
}
