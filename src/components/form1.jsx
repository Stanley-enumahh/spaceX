import { Link } from "react-router-dom";
import DateComponent from "./Datepicker";
import { TimeComponent } from "./TimePicker";
import { useFormContext } from "react-hook-form";

export default function Form1({ Days, event, setEvent, handleNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit(handleNext)}
      className="w-full h-full relative md:px-4 bg-[#222140]"
    >
      <div className="flex flex-col gap-10 md:gap-4 text-neutral-200">
        <div className="flex flex-col gap-2 text-xs">
          <label htmlFor="topic" className="font-bold">
            Event title:
          </label>
          <input
            {...register("topic", { required: "topic is required" })}
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
            id="topic"
            placeholder="Enter title"
          />
          {errors.topic && (
            <p className="text-red-500 text-xs">{errors.topic.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <label htmlFor="host" className="font-bold">
            Add a description:
          </label>
          <input
            {...register("description", {
              required: "description is required",
            })}
            type="text"
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
            id="host"
            placeholder="short description of event"
          />
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <label htmlFor="topic" className="font-bold">
            Add event Hashtags:
          </label>
          <input
            {...register("hashtag", { required: "event hashtag is required" })}
            type="text"
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
            id="hashtags"
            placeholder="example: #TechTalks2025"
          />

          {errors.hashtag && (
            <p className="text-red-500 text-xs">{errors.hashtag.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row md:justify-start justify-between w-full md:gap-4">
            <DateComponent event={event} setEvent={setEvent} />
            <TimeComponent event={event} setEvent={setEvent} />
          </div>
          {/* <p className="text-xs text-neutral-400">
            {selectedDate &&
              `This event will take place on the ${Days[selectedDate]}`}
          </p> */}
        </div>

        <div className="absolute right-[7px] bottom-[20px] flex flex-row gap-5">
          <Link
            to="/"
            className="border text-xs border-[#2d54f4] w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
          >
            Cancel
          </Link>

          <button className="bg-[#2d54f4] text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
