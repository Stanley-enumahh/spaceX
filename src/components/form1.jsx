import DateComponent from "./Datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { TimeComponent } from "./TimePicker";

export default function Form1({
  Days,
  event,
  setEvent,
  handleNext,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleNext();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full relative md:px-4 bg-[#222140]"
    >
      <div className="flex flex-col gap-10 md:gap-4 text-neutral-200">
        <div className="flex flex-col gap-2 text-xs">
          <label htmlFor="topic" className="font-bold">
            Event topic:
          </label>
          <input
            value={event.topic}
            onChange={(e) => setEvent({ ...event, topic: e.target.value })}
            type="text"
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
            id="topic"
            placeholder="Enter event name"
          />
          {/* {errors.topic && (
            <p className="text-red-500 text-xs">{errors.topic.message}</p>
          )} */}
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <label htmlFor="host" className="font-bold">
            Add a description:
          </label>
          <input
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
            type="text"
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
            id="host"
            placeholder="example: Join us this week! as we about health in tech"
          />
          {/* {errors.host && (
            <p className="text-red-500 text-xs">{errors.host.message}</p>
          )} */}
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <label htmlFor="topic" className="font-bold">
            Add event Hashtags (optional):
          </label>
          <input
            value={event.hashtags}
            onChange={(e) => setEvent({ ...event, hashtags: e.target.value })}
            type="text"
            className="bg-transparent border-neutral-600 border outline-none px-3 py-4 text-xs rounded-md"
            id="description"
            placeholder="example: #TechTalks2025"
          />

          {/* {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )} */}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row justify-between w-full">
            <DateComponent
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <TimeComponent
              selectedTime={selectedDate}
              setSelectedDate={setSelectedTime}
            />
          </div>
          <p className="text-xs text-neutral-400">
            {selectedDate &&
              `This event will take place on the ${
                Days[selectedDate.getDay()]
              }`}
          </p>
        </div>

        <button
          type="submit"
          className="bg-[#2d54f4] w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all absolute shadow-lg bottom-6 right-6"
        >
          next
        </button>
      </div>
    </form>
  );
}
