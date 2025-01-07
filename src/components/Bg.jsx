import { MdOutlineDeleteForever } from "react-icons/md";

export default function Background({ setEvent, event }) {
  return (
    <div className="flex flex-col gap-2 mt-3 text-xs">
      <label
        htmlFor=" bgImage"
        className="border-[#9000b3] border cursor-pointer rounded-md text-white shadow-lg py-2 px-4 w-fit"
      >
        {event.bgImage ? "Change image" : "background Image (optional)"}
      </label>
      <input
        onChange={({ target: { files } }) => {
          files[0] & setEvent({ ...event, bgImage: files[0].name });
          if (files)
            setEvent({ ...event, bgImage: URL.createObjectURL(files[0]) });
        }}
        type="file"
        accept="Image/*"
        name=""
        id=" bgImage"
        hidden
        className="border outline-none px-4 bg-gray-700 text-wrap py-4 text-xs rounded-md"
      />
      {event.bgImage && (
        <div className="flex flex-row gap-5 items-center">
          <img
            src={event.bgImage}
            alt=""
            className="w-[90px] border-2 border-[#9000b3]  mt-3 h-[90px] shadow-lg rounded-md object-cover"
          />
          <MdOutlineDeleteForever
            size={20}
            onClick={() => setEvent({ ...event, bgImage: null })}
            className="text-red-500 cursor-pointer duration-150 transition-all hover:scale-105 text-xs bg-rounded-md tshadow-lg  w-fit"
          />
        </div>
      )}
    </div>
  );
}
