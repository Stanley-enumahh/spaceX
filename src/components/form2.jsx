import { ImageComponent } from "./ImageComponent";

export default function Form2({
  event,
  setEvent,
  hostPhoto,
  hostImage,
  setHostPhoto,
  handleNext,
  hostName,
  setHostName,
  Xname,
  setXname,
  handlePrev,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleNext();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full relative md:p-4 flex flex-col gap-10 md:gap-4"
    >
      <div className="flex flex-col gap-2 text-xs">
        <label htmlFor="name" className="font-bold text-neutral-200">
          Host full name:
        </label>
        <input
          value={event.hostName}
          onChange={(e) => setEvent({ ...event, hostName: e.target.value })}
          type="text"
          className="bg-transparent text-neutral-200 border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          id="name"
          placeholder="example: Join us this week! as we ..."
        />
        {/* {errors.host && (
            <p className="text-red-500 text-xs">{errors.host.message}</p>
          )} */}
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <label htmlFor="Xname" className="font-bold text-neutral-200">
          Host twitter handle:
        </label>
        <input
          value={event.Xname}
          onChange={(e) => setEvent({ ...event, Xname: e.target.value })}
          type="text"
          className="bg-transparent text-neutral-200 border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          id="Xname"
          placeholder="example: @StanleeOnX"
        />
        {/* {errors.host && (
            <p className="text-red-500 text-xs">{errors.host.message}</p>
          )} */}
      </div>
      <div className="flex flex-row justify-between items-center">
        <ImageComponent event={event} setEvent={setEvent} />
      </div>

      <button
        onClick={handlePrev}
        className={` border-[#2d54f4] border w-fit text-white px-6 py-1 rounded-sm hover:scale-95 durstion-150 transition-all absolute bottom-6 right-36`}
      >
        prev
      </button>

      <button
        type="submit"
        className={`bg-[#2d54f4] w-fit text-white px-6 py-1 rounded-sm hover:scale-95 durstion-150 transition-all absolute shadow-lg bottom-6 right-6`}
      >
        next
      </button>
    </form>
  );
}
