import { MdOutlineDeleteForever } from "react-icons/md";

export function ImageComponent({ event, setEvent }) {
  return (
    <div className="flex flex-col gap-2 mt-3 text-xs">
      <label
        htmlFor="photo"
        className="bg-[#9000b3] cursor-pointer rounded-md text-white shadow-lg py-2 px-4 w-fit"
      >
        {event.hostImage ? "Change image" : "Add host Image"}
      </label>
      <input
        onChange={({ target: { files } }) => {
          files[0] & setEvent({ ...event, hostImage: files[0].name });
          if (files)
            setEvent({ ...event, hostImage: URL.createObjectURL(files[0]) });
        }}
        type="file"
        accept="Image/*"
        name=""
        id="photo"
        hidden
        className="border outline-none px-4 bg-gray-700 text-wrap py-4 text-xs rounded-md"
      />
      {event.hostImage && (
        <div className="flex flex-row gap-5 items-center">
          <img
            src={event.hostImage}
            alt=""
            className="w-[90px] border-2 border-[#9000b3]  mt-3 h-[90px] shadow-lg rounded-md object-cover"
          />
          <MdOutlineDeleteForever
            size={20}
            onClick={() => setEvent({ ...event, hostImage: null })}
            className="text-red-500 cursor-pointer duration-150 transition-all hover:scale-105 text-xs bg-rounded-md tshadow-lg  w-fit"
          />
        </div>
      )}
    </div>
  );
}
