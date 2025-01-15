import { MdOutlineDeleteForever } from "react-icons/md";

export default function Background({ setEvent, event }) {
  return (
    <div className="flex flex-col gap-2 mt-3 text-xs">
      <label
        htmlFor=" bgImage"
        className="border-[#9000b3] w-[190px] border cursor-pointer rounded-md text-white shadow-lg py-2 px-4"
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
      {event.bgImage && <p className="text-white">{event.bgImage.slice(20)}</p>}
    </div>
  );
}
