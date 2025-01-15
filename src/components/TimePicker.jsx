import { TimePicker } from "antd";
import dayjs from "dayjs";
const format = "HH:mm";

export function TimeComponent({ event, setEvent }) {
  const onChange = (time, timeString) => {
    setEvent({ ...event, selectedTime: timeString });
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="time" className="font-bold text-xs text-neutral-200">
        Time:
      </label>
      <TimePicker
        use12Hours
        defaultValue={dayjs("12:00", format)}
        format={format}
        onChange={onChange}
        className="bg-transparent text-white hover:bg-transparent border-neutral-600 border
      outline-none px-3 py-2 text-xs rounded-md"
        id="time"
      />
    </div>
  );
}
