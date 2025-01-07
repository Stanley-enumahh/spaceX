import { MdOutlineDeleteForever } from "react-icons/md";

export default function GuestForm({
  guest,
  guestArray,
  setGuestArray,
  setGuest,
  handleAddGuest,
  handleIsOpen,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const newGuest = {
      guestName: guest.guestName,
      guestImage: guest.guestImage,
      id: crypto.randomUUID(),
    };
    handleAddGuest(newGuest);
    handleIsOpen();
    setGuest({ ...guest, guestImage: null });
  }
  return (
    <div className="md:p-4 gap-10 md:gap-4 flex flex-col bg-transparent w-full">
      <p className="font-semibold text-sm text-neutral-200">new guest</p>
      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          value={guest.guestName}
          onChange={(e) => setGuest({ guest, guestName: e.target.value })}
          className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md text-neutral-200"
          id="guestName"
          placeholder="Guest twitter handle"
        />
        <p className="text-xs text-red-500">
          {!guest.guestName && "guest name is required"}
        </p>
      </div>

      <div className="flex flex-row justify-between w-full md:w-fit gap-4 items-start">
        <GuestImageComponent guest={guest} setGuest={setGuest} />

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-[#9000b3] text-xs py-2 px-4 rounded-md text-white shadow-lg w-fit"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export function GuestImageComponent({ guest, setGuest }) {
  return (
    <div className="flex flex-col gap-2 text-xs">
      <label
        htmlFor="photo"
        className="bg-[#2d54f4] cursor-pointer rounded-md text-white shadow-lg py-2 px-4 w-fit"
      >
        {guest.guestImage ? "Change image" : "Add host Image (optional)"}
      </label>
      <input
        onChange={({ target: { files } }) => {
          files[0] & setGuest({ ...event, guestImage: files[0].name });
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
          <img
            src={guest.guestImage}
            alt=""
            className="w-[70px] border-2 rounded-full mt-3 h-[70px] shadow-lg object-cover"
          />
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
