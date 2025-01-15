import { MdOutlineDeleteForever } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function FormAddSpeaker({ guest, setGuest, handleAddGuest }) {
  const [guestError, setguestError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!guest.guestName) {
      setguestError(true);
      return;
    } else setguestError(false);
    const newGuest = {
      guestName: guest.guestName,
      guestImage: guest.guestImage,
      id: crypto.randomUUID(),
    };
    handleAddGuest(newGuest);
    setGuest({ ...guest, guestImage: null, guestName: "" });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="md:p-4 gap-10 md:gap-4 flex flex-col bg-transparent w-full"
    >
      <p className="font-semibold text-neutral-200">new speaker(optional)</p>
      <div className="w-full flex flex-row gap-1 items-start">
        <div className="flex flex-col gap-1 w-full">
          <input
            value={guest.guestName}
            onChange={(e) => setGuest({ ...guest, guestName: e.target.value })}
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md text-neutral-200  w-full"
            id="guestName"
            placeholder="Guest twitter handle"
          />
          {guestError ? (
            <p className="text-red-500 text-xs">speaker name is required</p>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="bg-[#9000b3] text-xs py-4 px-4 text-nowrap rounded-md text-white shadow-lg w-fit"
        >
          Add speaker
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <GuestImageComponent guest={guest} setGuest={setGuest} />
      </div>
    </form>
  );
}

export function GuestImageComponent({ guest, setGuest }) {
  return (
    <div className="flex flex-col gap-2 text-xs">
      <label
        htmlFor="photo"
        className="bg-[#2d54f4] cursor-pointer rounded-md text-white shadow-lg py-2 px-4 w-fit"
      >
        {guest.guestImage ? "Change image" : "Add speaker's Image"}
      </label>
      <input
        onChange={({ target: { files } }) => {
          files[0] & setGuest({ ...guest, guestImage: files[0].name });
          if (files)
            setGuest({ ...guest, guestImage: URL.createObjectURL(files[0]) });
        }}
        type="file"
        accept="Image/*"
        name=""
        id="photo"
        hidden
        className="border outline-none px-4 bg-gray-700 text-wrap py-4 text-xs rounded-md"
      />

      {guest.guestImage && (
        <div className="flex flex-row gap-5 items-center">
          <p className="text-white text-xs">{guest.guestImage.slice(22)}</p>
          {/* <img
            src={guest.guestImage}
            alt=""
            className="w-[70px] border-2 rounded-full mt-3 h-[70px] shadow-lg object-cover"
          /> */}
          <MdOutlineDeleteForever
            size={20}
            onClick={() => setGuest({ ...guest, guestImage: null })}
            className="text-red-500 cursor-pointer duration-150 transition-all hover:scale-105 text-xs bg-rounded-md tshadow-lg  w-fit"
          />
        </div>
      )}
    </div>
  );
}
