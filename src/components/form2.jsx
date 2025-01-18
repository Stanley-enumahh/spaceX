import { ImageComponent } from "./ImageComponent";
import { useFormContext } from "react-hook-form";

export default function Form2({
  event,
  setEvent,
  hostPhoto,
  hostImage,
  setHostPhoto,
  handleNext,
  handlePrev,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit(handleNext)}
      className="w-full h-full relative md:p-4 flex flex-col gap-6 md:gap-4"
    >
      <div className="flex flex-col gap-2 text-xs">
        <label htmlFor="name" className="font-bold text-neutral-200">
          Host full name:
        </label>
        <input
          {...register("hostName", { required: "host name is required" })}
          className="bg-transparent text-neutral-200 border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          id="name"
          placeholder="full name"
        />
        {errors.hostName && (
          <p className="text-red-500 text-xs">{errors.hostName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <label htmlFor="Xname" className="font-bold text-neutral-200">
          Host twitter handle:
        </label>
        <input
          {...register("Xhandle", { required: "X handle is required" })}
          type="text"
          className="bg-transparent text-neutral-200 border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
          id="Xhandle"
          placeholder="example: @StanleeOnX"
        />
        {errors.Xhandle && (
          <p className="text-red-500 text-xs">{errors.Xhandle.message}</p>
        )}
      </div>
      <div className="flex flex-row justify-between items-center">
        <ImageComponent event={event} setEvent={setEvent} />
      </div>

      <div className="absolute right-[7px] bottom-[20px] flex flex-row gap-5">
        <button
          onClick={handlePrev}
          className="border text-xs border-[#2d54f4] w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
        >
          Prev
        </button>

        <button className="bg-[#2d54f4] text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg">
          Next
        </button>
      </div>
    </form>
  );
}
